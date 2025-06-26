const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let filePath = "./pages";
  if (req.url === "/") {
    filePath += "/index.html";
  } else if (req.url === "/about") {
    filePath += "/about.html";
  } else if (req.url === "/contact") {
    filePath += "/contact.html";
  } else {
    filePath += "/404.html";
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000/");
});
