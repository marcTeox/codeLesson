import http, { get } from "node:http";
import { getDataFromDB } from "./database/db.js";
import { sendJSONResponse as response } from "./utils/sendJSONResponse.js";
import { requestHandler as handleRequest } from "./utils/reqHandller.js";
import { getDataByQueryParams } from "./utils/getDataByQueryParams.js";

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const destination = await getDataFromDB();
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = Object.fromEntries(urlObj.searchParams.entries());
    if (urlObj.pathname === "/api" && req.method === "GET") {
      const data = getDataByQueryParams(destination, queryParams);
      response(res, 200, data);
    } else {
      response(res, 404, { message: "Not Found" });
    }
  } catch (error) {
    response(res, 404, { message: "Not Found" });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
