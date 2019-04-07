//var debug = function(message) { console.log(message); };
var debug = function(message) {  };

var di = function(debug) {
  var that = this;
  var components = {};

  this.register = function(uid, path, options) {
    var component = require(path);
    components[uid] = {
      dependencies: component.dependencies,
      component: component,
      options: options === undefined ? {
        mode: "constructor"
      } : options
    }
    debug('registering ' + uid + ' with ' + component.dependencies);
  }

  this.registerAndWrap = function(uid, path, options) {
    components[uid] = {
      dependencies: [],
      component: {
        component: require(path)
      },
      options: options,
    };
    debug('registering and wrapping: ' + uid);
  }
  var singleInstances = {};

  this.resolve = function(uid, otherArgs) {
    if (components[uid] === undefined)
      throw 'component is not registered: ' + uid;
    var componentDescription = components[uid]
    var component = componentDescription.component;
    var dependencies = {};
    dependencies.resolverFunction = function(name) {
      return that.resolve(name);
    };
    dependencies.require = require;
    dependencies.debug = components;
    componentDescription.dependencies.forEach(d => {
      dependencies[d] = that.resolve(d, otherArgs);
    });
    var instance = null;
    if (componentDescription.options.mode == "constructor") {
      instance = new component.component(dependencies, otherArgs);
    } else
    if (componentDescription.options.mode == "constructorSingle") {
      if (singleInstances[uid] === undefined)
        singleInstances[uid] = new component.component(dependencies, otherArgs);
      instance = singleInstances[uid];
    } else if (componentDescription.options.mode == "instance") {
      instance = component.component;
    }
    return instance;
  }
  this.clear = function() {
    that.components = {};
  }
};

exports = module.exports = new di();
