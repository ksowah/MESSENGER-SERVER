const register = require("./user/mutations/register");
const login = require("./user/mutations/login");
const updateUser = require("./user/mutations/updateUser");
const newMessage = require("./message/mutation/newMessage");
const createChat = require("./chat/mutations/createChat");

module.exports = {
    ...register,
    ...login,
    ...updateUser,
    ...newMessage,
    ...createChat,
};