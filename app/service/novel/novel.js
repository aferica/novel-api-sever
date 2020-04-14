'use strict';
const Service = require('egg').Service;

class NovelService extends Service {
  async show(_id) {
    const novel = await this.ctx.service.novel.novel.find(_id);
    if (!novel) {
      this.ctx.throw(404, 'novel not found');
    }
    return novel;
  }

  async find(id) {
    return this.ctx.model.Novel.findOne({ id: id });
  }

  async create(novel) {
    return await this.ctx.model.Novel.create(novel);
  }

  async index(payload) {
    let limit = 20;
    let page = 1;
    if (payload.limit) {
      limit = parseInt(payload.limit);
      delete payload.limit;
    }
    if (payload.page) {
      page = parseInt(payload.page);
      delete payload.page;
    }
    let res = [];
    let count = 0;
    res = await this.ctx.model.Novel.find(payload, { '__v': 0 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    count = await this.ctx.model.Novel.countDocuments(payload).exec();
    // 整理数据源 -> Ant Design Pro
    let data = res.map((e,i) => {
      let jsonObject = Object.assign({}, e._doc);
      jsonObject.createdAt = this.ctx.helper.formatTime(e.createdAt);
      jsonObject.updatedAt = this.ctx.helper.formatTime(e.updatedAt);
      return jsonObject
    })

    return { count, list: data, limit, page };
  }
}


module.exports = NovelService;