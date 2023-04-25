// const Authenticate = require("../../../../middleware/auth");
const User = require("../../../../models/User");

const updateUser = async (_, { ID, field, value }, context) => {
    // Authenticate(context);
  
    try {
      const user = await User.findById(ID);
      if (user) {
        user[field] = value;
        await user.save();
        return user;
      } else {
        throw new Error("User not found");
      }
    } catch (err) {
      throw new Error(err);
    }
  };

module.exports = {
    updateUser,
};

