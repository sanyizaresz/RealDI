var component =
{
  dependencies: ['dependency01'],
  component: function(dependencies)
  {
    console.log('exampleService created');
    this.foo = function()
    {
      console.log('foo called');
      dependencies.dependency01.executeDependencyMethod();
    }
    this.bar = function()
    {
      console.log('bar called');
    }
  }
}
module.exports = exports = component;
