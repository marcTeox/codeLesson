import path from "node:path";
import fs from "node:fs/promises";

export async function getData(__dirname) {
  try {
    const filePath = path.join(__dirname, "data", "data.json");
    const data = JSON.parse(await fs.readFile(filePath), "utf-8");
    return data;
  } catch (error) {
    console.error("Error reading data.json:", error);
    return [];
  }
}
