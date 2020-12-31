'use strict';

/**
 * Source-map-support mimics node's stack trace making debugging easier.
 * ts-node register helps importing and compiling TypeScript modules into JS.
 * @see: https://www.extensive.one/converting-gatsby-config-and-node-api-to-typescript/
 */
require('source-map-support').install();
require('ts-node').register();

module.exports = require('./gatsby-config.ts');
