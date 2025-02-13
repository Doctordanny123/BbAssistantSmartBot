/*CMD
  command: @
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

let smartBot = new SmartBot({
  params: {},
  debug: false
});

function isPrivate() {
  return chat?.chat_type === "private";
}

function isGroupChat() {
  return ["group", "supergroup"].includes(chat?.chat_type);
}
