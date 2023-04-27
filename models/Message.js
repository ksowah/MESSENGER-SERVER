const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
  chatId: {
    type: Schema.Types.ObjectId,
    ref: "Chat",
  },
  body: String,
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Message", messageSchema);
