'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const novelRouter = require('./routers/novel');
const ruleRouter = require('./routers/rule');
const userRouter = require('./routers/user');

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  novelRouter(app);
  ruleRouter(app);
  userRouter(app);
};