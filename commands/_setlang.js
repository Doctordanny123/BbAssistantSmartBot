/*CMD
  command: /setlang
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

let newLang = params;  
let message_id = request.message?.message_id;  

const LANGUAGES = {  
  en: "English",  
  ru: "Russian",  
  hi: "Hindi",  
  bn: "Bangla"  
};  

smartBot.setUserLang(newLang);
smartBot.add({ lang:  newLang});

if (message_id) {  
  Api.deleteMessage({  
    message_id: message_id  
  });  
}  

smartBot.run({  
  command: "/langChanged",  
  options: { lang: newLang }  
});
