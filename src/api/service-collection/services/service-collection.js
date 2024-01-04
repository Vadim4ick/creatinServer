'use strict';

/**
 * service-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-collection.service-collection');
