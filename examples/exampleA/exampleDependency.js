var component =
{
  dependencies: [],
  component: function(dependencies)
  {
    console.log('exampleDependency component created');
    this.executeDependencyMethod = function()
    {
      console.log('dependency called');
    }
  }
}
module.exports = exports = component;
