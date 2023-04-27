const getUsers = require('./user/queries/getAllUsers');
const getUser = require('./user/queries/getUser');
const getChats = require('./chat/queries/getChats');

module.exports = {
    ...getUsers,
    ...getUser,
    ...getChats,
};