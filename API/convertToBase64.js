/*this function convert an image to base 64 to store it than in mongodb, 
this work should be handled in the client side with FileReader api available  
in web browsers(this function is just for load images manually using node in the backend )
*/
/*
for the browser
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

*/
const fs = require("fs");
function convertToBase64(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const base64Data = data.toString("base64");
      resolve(base64Data);
    });
  });
}

convertToBase64("./WhatsApp.jpg")
  .then((base64) => {
    console.log(base64);
  })
  .catch((error) => {
    console.error(error);
  });
