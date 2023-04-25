const { pubsub } = require("../../../../utils/punsub");

module.exports = {
  newMessage: {
    subscribe: () => pubsub.asyncIterator("NEW_MESSAGE")
  },
};

// console.log("newMessage subscription", pubsub.asyncIterator("NEW_MESSAGE").pubsub.ee._events);