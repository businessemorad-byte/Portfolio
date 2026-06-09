export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, project, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL || process.env.SLACK_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `**New Portfolio Inquiry**\n\n**Name:** ${name}\n**Email:** ${email}\n**Project:** ${project || 'Not specified'}\n**Budget:** ${budget || 'Not specified'}\n**Message:** ${message}`,
        }),
      });
    } catch (_) {}
  }

  try {
    await fetch(`https://formsubmit.co/ajax/${process.env.CONTACT_EMAIL || 'businessemorad@gmail.com'}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, project, budget, message, _subject: 'New Portfolio Inquiry' }),
    });
  } catch (_) {}

  res.status(200).json({ success: true });
}
