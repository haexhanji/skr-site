import { sql } from '../../lib/db.js';
import { verifyAdmin } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (!verifyAdmin(req)) return res.status(401).json({ ok: false, error: 'unauthorized' });

  try {
    if (req.method === 'GET') {
      const rows = await sql`
        SELECT id, created_at, path, referrer, ua, ip
        FROM visits
        ORDER BY created_at DESC
        LIMIT 500
      `;
      const summary = await sql`
        SELECT
          COUNT(*)::int AS total,
          COUNT(DISTINCT ip) AS unique_ips,
          COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours')::int AS today
        FROM visits
      `;
      res.setHeader('Cache-Control', 'no-store');
      return res.status(200).json({
        ok: true,
        visits: rows,
        summary: summary[0] || { total: 0, unique_ips: 0, today: 0 },
      });
    }
    if (req.method === 'DELETE') {
      await sql`DELETE FROM visits`;
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ ok: false });
  } catch (e) {
    console.error('[admin/logs] error', e);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
