const fs = require("node:fs");

// function defined
function readFilePromise(filePath) {
  // returns promise that:
  // returns contents of a file using fs.readFile method from built in fs node module
  // if successful, file contents passed to resolve function indicating fulfillment
  //if there's an error, error passed to reject func indicating rejection
  // returned promise can be used to perform async fil;e reading in a way that can be easily composed with other async operation
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, contents) => {
      if (error) {
        reject(error);
      } else {
        resolve(contents);
      }
    });
  });
}

module.exports = { readFilePromise };
