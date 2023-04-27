const Authenticate = require("../../../../middleware/auth");
const Chat = require("../../../../models/Chat");

module.exports = {
    getChats: async (_, {}, context) => {
      const user = Authenticate(context);
      const chats = await Chat.find({ users: user.id }).populate("users");

      return chats;
    },
};
