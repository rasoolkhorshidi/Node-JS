const stopInt = setInterval(() => {
  console.log("Hello, World!");
}, 1000);

setTimeout(() => {
  console.log("Stopping the interval...");
  clearInterval(stopInt);
}, 5000);
