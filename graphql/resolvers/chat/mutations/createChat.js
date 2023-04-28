const Authenticate = require("../../../../middleware/auth");
const Chat = require("../../../../models/Chat");

module.exports = {
    createChat: async (_, { createChatInput: { chatMember } }, context) => {
      const user = Authenticate(context);

    //   check if chat already exists
      const existingChat = await Chat.findOne({
        users: { $all: [user.id, ...chatMember] },
      });
      if (existingChat) {
        return existingChat;
      }

    //   create new chat
      const users = [user.id, ...chatMember];
      const newChat = new Chat({ users });
      const chat = await newChat.save();

      return chat;
    },
};
