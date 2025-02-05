/*CMD
  command: /warn
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!isGroupChat() || !isGroupAdmin()) return;

const userId = getUserIdFromGroup();

if (!userId) {
  smartBot.add({ message: '#/errors/userId' });
  smartBot.run({ command: 'sendMessage' });
  return;
}

const maxWarnings = WARN_LIMIT;
let allWarnings = Bot.getProp(WARNINGS_KEY, {});
let userWarnings = allWarnings[userId] || 0;

userWarnings += 1;
allWarnings[userId] = userWarnings;

smartBot.add({
  userId,
  userWarnings: userWarnings,
  maxWarnings,
  message: `#/success/warn`
});
smartBot.run({ command: 'sendMessage' });

if (userWarnings >= maxWarnings) {
  smartBot.run({ command: `/mute ${userId}` });
  delete allWarnings[userId];
}

Bot.setProp(WARNINGS_KEY, allWarnings, 'json');
return;

