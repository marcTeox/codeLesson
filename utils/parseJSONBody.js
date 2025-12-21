export async function parseJSONBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsedBody = Object.fromEntries(new URLSearchParams(body));
        const newSighting = { id: crypto.randomUUID(), ...parsedBody };
        resolve(newSighting);
      } catch (err) {
        reject(new Error(`Invalid bopdy Format: ${err}`));
      }
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
}
