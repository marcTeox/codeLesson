function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = new Image();
      img.src = url;
      img.alt = "Scenic Image";
      img.addEventListener("load", () => {
        resolve(img);
      });
      img.addEventListener("error", () => {
        reject(new Error("Image failed to load"));
      });
    }, 500);
  });
}

const images = [
  "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg",
  "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic2.jpg",
  "https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic3.jpg",
];

async function preloadImages(imageUrlsArr) {
  const imgContainer = document.getElementById("img-container");
  const upLoadContainer = document.getElementById("upload-container");

  try {
    const promises = imageUrlsArr.map(async (url) => getImagePromise(url));

    const results = await Promise.all(promises);
    results.forEach((img) => {
      imgContainer.appendChild(img);
    });
    upLoadContainer.style.display = "none";
    console.log("All images loaded successfully.");
  } catch (error) {
    console.log("Error:", error);
  }
}

document
  .getElementById("submit-imgs")
  .addEventListener("click", () => preloadImages(images));
