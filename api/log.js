import { sql } from '../lib/db.js';
import { readJson } from '../lib/body.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(200).json({ ok: true });
  }
  try {
    const body = await readJson(req) || {};
    const path = String(body.path || '/').slice(0, 500);
    const referrer = String(body.referrer || '').slice(0, 1000);
    const ua = String(req.headers['user-agent'] || '').slice(0, 500);
    const ip = String(
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.headers['x-real-ip'] ||
      req.socket?.remoteAddress ||
      ''
    ).slice(0, 100);

    await sql`
      INSERT INTO visits (path, referrer, ua, ip)
      VALUES (${path}, ${referrer}, ${ua}, ${ip})
    `;
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[log] error', e);
    return res.status(200).json({ ok: true });
  }
}
