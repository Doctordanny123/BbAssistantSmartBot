/*CMD
  command: /unban
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

Api.unbanChatMember({
  chat_id: chat.chatid,
  user_id: userId,
  only_if_banned: true,
  on_result: '/onApiRequest',
  on_error: '/onApiRequest',
  bb_options: { type: 'unban', userId }
});

return;

