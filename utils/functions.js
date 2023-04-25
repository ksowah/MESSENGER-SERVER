const jwt = require('jsonwebtoken');

const GENERATE_TOKEN = (user) => {
    return jwt.sign({
        id: user.id,
        email: user.email,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: '2h' });
}

module.exports = GENERATE_TOKEN;

