const fs = require("fs");

// Read the JSON file
fs.readFile("ForeSeer.News.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Parse the JSON data into an object
  const jsonData = JSON.parse(data);
  // console.log(jsonData);
  // Modify the JSON data (add or update properties)
  let eventDataSportEvent = jsonData[0].eventData.sportEvent;
  eventDataSportEvent = Object.values(eventDataSportEvent);

  // Convert the modified data back to a JSON string
  eventDataSportEvent = JSON.stringify(eventDataSportEvent, null, 2); // The '2' parameter adds indentation for readability

  //   // Write the modified JSON data back to the file with a new line
  fs.writeFile(
    "../fixedData/eventDataSportEvent.json",
    eventDataSportEvent + "\n",
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
