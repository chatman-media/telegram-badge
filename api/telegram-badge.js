module.exports = async function (req, res) {
  const token = process.env.BOT_TOKEN;
  const chatId = process.env.CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).send("Missing BOT_TOKEN or CHAT_ID");
  }

  try {
    const apiUrl = `https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${encodeURIComponent(chatId)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data.ok) {
      return res.status(500).send(`Telegram API error: ${data.description}`);
    }

    const members = data.result;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="200" height="20">
        <rect width="200" height="20" fill="#2AABEE" rx="4"/>
        <text x="10" y="14" font-size="12" fill="#fff" font-family="Arial, sans-serif">
          👥 Telegram: ${members} members
        </text>
      </svg>`;

    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "no-cache");
    res.status(200).send(svg);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server error: ${err.message}`);
  }
};