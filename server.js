import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./utils/sendResponse.js";
import { serveStatic } from "./utils/serveStatic.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";

const __dirname = import.meta.dirname;

const port = 3000;
const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api") {
      if (req.method === "GET") {
        return await handleGet(res, __dirname);
      } else if (req.method === "POST") {
        return handlePost(req, res);
      }
    } else if (!req.url.startsWith("/api")) {
      const filePath = path.join(
        serveStatic(__dirname),
        req.url === "/" ? "index.html" : req.url
      );
      const data = await fs.readFile(filePath);
      const ext = path.extname(filePath);
      sendResponse(res, 200, data, ext);
    }
  } catch (error) {
    const filePath = path.join(serveStatic(__dirname), "404.html");
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath);
    sendResponse(res, 404, data, ext);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
