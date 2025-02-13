/*CMD
  command: /setup
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

//if (!isPrivate() || !isDev()) return;

const languages = ['en', 'hi', 'bn', 'ru']

let cmdName;
for(let i in languages){
  cmdName = "lng-" + languages[i];
  Bot.run({ command: cmdName })
}

Bot.sendMessage("Setup complete.");
