const { model, Schema } = require("mongoose");

const chatSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = model("Chat", chatSchema);
