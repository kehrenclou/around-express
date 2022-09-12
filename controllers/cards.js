// controllers/cards.js
/* --------------------------------- imports -------------------------------- */
const path = require('path');
const getDataFromFile = require('../helpers/files');

/* --------------------------------- path --------------------------------- */
const dataPath = path.join(__dirname, '..', 'data', 'cards.json');

/* -------------------------------- functions ------------------------------- */
const getCards = (req, res) => getDataFromFile(dataPath)
  .then((cards) => res.status(200).send(cards))
  .catch(() => res.status(404).send({ message: 'Request resource not found' }));

/* --------------------------------- exports -------------------------------- */
module.exports = getCards;
