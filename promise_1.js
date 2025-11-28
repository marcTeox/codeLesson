function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.alt = "A beautiful scenery";

    img.onload = () => {
      resolve(img);
    };

    img.onerror = () => {
      reject(new Error("Image failed to load"));
    };
  });
}

try {
  const results = await preLoadImg(
    "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg"
  );
  console.log(results);
  document.getElementById("img-container").appendChild(results);
} catch (error) {
  console.log("Error:", error);
}
