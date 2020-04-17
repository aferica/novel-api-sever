'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const UA = this.ctx.header['user-agent'];
    const isMobile = UA.match(/AppleWebKit.*Mobile.*/);
    let url = 'https://www.baidu.com/';
    if (isMobile) {
      url = 'https://eggjs.org/zh-cn/';
    }
    this.ctx.status = 302;
    this.ctx.redirect(url);
  }
}

module.exports = HomeController;