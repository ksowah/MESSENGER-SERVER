const Authenticate = require("../../../../middleware/auth");
const Chat = require("../../../../models/Chat");

module.exports = {
    getChats: async (_, {}, context) => {
      const user = Authenticate(context);
      const chats = await Chat.find({ users: { $in: [user.id] } }).populate(
        "users"
      );

      console.log("chats", chats[0].users)

      return chats;
    },
};
