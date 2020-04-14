'use strict';
const Service = require('egg').Service;

class NovelService extends Service {
  async show(_id) {
    const novel = await this.ctx.service.novel.novel.find(_id);
    if (!novel) {
      this.ctx.throw(404, 'novel not found');
    }
    return this.app.mysql.get('novel', { id: _id });
  }

  async find(id) {
    return this.app.mysql.get('novel', { id: id });
  }

  async create(novel) {
    const result = await this.app.mysql.insert('novel', novel);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;
    if (!insertSuccess) {
      this.ctx.throw(404, '插入失败');
    }
    return this.ctx.service.novel.novel.find(insertId);
  }
}


module.exports = NovelService;