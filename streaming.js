const fs = require("fs");

const readStream = fs.createReadStream("./docs/test2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/test4.txt");
// readStream.on("data", (chunk) => {
//   console.log("----New Chunk----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK:\n");
//   writeStream.write(chunk);
// });
// readStream.on("end", () => {
//   console.log("Stream ended");
// });
// readStream.on("error", (err) => {
//   console.log("Error:", err);
// });

// writeStream.on("finish", () => {
//   console.log("Write stream finished");
// });

// writeStream.on("error", (err) => {
//   console.log("Write stream error:", err);
// });

// writeStream.on("open", () => {
//   console.log("Write stream opened");
// });
// writeStream.on("close", () => {
//   console.log("Write stream closed");
// });

readStream.pipe(writeStream);
