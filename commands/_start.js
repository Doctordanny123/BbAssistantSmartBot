/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (options) {
  var json = JSON.parse(options);
  if (json.status === "administrator" || json.status === "creator") {
    smartBot.run({ command: "/start" });
  }
  return;
}

Api.getChatMember({
  chat_id: chat.id,
  user_id: user.telegramid,
  on_result: "/start"
});
