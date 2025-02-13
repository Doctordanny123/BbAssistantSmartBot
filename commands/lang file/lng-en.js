/*CMD
  command: lng-en
  help: 
  need_reply: false
  auto_retry_time: 
  folder: lang file

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

const LANG_EN = {
  types: {
    welcome:
      "🎉 Welcome, [{first_name}](tg://user?id={telegramid})!\n\n" +
      "Please review the group rules to keep the community friendly and enjoyable.\n\n" +
      "📜 *Group Rules:* /rules\n" +
      "Enjoy your time here! 😊"
  },
  commands: {
    "/start": {
      text:
        "👋 *Welcome to the Group Assistance Bot!*\n\n" +
        "🚀 Manage your group effortlessly with these commands:\n\n" +
        "📜 *General Commands:*\n" +
        "- `/rules` – View group rules\n" +
        "- `/id` – Get your Telegram ID (or the ID of a replied user)\n" +
        "- `/admins` – View the list of group admins\n" +
        "- `/language` – Change the bot's language\n\n" +
        "🔧 *Admin Commands:*\n" +
        "- `/ban` – Ban a user (reply required)\n" +
        "- `/unban` – Unban a user (reply required)\n" +
        "- `/mute` – Mute a user (reply required)\n" +
        "- `/unmute` – Unmute a user (reply required)\n" +
        "- `/warn` – Issue a warning to a user (reply required)\n" +
        "- `/unwarn` – Remove one warning from a user (reply required)\n" +
        "- `/reload` – Refresh the list of group admins\n\n" +
        "⚙️ *Note:* Admin-only commands require the sender to be an administrator.\n\n" +
        "➕ *Add me to your group:*",
      parse_mode: "Markdown",
      inline_buttons: [
        [
          {
            text: "➕ Add to Group",
            url: "https://t.me/" + bot.name + "?startgroup=true"
          }
        ]
      ]
    },
    "/rules": {
      text:
        "🔰 *Group Rules:*\n\n" +
        "1️⃣ *Be respectful:* Treat everyone with kindness.\n" +
        "2️⃣ *No spamming:* Avoid repetitive messages, links, or media.\n" +
        "3️⃣ *No inappropriate content:* Keep discussions safe and respectful.\n" +
        "4️⃣ *English only:* Use English for better communication.\n" +
        "5️⃣ *Respect privacy:* Do not share personal information.\n" +
        "6️⃣ *No self-promotion:* Advertising is not allowed.\n\n" +
        "🚫 Breaking the rules may result in warnings, mutes, or bans.",
      parse_mode: "Markdown"
    },
    "/action": {
      text: "{reason}\n\nUser [{userid}](tg://user?id={userid}) has been *{type}*. {warns}",
      parse_mode: "Markdown"
    },
    "/language": {
      text: "🌍 *Select your language:*",
      parse_mode: "Markdown",
      inline_buttons: [
        [
          { text: "🇬🇧 English", callback_data: "/setlang en" },
          { text: "🇷🇺 Русский", callback_data: "/setlang ru" }
        ],
        [
          { text: "🇮🇳 हिंदी", callback_data: "/setlang hi" },
          { text: "🇧🇩 বাংলা", callback_data: "/setlang bn" }
        ]
      ]
    },
    "/setlang": {
      text: "✅ *Language has been changed to:* {lang}",
      parse_mode: "Markdown"
    },
    "adminOnly": {
      text: "❌ *This command is for group admins only.*",
      parse_mode: "Markdown"
    },
    "allAdmins": {
      text: "<b>👮 Group Admins:</>\n\n{adminList}",
      parse_mode: "html"
    },
    "noUseridFound": {
      text: "❌ *User not found.* Please reply to their message to {type} them.",
      parse_mode: "Markdown"
    },
    "userId": {
      text: "<b>👤 Name:</b> {name}\n<b>🆔 ID:</b> <code>{id}</code>",
      parse_mode: "html"
    },
    "languageChanged": {
      text: "✅ *Language has been changed",
      parse_mode: "Markdown"
    }
  }
}

smartBot.setupLng("en", LANG_EN);
