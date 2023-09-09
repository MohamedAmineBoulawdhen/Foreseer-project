const fs = require("fs");

// Read the JSON file
fs.readFile("ForeSeer.News.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data into an object
  const jsonData = JSON.parse(data);
  console.log(jsonData);
  // Modify the JSON data (add or update properties)
  let eventDataCoindar = jsonData[0].eventData.coindar;
  eventDataCoindar = Object.values(eventDataCoindar);

  // Convert the modified data back to a JSON string
  eventDataCoindar = JSON.stringify(eventDataCoindar, null, 2); // The '2' parameter adds indentation for readability

  //   // Write the modified JSON data back to the file with a new line
  fs.writeFile(
    "eventDataCoindar.json",
    eventDataCoindar + "\n",
    "utf8",
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been updated and a new line has been added.");
    }
  );
});
