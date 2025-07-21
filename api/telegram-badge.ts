export default async function handler(req, res) {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).send("Missing BOT_TOKEN or CHAT_ID");
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chatId}`);
    const data = await tgRes.json();

    if (!data.ok) throw new Error(data.description || "Failed to fetch");

    const members = data.result;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20">
        <rect width="180" height="20" fill="#2AABEE" rx="4"/>
        <text x="10" y="14" font-size="12" fill="#fff" font-family="Arial, sans-serif">
          👥 Telegram: ${members} members
        </text>
      </svg>`;

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache");
    return res.status(200).send(svg);
  } catch (err) {
    return res.status(500).send(`Error: ${err.message}`);
  }
}
