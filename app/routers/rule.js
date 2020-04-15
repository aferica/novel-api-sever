'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;

  router.resources('rule', '/api/rule', controller.rule.rule);
};