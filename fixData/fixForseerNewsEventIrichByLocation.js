const fs = require("fs");

// Read the JSON file
fs.readFile("ForeSeer.News.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data into an object
  const jsonData = JSON.parse(data);

  // Modify the JSON data (add or update properties)

  let eventDatarichByLocation = [];

  let richByLocationCountry = [];
  jsonData[0].richByLocation.forEach((item) => {
    richByLocationCountry.push(...Object.keys(item));
  });

  for (let i = 0; i < jsonData[0].richByLocation.length; i++) {
    let obj = jsonData[0].richByLocation[i][richByLocationCountry[i]];
    let arrKeys = Object.keys(obj);
    let arrvalues = Object.values(obj);
    arrvalues.map((item, index) => {
      item.name = arrKeys[index];
      item.country = richByLocationCountry[i];
    });
    eventDatarichByLocation.push(...arrvalues);
  }
  // Convert the modified data back to a JSON string
  eventDatarichByLocation = JSON.stringify(eventDatarichByLocation, null, 2); // The '2' parameter adds indentation for readability

  //   // Write the modified JSON data back to the file with a new line
  fs.writeFile(
    "../fixedData/richByLocation.json",
    eventDatarichByLocation + "\n",
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
