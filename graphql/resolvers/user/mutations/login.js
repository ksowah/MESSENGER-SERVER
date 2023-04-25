const User = require("../../../../models/User");
const bcrypt = require('bcryptjs');
const GENERATE_TOKEN = require('../../../../utils/functions');

const login = async (_, { loginInput: { username, password } }) => {
    
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        const token = GENERATE_TOKEN(user);
        user.token = token;
        return user;
    }else {
        throw new Error('Invalid credentials');
    }

};

module.exports = {
    login,
};