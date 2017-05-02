require('babel-register')();
require('babel-polyfill');

var hook = require('css-modules-require-hook');
const jsdom = require('jsdom').jsdom;

const exposedProperties = [
  'window',
  'navigator',
  'document',
];

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

// Prevent mocha from interpreting CSS @import files
require.extensions['.css'] = () => { return null; };
require.extensions['.jpg'] = () => { return null; };

hook({
  generateScopedName: '[local]',
});
