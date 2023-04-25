const User = require("../../../../models/User");
const bcrypt = require('bcryptjs');
const GENERATE_TOKEN = require('../../../../utils/functions');

const register = async (_, { registerInput: { username, email, password, avatar } }) => {
    
    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
        throw new Error('This user already exists');
    }

    let encryptedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
        username,
        email,
        password: encryptedPassword,
        avatar: avatar || "",
    });

    const res = await newUser.save();

    const token = GENERATE_TOKEN(res);

    res.token = token;

    return res;
};

module.exports = {
    register,
};