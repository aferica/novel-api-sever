'use strict';
const Controller = require('egg').Controller;

class RuleController extends Controller {

  async show() {
    const {
      ctx,
      service
    } = this;
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.rule.rule.show(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ ctx, res });
  }

  // 创建用户
  async create() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.rule.rule.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }

  async index() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.query;
    // 调用 Service 进行业务处理
    const res = await service.rule.rule.index(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }
}

module.exports = RuleController;