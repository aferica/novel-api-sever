'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.post('/user/login', controller.user.user.login);

  router.post('/user/register', controller.user.user.create);

  router.get('/api/login/check', controller.user.user.check);

  router.resources('user', '/api/user', controller.user.user);
};