/*CMD
  command: /reload
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!isGroupChat() || !isGroupAdmin()) return;

loadGroupAdmins({ show_message: true });
