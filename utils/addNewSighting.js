import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

export async function addNewSighting(newSighting) {
  try {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();
    data.push(newSighting);
    fs.writeFile("data/data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  } catch (err) {
    console.log(err);
  }
}
