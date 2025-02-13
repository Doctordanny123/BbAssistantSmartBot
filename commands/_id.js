/*CMD
  command: /id
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

let userId = request?.reply_to_message?.from?.id || user.telegramid;
let userName = request?.reply_to_message?.from?.first_name || user.first_name;

smartBot.run({
  command: "userId",
  options: { id: userId, name: userName }
});
