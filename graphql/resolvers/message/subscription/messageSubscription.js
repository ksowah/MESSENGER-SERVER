const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

module.exports = {
    newMessage: {
        subscribe: () => pubsub.asyncIterator(['NEW_MESSAGE'])
    }
};