import { getContentType } from "./getContentType.js";

export async function sendResponse(res, statusCode, data, ext) {
  const contentType = getContentType(ext);
  res.setHeader("Content-Type", contentType);
  res.statusCode = statusCode;
  res.end(data);
}
