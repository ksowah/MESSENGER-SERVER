const getUsers = require('./user/queries/getAllUsers');
const getUser = require('./user/queries/getMe');
const getChats = require('./chat/queries/getChats');

module.exports = {
    ...getUsers,
    ...getUser,
    ...getChats,
};