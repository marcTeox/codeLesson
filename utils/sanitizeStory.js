import sanitizeHtml from "sanitize-html";

function sanitizeInput(data) {
  return sanitizeHtml(data, {
    allowedTags: [],
    allowedAttributes: {},
  });
}
export function sanitizeData(data) {
  const sanitizeStory = {};

  for (const [key, value] of Object.entries(data)) {
    sanitizeStory[key] =
      typeof value === "string" ? sanitizeInput(value) : value;
  }

  return sanitizeStory;
}
