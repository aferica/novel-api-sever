'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const novelRouter = require('./routers/novel');
const ruleRouter = require('./routers/rule');

module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.list);
  router.get('/form', controller.home.form);
  router.get('/doc', controller.home.doc);

  novelRouter(app);
  ruleRouter(app);
};