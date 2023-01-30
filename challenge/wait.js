function wait(ms) {
  //

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, ms);
  });
  return promise;
}

wait(1000).then(() => console.log("done"));
wait(300).then(() => console.log("done after 300ms"));

wait()

module.exports = { wait };


