const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in a second
  },
});
delete mongoose.models.BlacklistToken;

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);
