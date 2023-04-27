const Message = require("../../../../models/Message");
const Authenticate = require("../../../../middleware/auth");
const { pubsub } = require("../../../../utils/punsub");

module.exports = {
  newMessage: async (_, { messageInput: { body, chatId } }, context) => {
    const user = Authenticate(context);

    if (body.trim() === "") {
      throw new Error("Message body must not be empty");
    }

    const newMessage = new Message({
        body,
        sender: user.id,
        createdAt: new Date().toISOString(),
        chatId,
    });

    const message = await newMessage.save();

    // publish a new message to the chatId
    pubsub.publish(`NEW_MESSAGE`, {
      newMessage: message,
    });

    return message;
  },
};
