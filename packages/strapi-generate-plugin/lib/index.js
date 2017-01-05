'use strict';

/**
 * Module dependencies
 */

// Node.js core.
const fs = require('fs');
const path = require('path');

// Local dependencies.
const routesJSON = require('../json/routes.json.js');
const packageJSON = require('../json/package.json.js');

/**
 * Generate a plugin
 */

module.exports = {
  templatesDirectory: scope => {
    try {
      // Try to reach the path. If it fail, throw an error.
      fs.accessSync(path.resolve(__dirname, '..', 'templates', scope.template), fs.constants.R_OK | fs.constants.W_OK);

      return path.resolve(__dirname, '..', 'templates', scope.template);
    } catch (e) {
      // Default template is Mongoose
      return path.resolve(__dirname, '..', 'templates', 'mongoose');
    }
  },
  before: require('./before'),
  targets: {

    // Use the default `controller` file as a template for
    // every generated controller.
    'plugins/:humanizeId/controllers/:filename': {
      template: 'controller.template'
    },

    // every generated controller.
    'plugins/:humanizeId/services/:filename': {
      template: 'service.template'
    },

    // Copy an empty JavaScript model where every functions will be.
    'plugins/:humanizeId/models/:filename': {
      template: 'model.template'
    },

    // Copy the generated JSON model for the connection,
    // schema and attributes.
    'plugins/:humanizeId/models/:filenameSettings': {
      template: 'model.settings.template'
    },

    // Generate routes.
    'plugins/:humanizeId/config/routes.json': {
      jsonfile: routesJSON
    },

    // Generate package.
    'plugins/:humanizeId/package.json': {
      jsonfile: packageJSON
    }
  }
};
