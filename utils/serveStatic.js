import path from "node:path";

export function serveStatic(baseDir) {
  const publicDir = path.join(baseDir, "public");

  return publicDir;
}
