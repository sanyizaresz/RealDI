var testPerCall = function()
{
  var di = require('../../src/di.js');
  di.register('dependency01', '../examples/base/exampleDependency.js', { mode: 'constructor' });
  di.register('exampleSerivce', '../examples/base/exampleService.js', { mode: 'constructor' });
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
}

var testSingleton = function()
{
  var di = require('../../src/di.js');
  di.register('dependency01', '../examples/base/exampleDependency.js', { mode: 'constructor' });
  di.register('exampleSerivce', '../examples/base/exampleService.js', { mode: 'constructorSingle' });
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
}
console.log('----instance per call----')
testPerCall();
console.log('----singleton----')
testSingleton();
