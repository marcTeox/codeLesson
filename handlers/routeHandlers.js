import { getData } from "../utils/getData.js";
import { sendResponse } from "../utils/sendResponse.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { serveStatic } from "../utils/serveStatic.js";
import path from "node:path";

export const handleGet = async (res, __dirname) => {
  const parseData = await getData(__dirname);
  const data = JSON.stringify(parseData);
  sendResponse(res, 200, data, ".json");
};

export const handlePost = async (req, res) => {
  try {
    const parsebody = await parseJSONBody(req);
    await addNewSighting(parsebody);

    sendResponse(res, 201, JSON.stringify(parsebody), ".json");
  } catch (err) {
    sendResponse(res, 400, JSON.stringify({ error: err }));
  }
};
