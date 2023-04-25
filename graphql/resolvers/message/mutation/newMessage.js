const Message = require("../../../../models/Message");
const Authenticate = require("../../../../middleware/auth");
const { pubsub } = require("../../../../utils/punsub");

module.exports = {
  newMessage: async (_, { messageInput: { body } }, context) => {
    const user = Authenticate(context);

    if (body.trim() === "") {
      throw new Error("Message body must not be empty");
    }

    const newMessage = new Message({
        body,
        createdBy: user.id,
        username: user.username,
        createdAt: new Date().toISOString()
    });

    const message = await newMessage.save();
   
    
    await pubsub.publish("NEW_MESSAGE", {
        newMessage: message,
    });


    return message;
  },
};
