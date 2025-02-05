/*CMD
  command: @
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Smart Bot
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

const WARN_LIMIT = 3;
const GROUP_ADMINS = {};

const DEVELOPER_TG_ID = 6350762284;
const WARNINGS_KEY = `warnings_${chat?.chatid}`;
const GROUP_ADMINS_KEY = `admins_${chat?.chatid}`;

let smartBot = new SmartBot({
  params: {}
});

function isPrivate() {
  return chat?.chat_type === 'private';
};

function isDev() {
  if (!isPrivate()) {
    return false;
  }
  return user.telegramid === DEVELOPER_TG_ID;
}

if (message === '/id') {
  if (isPrivate()) {
    Bot.sendMessage(user.telegramid);
  }
}

function isGroupChat() {
  return ['group', 'supergroup'].includes(chat?.chat_type);
}

function loadGroupAdmins({ show_message = false }) {
  if (isGroupChat()) {
    Api.getChatAdministrators({
      chat_id: chat.chatid,
      on_result: '/onApiRequest',
      bb_options: { type: 'admins', show_message }
    });
  }
}

function getGroupAdmins() {
  if (isGroupChat()) {
    return Bot.getProp(GROUP_ADMINS_KEY, []);
  }
}

function isGroupAdmin() {
  if (isGroupChat()) {
    return getGroupAdmins()?.includes(user.telegramid);
  }
}

function getUserIdFromGroup() {
  if (isGroupChat()) {
    let userId = null;
    const replyMessage = request?.reply_to_message;
    
    if (replyMessage) {
      userId = replyMessage.from?.id ?? null;
    } else {
      const userIdFromParams = params?.split(' ')[0];
      if (userIdFromParams && /^\d{9,10}$/.test(userIdFromParams)) {
        userId = parseInt(userIdFromParams, 10);
      }
    }
    
    return userId;
  }
}
