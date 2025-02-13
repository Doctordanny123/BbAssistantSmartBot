/*CMD
  command: /mute
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

var message_id = request.message?.message_id;

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
        type: "mute"
      }
    });
    return;
  }

  Api.restrictChatMember({
    user_id: userId,
    permissions: { can_send_messages: false }
  });

  smartBot.run({
    command: "/action",
    options: { userid: userId, tyep: "Muted" }
  });

  return;
}

Api.getChatMember({
  user_id: user.telegramid,
  on_result: "/mute"
});
