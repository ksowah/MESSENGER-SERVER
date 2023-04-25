const getUsers = require('./user/queries/getAllUsers');
const getUser = require('./user/queries/getUser');

module.exports = {
    ...getUsers,
    ...getUser,
};