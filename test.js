const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Function to download and save the image
async function downloadAndGetImageData(url) {
  const response = await axios({
    url,
    method: "GET",
    responseType: "arraybuffer", // Receive response as ArrayBuffer
  });

  const imageData = Buffer.from(response.data, "binary");
  return imageData;
}

// Usage example
const imageUrl =
  "https://instagram.fevn6-3.fna.fbcdn.net/v/t51.2885-19/368583229_253794650861238_408992694861712838_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fevn6-3.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f0ELfuLU8zsAX8pV6L-&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfBR9TgbZsWrT3F29rI7scBLA9eqo1xrUq4lphNSk9ZRYQ&oe=64F164E5&_nc_sid=1e20d2";
const imageFilename = "image.jpg"; // Name you want to save the image as
const savePath = path.join(__dirname, imageFilename); // Adjust the path as needed

downloadAndGetImageData(imageUrl)
  .then((data) => {
    console.log(data);
    const imageDataUrl = `data:image/jpeg;base64,${data.toString("base64")}`;
    console.log(imageDataUrl);
    // Now you can use the `savePath` in your Mongoose schema
  })
  .catch((error) => {
    console.error("Error downloading or saving image:", error);
  });
