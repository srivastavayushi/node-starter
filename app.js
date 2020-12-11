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
const Logger = require("./logger");
const logger = new Logger();
const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");
const http = require("http");

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

// fs.readdir("$", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });
//Register a Listener
logger.on("messageLogged", (arg) => {
  console.log("Listener Called", arg);
});

logger.log("Hey there you are cute");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Ayushi");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("New Connection ...");
// });
server.listen(3000);

console.log("Listening on Port 3000");
