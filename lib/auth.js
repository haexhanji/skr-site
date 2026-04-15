import { createHmac, timingSafeEqual } from 'node:crypto';

const COOKIE_NAME = 'skr_admin';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

function sign(payload) {
  const secret = process.env.ADMIN_COOKIE_SECRET || '';
  return createHmac('sha256', secret).update(payload).digest('hex');
}

export function buildAdminCookie() {
  const issued = String(Date.now());
  const token = `${issued}.${sign(issued)}`;
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${MAX_AGE}`;
}

export function clearAdminCookie() {
  return `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0`;
}

export function verifyAdmin(req) {
  const raw = req.headers?.cookie || '';
  const entry = raw.split(/;\s*/).find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!entry) return false;
  const token = entry.slice(COOKIE_NAME.length + 1);
  const [issued, sig] = token.split('.');
  if (!issued || !sig) return false;
  const expected = sign(issued);
  try {
    const a = Buffer.from(sig, 'hex');
    const b = Buffer.from(expected, 'hex');
    if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  } catch {
    return false;
  }
  const ageSec = (Date.now() - Number(issued)) / 1000;
  if (!Number.isFinite(ageSec) || ageSec > MAX_AGE) return false;
  return true;
}
