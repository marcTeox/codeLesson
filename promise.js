function preLoadImg(url) {
  return;
}

try {
  const results = await preLoadImg(
    "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs.jpg"
  );
  console.log(results);
  document.getElementById("img-container").appendChild(results);
} catch (error) {
  console.log("Error:", error);
}
