import http from "node:http";
import part from "node:path";

const __dirname = import.meta.dirname;

const port = 3000;

const servcer = http.createServer((req, res) => {
  const pathToresource = part.join(__dirname, "public", "index.html");
  const { method, url } = req;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>The server is working</h1></body></html>");
});

servcer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
