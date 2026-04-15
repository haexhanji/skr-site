import { buildAdminCookie } from '../../lib/auth.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  }
  try {
    if (!process.env.ADMIN_PASSWORD || !process.env.ADMIN_COOKIE_SECRET) {
      return res.status(500).json({ ok: false, error: 'server not configured' });
    }
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const pw = body?.password || '';
    if (pw !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ ok: false, error: 'wrong password' });
    }
    res.setHeader('Set-Cookie', buildAdminCookie());
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[login] error', e);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
