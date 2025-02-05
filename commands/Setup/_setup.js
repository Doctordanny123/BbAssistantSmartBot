/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!isPrivate() || !isDev()) return;

const languages = [
  {
    "name": "English",
    "code": "en",
    "flag": "🇺🇸"
  },
  // Add more languages here...
];

let cmdName;
for (let i in languages) {
  cmdName = "lng-" + languages[i].code;
  Bot.run({ command: cmdName });
}

Bot.sendMessage("✅ *Language settings updated successfully!*");

