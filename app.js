// function sayName(name) {
//  console.log("Hello" + name);
//}

// sayName("Ayushi");

//Global Objects
// console.log();
// setTimeout();
//clearTimeout();
// setInterval();
//clearInterval();
const logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

logger.log("Hey there you are cute");
const pathObj = path.parse(__filename);
console.log(pathObj);
const totalmem = os.totalmem();
const freemem = os.freemem();

console.log(totalmem);
console.log(freemem);

// Template String
// ES6/ ES2015 : ECMAScript 6

console.log(`Total Memory : ${totalmem}`);

const files = fs.readdirSync("./");
console.log(files);

const asyncFiles = fs.readdir();
