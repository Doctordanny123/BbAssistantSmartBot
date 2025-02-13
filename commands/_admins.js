/*CMD
  command: /admins
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
  let adminList = [];

  for (let admin of json) {
    let name = admin.user.first_name || "Unknown";
    let userId = admin.user.id;
    adminList.push(`<b>${adminList.length + 1}.</b> <a href="tg://user?id=${userId}">${name}</a>`);
  }

  smartBot.run({
    command: "allAdmins",
    options: { adminList: adminList.join("\n") }
  });

  return;
}

Api.getChatAdministrators({
  on_result: "/admins"
});
