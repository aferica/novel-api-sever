'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const NovelSchema = new mongoose.Schema({
    name: { type: String, required: false },
    author: { type: String, required: false },
    shortInfo: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  return mongoose.model('Novel', NovelSchema);
};
