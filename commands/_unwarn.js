/*CMD
  command: /unwarn
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
      options: { type: "unwarn" }
    });
    return;
  }

  let warns = Libs.ResourcesLib.anotherUserRes("warn", userId);
  
  if (warns.value() > 0) {
    warns.remove(1);
  }

  smartBot.run({
    command: "/action",
    options: { userid: userId, type: "unwarned", warns: warns.value() }
  });

  return;
}

Api.getChatMember({
  user_id: user.telegramid,
  on_result: "/unwarn"
});
