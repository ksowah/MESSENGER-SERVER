const jwt = require('jsonwebtoken');

const Authenticate = (context) => {
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWT_SECRET);
                return user;
            } catch (error) {
                throw new Error("Invalid/Expired token");
            }
        }

        throw new Error("Authentication token must be bearer token");
    }
    throw new Error("Authorization header must be provided");
}

module.exports = Authenticate;