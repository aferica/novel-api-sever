'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: false },
    email: { type: String, required: false },
    level: { type: Number, required: true, default: 1 },
    realName: { type: String, required: false },
    birthDate: { type: Number, required: false },
    sex: { type: Boolean, default: false },
    avatar: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    openid: { type: String, required: false }
  });
  return mongoose.model('User', UserSchema);
};