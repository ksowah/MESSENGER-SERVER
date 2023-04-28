const { pubsub, withFilter } = require("../../../../utils/punsub");
const mongoose = require("mongoose");

module.exports = {
  newMessage: {
    // subscribe a new message based on the chatId
    subscribe: withFilter(
      () => pubsub.asyncIterator(["NEW_MESSAGE"]),
      (payload, variables) => {
        // convert payload.newMessage.chatId to string with only the id
        const payloadChatId = new mongoose.Types.ObjectId(payload.newMessage.chatId).toString().trim();
        const variablesChatId = variables.chatId.trim();

        // Filter the events by chat ID
        return payloadChatId === variablesChatId;
      }
    ),
  },
};
