// controllers/users.js
/* --------------------------------- imports -------------------------------- */
const path = require('path');
const getDataFromFile = require('../helpers/files');

/* ---------------------------------- path ---------------------------------- */
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

/* -------------------------------- functions ------------------------------- */
const getUsers = (req, res) => getDataFromFile(dataPath)
  .then((users) => res.status(200).send(users))
  .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));

const sendUserProfile = (req, res) => getDataFromFile(dataPath)
  .then((users) => users.find((user) => user._id === req.params.id))

  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
    }

    res.status(200).send(user);
  })
  .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));

/* --------------------------------- exports -------------------------------- */
module.exports = { getUsers, sendUserProfile };
