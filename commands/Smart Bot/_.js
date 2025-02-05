/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Smart Bot
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (isGroupChat()) {
  if (request?.new_chat_members?.length > 0) {
    const newUser = request.new_chat_members[0];

    if (newUser.username && newUser.username === bot.name) {
      smartBot.add({
        message: `#/success/bot_added`
      });
      loadGroupAdmins({ show_message: false });
    } else {
      smartBot.add({
        telegramid: newUser.id,
        first_name: newUser.first_name,
        message: `#/success/welcome`
      });
    }

    smartBot.run({ command: 'sendMessage' });
  } else if (message) {
    const parts = message.split("@");
    const real_command = parts?.[0];
    const botName = parts?.[1];
    if (botName && botName === bot.name) {
      smartBot.run({
        command: real_command
      });
    }
  }
}
