// const Authenticate = require("../../../../middleware/auth");
const Authenticate = require("../../../../middleware/auth");
const User = require("../../../../models/User");

async function getMe(_, { ID }, context) {
 
    
    try {
        const user = Authenticate(context)

        return user;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getMe,
};
