exports = module.exports = function()
{
  var di = require('../../src/di.js');
  di.register('dependency01', '../examples/singleton/exampleDependency.js', { mode: 'constructorSingle' });
  di.register('exampleSerivce', '../examples/singleton/exampleService.js', { mode: 'constructor' });
  return di;
}
