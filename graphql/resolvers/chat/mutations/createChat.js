const Authenticate = require("../../../../middleware/auth");
const Chat = require("../../../../models/Chat");
const User = require("../../../../models/User");

module.exports = {
    createChat: async (_, { createChatInput: { chatMembers } }, context) => {
      const user = Authenticate(context);

    //   check if chat already exists
      const existingChat = await Chat.findOne({
        users: { $all: [user.id, ...chatMembers] },
      });
      if (existingChat) {
        return existingChat;
      }

    //   create new chat
      const users = [user.id, ...chatMembers];
      const newChat = new Chat({ users });
      const chat = await newChat.save();

    //   add chat id to corresponding users by updating the chats field of the User model
      await Promise.all([
        User.updateMany({ _id: { $in: users } }, { $push: { chats: chat.id } }),
        Chat.populate(chat, "users"),
      ]);

      return chat;
    },
};
