const { pubsub } = require("../../../../utils/punsub");

module.exports = {
  newMessage: {
    // subscribe a new message based on the chatId
    subscribe: (_, { chatId }) => pubsub.asyncIterator(`NEW_MESSAGE_${chatId}`),
  },
};
