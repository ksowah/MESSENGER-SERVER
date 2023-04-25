const queryResolvers = require('./queries');
const mutationResolvers = require('./mutations');
const subscriptionResolvers = require('./subscriptions');

module.exports = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
    Subscription: subscriptionResolvers
}