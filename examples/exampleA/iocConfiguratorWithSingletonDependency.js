require('./exampleDependency.js');
exports = module.exports = function()
{
  var di = require('../../src/di.js');
  di.register('dependency01', '../examples/exampleA/exampleDependency.js', { mode: 'constructor' });
  di.register('exampleSerivce', '../examples/exampleA/exampleService.js', { mode: 'constructorSingle' });
  return di;
}
