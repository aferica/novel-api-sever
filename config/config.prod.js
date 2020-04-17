'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  config.jwt = {
    secret: 'AFERICATOKEN',
    enable: true,
    match: '/api'
  };
  
  return config;
}