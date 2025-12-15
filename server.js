import http from "node:http";
import { sendResponse } from "./utils/sendResponse.js";

const __dirname = import.meta.dirname;

const port = 3000;

const servcer = http.createServer((req, res) => {
  sendResponse(res, 200, "text/html", __dirname);
});

servcer.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
