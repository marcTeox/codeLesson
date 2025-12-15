import { serveStatic } from "./serveStatic.js";
import fs from "node:fs/promises";

export async function sendResponse(res, statusCode, contentType, baseDir) {
  try {
    const filePath = serveStatic(baseDir);
    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", contentType);
    res.statusCode = statusCode;
    res.end(data);
  } catch (error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Internal Server Error");
  }
}
