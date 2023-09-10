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
  let eventDataUToday = jsonData[0].eventData.UToday;
  eventDataUToday = Object.values(eventDataUToday);
  eventDataUTodayKeys = Object.keys(jsonData[0].eventData.UToday);
  const arr = [];
  eventDataUToday.map((element) => {
    arr.push(Object.values(element));
  });
  eventDataUToday = [];
  arr.map((element, index) => {
    element.map((obj) => {
      obj.eventType = eventDataUTodayKeys[index];
    });
    eventDataUToday.push(...element);
  });
  // Convert the modified data back to a JSON string
  eventDataUToday = JSON.stringify(eventDataUToday, null, 2); // The '2' parameter adds indentation for readability

  //   // Write the modified JSON data back to the file with a new line
  fs.writeFile(
    "../fixedData/eventDataUToday.json",
    eventDataUToday + "\n",
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
