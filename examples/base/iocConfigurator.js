exports = module.exports = function()
{
  var di = require('../../src/di.js');
  di.register('dependency01', '../examples/base/exampleDependency.js', { mode: 'constructor' });
  di.register('exampleSerivce', '../examples/base/exampleService.js', { mode: 'constructor' });
  return di;
}
