// helpers/files.js
/* --------------------------------- imports -------------------------------- */
const fsPromises = require('fs').promises;

/* ---------------------------- helper functions ---------------------------- */
const getDataFromFile = (pathToFile) => fsPromises

  .readFile(pathToFile, { encoding: 'utf8' })

  .then((data) => JSON.parse(data));

/* --------------------------------- exports -------------------------------- */
module.exports = getDataFromFile;
