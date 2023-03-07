'use strict';

/**
 * action-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::action-game.action-game');
