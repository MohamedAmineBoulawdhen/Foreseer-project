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

  let eventDataInfluencersData = [];
  eventDataInfluencersDataKeys = Object.keys(jsonData[0].influencersData);
  //////////////////////////////////////////////////////"businessinsider"
  for (
    let i = 1;
    i < Object.keys(jsonData[0].influencersData.businessinsider).length;
    i++
  ) {
    let obj = jsonData[0].influencersData.businessinsider[`${i}`];
    console.log(obj);
    obj["publisher"] = "businessinsider";
    eventDataInfluencersData.push(obj);
  }
  //////////////////////////////////////////////////////////"businessinsider"
  //////////////////////////////////////////////////////"NewYorkTimes"
  let newYorkTimesInfluencers = Object.keys(
    jsonData[0].influencersData.NewYorkTimes
  );

  for (
    let i = 0;
    i < Object.keys(jsonData[0].influencersData.NewYorkTimes).length;
    i++
  ) {
    let arr = Object.values(
      jsonData[0].influencersData.NewYorkTimes[newYorkTimesInfluencers[i]]
    );
    arr.map((item) => {
      item.influencer = newYorkTimesInfluencers[i];
      item.publisher = "NewYorkTimes";
    });
    eventDataInfluencersData.push(...arr);
  }
  //////////////////////////////////////////////////////////"NewYorkTimes"
  //////////////////////////////////////////////////////"newsbtc"
  let newsbtcInfluencers = Object.keys(jsonData[0].influencersData.newsbtc);

  for (
    let i = 0;
    i < Object.keys(jsonData[0].influencersData.newsbtc).length;
    i++
  ) {
    let arr = Object.values(
      jsonData[0].influencersData.newsbtc[newsbtcInfluencers[i]]
    );
    arr.map((item) => {
      item.influencer = newsbtcInfluencers[i];
      item.publisher = "newsbtc";
    });
    eventDataInfluencersData.push(...arr);
  }
  //////////////////////////////////////////////////////////"newsbtc"
  //////////////////////////////////////////////////////"super wealthy"
  let superWealthyCountry = Object.keys(
    jsonData[0].influencersData["super wealthy"]
  );

  for (
    let i = 0;
    i < Object.keys(jsonData[0].influencersData["super wealthy"]).length;
    i++
  ) {
    let arrOfInfluencers = Object.keys(
      jsonData[0].influencersData["super wealthy"][superWealthyCountry[i]]
    );
    let arr = Object.values(
      jsonData[0].influencersData["super wealthy"][superWealthyCountry[i]]
    );
    arr.map((item, index) => {
      item.country = superWealthyCountry[i];
      item.influencer = arrOfInfluencers[index];
      item.publisher = "super wealthy";
    });
    eventDataInfluencersData.push(...arr);
  }
  //////////////////////////////////////////////////////////"super wealthy"
  // Convert the modified data back to a JSON string
  eventDataInfluencersData = JSON.stringify(eventDataInfluencersData, null, 2); // The '2' parameter adds indentation for readability

  //   // Write the modified JSON data back to the file with a new line
  fs.writeFile(
    "../fixedData/influencersData.json",
    eventDataInfluencersData + "\n",
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
