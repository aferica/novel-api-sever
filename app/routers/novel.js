'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;

  router.resources('novel', '/api/novel', controller.novel.novel);
};