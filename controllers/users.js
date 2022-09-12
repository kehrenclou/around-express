// controllers/users.js
/* --------------------------------- imports -------------------------------- */
// const noRestrictedPaths = require('eslint-plugin-import/lib/rules/no-restricted-paths');
const path = require('path');
const getDataFromFile = require('../helpers/files');

/* ---------------------------------- path ---------------------------------- */
const dataPath = path.join(__dirname, '..', 'data', 'users.json');

/* -------------------------------- functions ------------------------------- */
const getUsers = (req, res) => getDataFromFile(dataPath)
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(404).send(err));

const sendUserProfile = (req, res) => getDataFromFile(dataPath)
  .then((users) => users.find((user) => user._id === req.params.id))

  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'User ID not found' });
    }

    res.status(200).send(user);
  })
  .catch((err) => res.status(500).send(err));

/* --------------------------------- exports -------------------------------- */
module.exports = { getUsers, sendUserProfile };
