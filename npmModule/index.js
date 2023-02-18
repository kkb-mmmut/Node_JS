const chalk = require('chalk'); 
var validator = require('validator'); 
console.log(validator.isEmail('fo3333o@ba4r.c44om')?chalk.green.inverse('TRUE'):chalk.red.inverse('FALSE'));
console.log(chalk.red.inverse('Hello world!'));  