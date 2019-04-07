var testPerCall = function()
{
  var di = require('../src/di.js');
  di.clear();
  di.register('dependency01', '../examples/exampleDependency.js', { mode: 'constructor' });
  di.register('exampleSerivce', '../examples/exampleService.js', { mode: 'constructor' });
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
}

var testSingleton = function()
{
  var di = require('../src/di.js');
  di.clear();
  di.register('dependency01', '../examples/exampleDependency.js', { mode: 'constructorSingle' });
  di.register('exampleSerivce', '../examples/exampleService.js', { mode: 'constructor' });
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
  var service = di.resolve('exampleSerivce');
  console.log(service.foo());
}

console.log('----instance per call----')
testPerCall();
console.log('----singleton----')
testSingleton();
