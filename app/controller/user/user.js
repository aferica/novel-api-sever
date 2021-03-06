const Controller = require('egg').Controller

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserCreateTransfer = {
      mobile: {type: 'string', required: true, allowEmpty: true, format: /^[0-9]{11}$/},
      password: {type: 'password', required: true, allowEmpty: false, min: 6},
      username: {type: 'string', required: true, allowEmpty: false}
    };

    this.UserUpdateTransfer = {
      mobile: { type: 'string', required: true, allowEmpty: false },
      realName: {type: 'string', required: true, allowEmpty: false}
    };

    this.UserLoginTransfer = {
      username: { type: 'string', required: true, allowEmpty: false },
      password: { type: 'string', required: true, allowEmpty: false },
    };
  }

  // 创建用户
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(this.UserCreateTransfer);
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.user.create(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }

  // 删除单个用户
  async destroy() {
    const { ctx, service } = this;
    // 校验参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    await service.user.user.destroy(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx});
  }

  // 修改用户
  async update() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(this.UserUpdateTransfer);
    // 组装参数
    const { id } = ctx.params;
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    await service.user.user.update(id, payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx});
  }
 
  // 获取单个用户
  async show() {
    const { ctx, service } = this;
    // 组装参数
    const { id } = ctx.params;
    // 调用 Service 进行业务处理
    const res = await service.user.user.show(id);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }

  // 获取所有用户(分页/模糊)
  async index() {
    const { ctx, service } = this;
    // 组装参数
    const payload = ctx.query;
    // 调用 Service 进行业务处理
    const res = await service.user.user.index(payload);
    // 设置响应内容和响应状态码
    ctx.helper.success({ctx, res});
  }

  async check() {
    const { ctx } = this;
    ctx.helper.successOtherWithoutData({ ctx, code: 0, msg: '用户已登录' });
  }

  // 用户登入
  async login() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(this.UserLoginTransfer);
    // 组装参数
    const payload = ctx.request.body || {};
    // 调用 Service 进行业务处理
    const res = await service.user.userAccess.login(payload);
    // 设置响应内容和响应状态码
    if (res === 101 || res === 102) {
      ctx.helper.successOtherWithoutData({ ctx, code: res, msg: '用户名或密码错误' });
    } else {
      ctx.helper.success({ ctx, res });
    }
  }
}


module.exports = UserController