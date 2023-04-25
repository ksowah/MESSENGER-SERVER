const Message = require('../../../../models/Message')
const { PubSub } = require('graphql-subscriptions');
const Authenticate = require('../../../../middleware/auth');

module.exports = {
    newMessage: async (_, { messageInput: { body }}, context) => {

        const user = Authenticate(context);
        
        const pubsub = new PubSub();

        if (body.trim() === '') {
            return null
        }

        const newMessage = new Message({
            body,
            createdBy: user.id,
            username: user.username,
            createdAt: new Date().toISOString()
        });

        const message = await newMessage.save();

        pubsub.publish('NEW_MESSAGE', { 
            newMessage: message
        });

        return message;
    }
};