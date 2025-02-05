/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (isGroupChat() && isGroupAdmin()) {
  smartBot.add({ message: '#/errors/private_command_in_group' });
  smartBot.run({ command: 'sendMessage' });
  return;
}

if (!isPrivate()) return;

