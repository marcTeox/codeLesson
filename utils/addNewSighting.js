import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function addNewSighting(newSighting) {
  try {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    const filePath = path.join(__dirname, "..", "data", "data.json");
    data.push(newSighting);
    console.log(filePath);
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  } catch (err) {
    console.log(err);
  }
}
