/*CMD
  command: /ban
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
  var json = options.result;

  if (json.status !== "administrator" && json.status !== "creator") {
    smartBot.run({ command: "adminOnly" });
    return;
  }

  let userId = request?.reply_to_message?.from?.id;

  if (!userId) {
    smartBot.run({
      command: "noUseridFound",
      options: {
        type: "ban"
      }
    });
    return;
  }

  Api.banChatMember({
    user_id: userId
  });

  smartBot.run({
    command: "/action",
    options: { userid: userId, type: "banned" }
  });

  return;
}

Api.getChatMember({
  user_id: user.telegramid,
  on_result: "/ban"
});
