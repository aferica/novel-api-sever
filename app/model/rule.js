'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const RuleSchema = new mongoose.Schema({
    name: { type: String, required: false },
    createdBy: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    url: { type: String, required: false },
    level: { type: Number, required: false, default: 1 },
    enable: { type: Boolean, required: false, default: true },
    userAgent: { type: String, required: false },
    bookUrl: { type: String, required: false },
    bookName: { type: String, required: false },
    bookAuthor: { type: String, required: false },
    introduce: { type: String, required: false },
    bookContent: { type: String, required: false },
    chapterList: { type: String, required: false },
    chapterName: { type: String, required: false },
    chapterUrl: { type: String, required: false },
    chapterUrlNext: { type: String, required: false },
    contentUrl: { type: String, required: false },
    contentUrlNext: { type: String, required: false },
    coverUrl: { type: String, required: false },
    searchAuthor: { type: String, required: false },
    searchCoverUrl: { type: String, required: false },
    searchKind: { type: String, required: false },
    searchLastChapter: { type: String, required: false },
    searchList: { type: String, required: false },
    searchName: { type: String, required: false },
    searchBookUrl: { type: String, required: false },
    searchUrl: { type: String, required: false },
  });
  return mongoose.model('Rule', RuleSchema);
};
