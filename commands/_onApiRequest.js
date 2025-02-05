/*CMD
  command: /onApiRequest
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (options) {
  const { result, bb_options, error } = options;
  const { type, userId, show_message } = bb_options;
  
  if (error) {
    const match = error.match(/description: "([^"]+)"/);
    const errorDescription = match ? match[1] : "An unknown error occurred.";

    smartBot.add({ errorDescription, message: '#/errors/telegram' });
    smartBot.run({ command: 'sendMessage' });
    return;
  }

  if (type === 'admins') {
    const groupAdmins = result.map((admin) => admin.user.id);
    Bot.setProp(GROUP_ADMINS_KEY, groupAdmins, 'json');
    
    if (show_message) {
      smartBot.add({ message: `#/success/reload` });
      smartBot.run({ command: 'sendMessage' });
    }
    return;
  }
  
  if (['ban', 'unban', 'mute', 'unmute'].includes(type)) {
    smartBot.add({ userId, message: `#/success/${type}` });
    smartBot.run({ command: 'sendMessage' });
    return;
  }
}
