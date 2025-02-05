/*CMD
  command: /mute
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
    can_send_messages: false,
    can_send_media_messages: false,
    can_send_polls: false,
    can_send_other_messages: false,
    can_add_web_page_previews: false,
  },
  on_result: '/onApiRequest',
  on_error: '/onApiRequest',
  bb_options: { type: 'mute', userId }
});

return;

