var configureIoc = require('./iocConfigurator.js')
var di = configureIoc();
var service = di.resolve('exampleSerivce');
service.foo();
var service = di.resolve('exampleSerivce');
service.foo();
