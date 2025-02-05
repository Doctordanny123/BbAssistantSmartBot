/*CMD
  command: /unmute
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

Api.restrictChatMember({
  chat_id: chat.chatid,
  user_id: userId,
  permissions: {
    can_send_messages: true,
    can_send_media_messages: true,
    can_send_polls: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true,
  },
  on_result: '/onApiRequest',
  on_error: '/onApiRequest',
  bb_options: { type: 'unmute', userId }
});

return;

