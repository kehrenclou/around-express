//better for asynch
const fsPromises = require("fs").promises;

const getDataFromFile = (pathToFile) => {
  return (
    fsPromises

      .readFile(pathToFile, { encoding: "utf8" })

      //data is data from file...this is going to be for json files

      .then((data) =>
        JSON.parse(data)
      )
      .catch((err) => {
        console.log("data error", err);
      })
  );

};
module.exports = getDataFromFile;
