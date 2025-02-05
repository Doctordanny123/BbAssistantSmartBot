# Group Assistance Bot

## Description

The **Group Assistance Bot** is a powerful Telegram bot designed to manage group chats efficiently. It helps admins maintain control of the group by offering various moderation features, such as banning, unbanning, muting, unmuting users, issuing warnings, and more.

This bot is intended for Telegram groups and is designed to be user-friendly, allowing admins to manage their groups effectively with simple commands.

## Features

- **User Management:**
  - **Ban/Unban** users from the group.
  - **Mute/Unmute** users, preventing or allowing them to send messages.
  - **Warn** users for breaking group rules.

- **Group Info:**
  - Displays the **group rules**.
  - Sends a welcome message when new users join the group.
  - Provides feedback when commands are successfully executed (e.g., user banned, user muted).

- **Bot Commands:**
  - `/start`: Displays the bot’s introduction and a list of available commands.
  - `/rules`: Shows the group’s rules.
  - `/ban [userId or reply]`: Ban a user from the group.
  - `/unban [userId or reply]`: Unban a user from the group.
  - `/mute [userId or reply]`: Mute a user in the group.
  - `/unmute [userId or reply]`: Unmute a user in the group.
  - `/warn [userId or reply]`: Issue a warning to a user.
  - `/reload`: Refreshes the list of group admins (only available to admins).
  - `/setup`: Initializes and sets up the bot for the group (admin-only command).

## Setup Instructions

### 1. **Bot Setup**
   - Create a Telegram bot by chatting with **@BotFather** on Telegram.
   - Get your **API token** from **@BotFather**.

### 2. **Configure the Bot**
   - Open the bot’s "@" command code and locate the `DEVELOPER_TG_ID` constant.
   - Set the `DEVELOPER_TG_ID` to your Telegram user ID (the bot developer's ID).

     Example:
     ```javascript
     const DEVELOPER_TG_ID = 1234567890;  // Replace with your Telegram user ID
     ```

### 3. **Run the `/setup` Command**
   - Before adding the bot to any group or testing it, the **bot developer** must first run the `/setup` command in a private chat with the bot.
   - This step initializes the bot, configures settings, and prepares it for group integration.
   - To do this, start a conversation with your bot and run the `/setup` command.

### 4. **Add the Bot to Your Group**
   - After running the `/setup` command, add the bot to your Telegram group and make it an **admin** with the necessary permissions (like banning, muting, etc.).

### 5. **Customizing the Language File**
   - The bot’s responses are customizable through the `LANG_EN` object, which contains all the messages for different actions (success, errors, warnings, etc.).
   - You can update these messages to fit your group’s needs.

### 6. **Bot Permissions**
   - Ensure the bot has **admin permissions** to perform actions like banning, muting, and issuing warnings.

### 7. **Testing the Bot**
   - Once everything is set up, test the bot by issuing commands in the group chat.
   - Ensure that admins have proper privileges and the bot responds with appropriate messages.

## Contributing

Feel free to fork the repository and submit pull requests if you wish to add new features, fix bugs, or improve the documentation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
