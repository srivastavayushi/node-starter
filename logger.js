console.log(__filename);
console.log(__dirname);
const url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP Request
  console.log(message);
}

module.exports.log = log;
