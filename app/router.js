'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const novelRouter = require('./routers/novel');

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  novelRouter(app);
};