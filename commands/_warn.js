/*CMD
  command: /warn
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
      options: { type: "warn" }
    });
    return;
  }

  let warns = Libs.ResourcesLib.anotherUserRes("warn", userId);
  warns.add(1);

  if (warns.value() > 2) {
    warns.set(0);

    Api.restrictChatMember({
      user_id: userId,
      permissions: { can_send_messages: false },
      until_date: Date.now() / 1000 + 7 * 24 * 60 * 60
    });

    smartBot.run({
      command: "/action",
      options: { userid: userId, type: "muted", reason: "Exceeded warning limit" }
    });

    return;
  }

  smartBot.run({
    command: "/action",
    options: { userid: userId, type: "warned", warns: warns.value() }
  });

  return;
}

Api.getChatMember({
  user_id: user.telegramid,
  on_result: "/warn"
});
