'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg

  validate: {
    enable: true,
    package: 'egg-validate',
  },

  bcrypt: {
    enable: true,
    package: 'egg-bcrypt'
  },

  cors: {
    enable: true,
    package: 'egg-cors',
  },

  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  }
};