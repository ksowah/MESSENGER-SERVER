const register = require("./user/mutations/register");
const login = require("./user/mutations/login");
const updateUser = require("./user/mutations/updateUser");
const newMessage = require("./message/mutation/newMessage");

module.exports = {
    ...register,
    ...login,
    ...updateUser,
    ...newMessage
};