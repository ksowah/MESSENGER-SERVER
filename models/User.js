const { model, Schema } = require('mongoose');

// lookup mongoose schema properties
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
    },
    password: {
        type:String,
        required: true,
    },
    avatar: {
        type: String,
        default: ""
    },
    chats: [
        {
          type: Schema.Types.ObjectId,
          ref: "Chat",
        },
      ],
    token: String,
});

module.exports = model('User', userSchema);
