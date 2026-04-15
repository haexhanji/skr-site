import { sql } from '../lib/db.js';
import { verifyAdmin } from '../lib/auth.js';
import { readJson } from '../lib/body.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const rows = await sql`SELECT data FROM site_content WHERE id = 1`;
      const data = rows[0]?.data ?? null;
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ ok: true, data });
    }

    if (req.method === 'PUT') {
      if (!verifyAdmin(req)) return res.status(401).json({ ok: false, error: 'unauthorized' });
      const body = await readJson(req);
      const data = body?.data;
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ ok: false, error: 'bad payload' });
      }
      await sql`
        INSERT INTO site_content (id, data, updated_at)
        VALUES (1, ${JSON.stringify(data)}::jsonb, NOW())
        ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
      `;
      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, PUT');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  } catch (e) {
    console.error('[content] error', e);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
