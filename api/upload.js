import { put } from '@vercel/blob';
import sharp from 'sharp';
import { randomBytes } from 'node:crypto';
import { verifyAdmin } from '../lib/auth.js';

export const config = { api: { bodyParser: false } };

async function readBody(req) {
  if (req.body && Buffer.isBuffer(req.body)) return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  }
  if (!verifyAdmin(req)) {
    return res.status(401).json({ ok: false, error: 'unauthorized' });
  }

  try {
    const buf = await readBody(req);
    if (!buf || !buf.length) {
      return res.status(400).json({ ok: false, error: 'empty body' });
    }

    const base = randomBytes(8).toString('hex');
    const [largeBuf, smallBuf] = await Promise.all([
      sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer(),
      sharp(buf).rotate().resize({ width: 800,  withoutEnlargement: true }).webp({ quality: 78 }).toBuffer(),
    ]);

    const [large, small] = await Promise.all([
      put(`skr/${base}-1600.webp`, largeBuf, { access: 'public', contentType: 'image/webp' }),
      put(`skr/${base}-800.webp`,  smallBuf, { access: 'public', contentType: 'image/webp' }),
    ]);

    return res.status(200).json({
      ok: true,
      src: large.url,
      thumb: small.url,
    });
  } catch (e) {
    console.error('[upload] error', e);
    return res.status(500).json({ ok: false, error: 'upload failed' });
  }
}
