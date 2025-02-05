/*CMD
  command: lng-en
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const LANG_EN = {
  "types": {
    "errors": {
      "userId": "⚠️ *Please reply to a user's message or provide a valid user ID.*",
      "telegram": "❌ *Telegram API Error*:\n{errorDescription}",
       "private_command_in_group": "⚠️ Please send me a private message to use this command."
    },
    "success": {
      "ban": "🚨 *User Banned!*\n👤 *[{userId}]* has been banned from the group.",
      "unban": "✅ *User Unbanned!*\n👤 *[{userId}]* has been unbanned and can rejoin the group.",
      "mute": "🔇 *User Muted!*\n👤 *[{userId}]* cannot send messages in the group.",
      "unmute": "🔊 *User Unmuted!*\n👤 *[{userId}]* can now send messages in the group.",
      "warn": "⚠️ *Warning Issued!*\n👤 *[{userId}]* now has *{userWarnings}*/*{maxWarnings}* warnings.",
      "welcome": "🎉 Welcome, [ {first_name} ](tg://user?id={telegramid})!\n\n" +
        "Please review the group rules to keep things friendly.\n\n" +
        "📜 *Rules:* /rules\n" +
        "Enjoy your stay! 😊",
      "bot_added": "🤖 *Hello! I'm your new assistant bot!* \n\n" +
        "Thank you for adding me to this group. 🎉\n" +
        "To function properly, *please grant me admin privileges!* 🔧",
      "reload": "🔄 *Admins list updated!*"
    },
    "keyboards": {
      "start": [[
        {
          text: "➕ Add to Group",
          url: "https://t.me/" + bot.name + "?startgroup=true"
        }]]
    }
  },
  "commands": {
    "/start": {
      "text": `👋 <b>Welcome to the Group Assistance Bot!</b>\n\n` +
        `🚀 Use me to manage your group efficiently with a variety of features.\n\n` +
        `💬 <b>Commands you can use in your group:</b>\n` +
        `- /rules: See the group rules\n` +
        `- /ban [reply or userId]: Ban a user from the group\n` +
        `- /unban [reply or userId]: Unban a user from the group\n` +
        `- /mute [reply or userId]: Mute a user in the group\n` +
        `- /unmute [reply or userId]: Unmute a user in the group\n` +
        `- /warn [reply or userId]: Issue a warning to a user\n` +
        `- /reload: Refresh the list of group admins (Admin only)`,
      "parse_mode": "HTML",
      "inline_buttons": "#/keyboards/start"
    },
    "/rules": {
      "text": `🔰 *Group Rules:*\n\n` +
        `1️⃣ *Be respectful*: Treat everyone with kindness.\n` +
        `2️⃣ *No spamming*: Avoid sending repetitive messages, images, or links.\n` +
        `3️⃣ *No inappropriate content*: Respect the community and avoid sharing offensive material.\n` +
        `4️⃣ *English only*: Please communicate in English for better understanding.\n` +
        `5️⃣ *Respect privacy*: Do not share anyone's personal information without permission.\n` +
        `6️⃣ *No self-promotion*: Do not advertise other groups, channels, or services.\n\n` +
        `🚫 *Failure to follow the rules will result in warnings or bans.*`
    },
    "sendMessage": {
      text: "{message}"
    },
  }
};

smartBot.setupLng("en", LANG_EN);
