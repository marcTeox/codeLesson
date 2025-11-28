function uploadFile() {
  return new Promise((resolve, reject) => {
    console.log("Step1: Uploading file...");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function processFile() {
  return new Promise((resolve, reject) => {
    console.log("Step2: Processing file...");
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function notifyUser() {
  return new Promise((resolve, reject) => {
    console.log("Step3: Notifying user...");
    setTimeout(() => {
      resolve("User notified!");
    }, 1000);
  });
}

try {
  await uploadFile();
  await processFile();
  await notifyUser();
  console.log("All steps completed successfully.");
} catch (error) {
  console.log("Error:", error);
}
