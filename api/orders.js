import { sql } from '../lib/db.js';
import { sendOrderEmail } from '../lib/mail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    if (!body || typeof body !== 'object') {
      return res.status(400).json({ ok: false, error: 'bad payload' });
    }

    const { name, phone, email, packageName, optionNames, totalPrice } = body;

    await sql`
      INSERT INTO orders (name, phone, email, package_name, option_names, total_price, raw)
      VALUES (
        ${name || null},
        ${phone || null},
        ${email || null},
        ${packageName || null},
        ${optionNames || null},
        ${totalPrice || null},
        ${JSON.stringify(body)}::jsonb
      )
    `;

    try {
      await sendOrderEmail(body);
    } catch (mailErr) {
      console.error('[orders] mail failed', mailErr);
      // Still return success — order is saved. Admin will see it in DB.
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[orders] error', e);
    return res.status(500).json({ ok: false, error: 'server error' });
  }
}
