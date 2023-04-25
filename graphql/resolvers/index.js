const queryResolvers = require('./queries');
const mutationResolvers = require('./mutations');

module.exports = {
    Query: queryResolvers,
    Mutation: mutationResolvers,
}