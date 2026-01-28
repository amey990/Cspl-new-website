export const runtime = 'nodejs';

type Msg = { role: 'user' | 'assistant' | 'system'; content: string };

function replyFromFAQ(last: string) {
  const q = last.toLowerCase();

  if (q.includes('services') || q.includes('offer') || q.includes('solutions')) {
    return `Commedia Solutions can help across:\n• Network & Infrastructure\n• Wireless Networking (Wi-Fi design/rollout)\n• Cloud Solutions\n• Network Security\n• Monitoring / NOC assistance\n\nTell me what you’re trying to build or fix, and I’ll guide you step-by-step.`;
  }

  if (q.includes('contact') || q.includes('reach') || q.includes('email') || q.includes('phone')) {
    return `You can contact us using the website’s Contact / Contact Sales page.\n\nIf you tell me what you need (project type + location + timeline), I’ll help you draft the exact message to send.`;
  }

  if (q.includes('wireless') || q.includes('wifi') || q.includes('roaming') || q.includes('meraki')) {
    return `Yes — we support Wi-Fi planning and deployment (coverage planning, channel design, high-density tuning, roaming stability, and managed Wi-Fi like Meraki).\n\nWhat’s your environment: office / campus / public space, and approx users per area?`;
  }

  return `Got it. Tell me:\n1) What problem you’re facing (1–2 lines)\n2) Your environment (office/campus/industrial/public)\n3) Any vendor stack (Cisco/Meraki/Aruba/etc)\n\nI’ll suggest the best next steps.`;
}

function suggestFollowUps(text: string) {
  const t = text.toLowerCase();
  if (t.includes('wireless') || t.includes('wifi')) return ['Do you do site surveys?', 'Can you help with channel planning?'];
  if (t.includes('cloud')) return ['Which cloud providers do you support?', 'Do you offer cloud security reviews?'];
  if (t.includes('contact')) return ['Where is the Contact page?', 'Can you help me write a message?'];
  return ['What services does Commedia Solutions offer?', 'How can I contact Commedia Solutions?'];
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const messages = (body?.messages || []) as Msg[];

  const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content?.trim() || '';
  const reply = replyFromFAQ(lastUser);
  const suggestions = suggestFollowUps(reply);

  return Response.json({ reply, suggestions });
}
