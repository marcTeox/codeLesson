import path from "node:path";

export function serveStatic(baseDir) {
  const staticDir = path.join(baseDir, "public", "index.html");
  return staticDir;
}
