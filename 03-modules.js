// CommonJS, every file is module (by default)
// Modules -Encapsulated code (only share minimun)
const names = require('./04-first-module');
const sayHi = require('./05-utils');
const data =  require('./06-alternative-flavor');
require('./07-mind-granade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);