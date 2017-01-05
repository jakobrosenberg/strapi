'use strict';

/**
 * Module dependencies
 */

// Public node modules.
const _ = require('lodash');

/**
 * Expose main package JSON of the application
 * with basic info, dependencies, etc.
 */

module.exports = scope => {

  // Finally, return the JSON.
  return _.merge(scope.appPackageJSON || {}, {
    'name': 'strapi-' + scope.humanizeId,
    'private': true,
    'version': '0.1.0',
    'description': 'A Strapi plugin.',
    'devDependencies': {},
    'dependencies': {},
    'scripts': {},
    'author': {
      'name': scope.author || 'A Strapi developer',
      'email': scope.email || '',
      'url': scope.website || ''
    },
    'maintainers': [{
      'name': scope.author || 'A Strapi developer',
      'email': scope.email || '',
      'url': scope.website || ''
    }],
    'engines': {
      'node': '>= 7.0.0',
      'npm': '>= 3.0.0'
    },
    'license': scope.license || 'MIT'
  });
};
