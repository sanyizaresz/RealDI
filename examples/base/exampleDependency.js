var instanceCount = 0;
var component =
{
  dependencies: [],
  component: function(dependencies)
  {
    instanceCount++;
    console.log('exampleDependency component created');
    this.executeDependencyMethod = function()
    {
      console.log('dependency called');
      return instanceCount;
    }
  }
}
module.exports = exports = component;
