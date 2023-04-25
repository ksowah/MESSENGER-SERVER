const register = require("./user/mutations/register");
const login = require("./user/mutations/login");
const updateUser = require("./user/mutations/updateUser");

module.exports = {
    ...register,
    ...login,
    ...updateUser,
};