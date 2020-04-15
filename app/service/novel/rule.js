'use strict';
const Service = require('egg').Service;

class RuleService extends Service {
  async show(_id) {
    const rule = await this.ctx.service.rule.rule.find(_id);
    if (!rule) {
      this.ctx.throw(404, 'rule not found');
    }
    return rule;
  }

  async find(id) {
    return this.ctx.model.Rule.findOne({ id: id });
  }

  async create(rule) {
    return await this.ctx.model.Rule.create(rule);
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
    res = await this.ctx.model.Rule.find(payload, { '__v': 0 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
    count = await this.ctx.model.Rule.countDocuments(payload).exec();
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


module.exports = RuleService;