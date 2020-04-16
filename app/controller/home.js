'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let title = "查看书源"; //向模板传入数据
    await this.ctx.render('index',{
      title: title
    });
  }

  
  async list() {
    let title = "查看书源";
    // 组装参数
    const payload = this.ctx.query;
    const res = await this.service.novel.rule.index(payload);
    await this.ctx.render('list',{
      title: title,
      list: res
    });
  }

  async form() {
    let title = "新增书源";
    await this.ctx.render('form',{
      title: title
    });
  }

  async doc() {
    let title = "API对接文档";
    await this.ctx.render('doc',{
      title: title
    });
  }
}

module.exports = HomeController;