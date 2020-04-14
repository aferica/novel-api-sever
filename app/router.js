'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const userRouter = require('./routers/user');
const novelRouter = require('./routers/novel');

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  userRouter(app);
  novelRouter(app);
};