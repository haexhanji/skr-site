import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendOrderEmail(order) {
  const to = process.env.MAIL_TO;
  const from = process.env.MAIL_FROM || 'SKR <onboarding@resend.dev>';
  if (!to) throw new Error('MAIL_TO not set');

  const lines = [
    `신청자: ${order.name || '-'}`,
    `연락처: ${order.phone || '-'}`,
    `이메일: ${order.email || '-'}`,
    `유형: ${order.type || '-'}`,
    `입금자명: ${order.depositorName || '-'}`,
    `환불 은행: ${order.refundBank || '-'}`,
    `환불 계좌: ${order.refundAccount || '-'}${order.refundHolder ? ` (${order.refundHolder})` : ''}`,
    `패키지: ${order.packageName || '-'}`,
    `추가 옵션: ${order.optionNames || '없음'}`,
    order.studentDiscount ? `학생 할인: ${order.discountAmount || ''}` : null,
    `총 금액: ${order.totalPrice || '-'}`,
    order.instagram ? `인스타그램: ${order.instagram}` : null,
    order.agency ? `소속사: ${order.agency}` : null,
    order.note ? `요청사항: ${order.note}` : null,
    '',
    `접수 시각: ${new Date().toISOString()}`,
  ].filter(Boolean).join('\n');

  return resend.emails.send({
    from,
    to,
    subject: `[SKR] 새 신청: ${order.name || ''} / ${order.packageName || ''}`,
    text: lines,
  });
}
