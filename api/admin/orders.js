import { sql } from '../../lib/db.js';
import { verifyAdmin } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ ok: false, error: 'unauthorized' });

  try {
    if (req.method === 'GET') {
      const rows = await sql`
        SELECT id, created_at, name, phone, email, package_name, option_names, total_price, raw
        FROM orders
        ORDER BY created_at DESC
        LIMIT 500
      `;
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({ ok: true, orders: rows });
    }
    if (req.method === 'DELETE') {
      await sql`DELETE FROM orders`;
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, DELETE');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  } catch (e) {
    console.error('[admin/orders] error', e);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
