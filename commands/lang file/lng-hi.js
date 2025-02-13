/*CMD
  command: lng-hi
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

const LANG_HI = {
  types: {
    welcome:
      "🎉 स्वागत है, [{first_name}](tg://user?id={telegramid})!\n\n" +
      "समुदाय को मित्रतापूर्ण और आनंददायक बनाए रखने के लिए कृपया समूह के नियमों की समीक्षा करें।\n\n" +
      "📜 *समूह नियम:* /rules\n" +
      "अपना समय आनंद लें! 😊"
  },
  commands: {
    "/start": {
      text:
        "👋 *ग्रुप असिस्टेंट बॉट में आपका स्वागत है!*\n\n" +
        "🚀 इन कमांड्स का उपयोग करके आसानी से अपने ग्रुप को प्रबंधित करें:\n\n" +
        "📜 *सामान्य कमांड्स:*\n" +
        "- `/rules` – समूह के नियम देखें\n" +
        "- `/id` – अपना या उत्तर दिए गए उपयोगकर्ता का आईडी प्राप्त करें\n" +
        "- `/admins` – समूह के एडमिन की सूची देखें\n" +
        "- `/language` – बॉट की भाषा बदलें\n\n" +
        "🔧 *एडमिन कमांड्स:*\n" +
        "- `/ban` – उपयोगकर्ता को प्रतिबंधित करें (उत्तर आवश्यक)\n" +
        "- `/unban` – प्रतिबंध हटाएं (उत्तर आवश्यक)\n" +
        "- `/mute` – उपयोगकर्ता को म्यूट करें (उत्तर आवश्यक)\n" +
        "- `/unmute` – म्यूट हटाएं (उत्तर आवश्यक)\n" +
        "- `/warn` – उपयोगकर्ता को चेतावनी दें (उत्तर आवश्यक)\n" +
        "- `/unwarn` – उपयोगकर्ता की एक चेतावनी हटाएं (उत्तर आवश्यक)\n" +
        "- `/reload` – समूह के एडमिन की सूची रीफ्रेश करें\n\n" +
        "⚙️ *नोट:* एडमिन कमांड्स का उपयोग करने के लिए आपको एडमिन होना आवश्यक है।\n\n" +
        "➕ *मुझे अपने समूह में जोड़ें:*",
      parse_mode: "Markdown",
      inline_buttons: [
        [
          {
            text: "➕ समूह में जोड़ें",
            url: "https://t.me/" + bot.name + "?startgroup=true"
          }
        ]
      ]
    },
    "/rules": {
      text:
        "🔰 *समूह नियम:*\n\n" +
        "1️⃣ *आदर करें:* सभी के साथ विनम्रता से व्यवहार करें।\n" +
        "2️⃣ *स्पैम न करें:* बार-बार एक ही संदेश, लिंक या मीडिया न भेजें।\n" +
        "3️⃣ *अनुचित सामग्री न भेजें:* समूह को सुरक्षित और सम्मानजनक बनाए रखें।\n" +
        "4️⃣ *केवल अंग्रेजी भाषा का उपयोग करें:* सभी को समझने में आसानी हो।\n" +
        "5️⃣ *गोपनीयता का सम्मान करें:* किसी की व्यक्तिगत जानकारी साझा न करें।\n" +
        "6️⃣ *स्व-प्रचार न करें:* अन्य समूहों, चैनलों या सेवाओं का विज्ञापन निषिद्ध है।\n\n" +
        "🚫 नियमों का उल्लंघन करने पर चेतावनी, म्यूट या प्रतिबंध लगाया जा सकता है।",
      parse_mode: "Markdown"
    },
    "/action": {
      text: "{reason}\n\nउपयोगकर्ता [{userid}](tg://user?id={userid}) को *{type}* कर दिया गया है। {warns}",
      parse_mode: "Markdown"
    },
    "/language": {
      text: "🌍 *अपनी भाषा चुनें:*",
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
      text: "✅ *भाषा बदल दी गई है:* {lang}",
      parse_mode: "Markdown"
    },
    "adminOnly": {
      text: "❌ *यह कमांड केवल एडमिन के लिए है।*",
      parse_mode: "Markdown"
    },
    "allAdmins": {
      text: "<b>👮 समूह एडमिन्स:</b>\n\n{adminList}",
      parse_mode: "html"
    },
    "noUseridFound": {
      text: "❌ *उपयोगकर्ता नहीं मिला।* {type} करने के लिए कृपया उनके संदेश का उत्तर दें।",
      parse_mode: "Markdown"
    },
    "userId": {
      text: "<b>👤 नाम:</b> {name}\n<b>🆔 आईडी:</b> <code>{id}</code>",
      parse_mode: "html"
    },
    "languageChanged": {
      text: "✅ *भाषा बदल दी गई है:*",
      parse_mode: "Markdown"
    }
  }
};

smartBot.setupLng("hi", LANG_HI);
