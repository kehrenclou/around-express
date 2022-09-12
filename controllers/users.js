// const noRestrictedPaths = require("eslint-plugin-import/lib/rules/no-restricted-paths");
const path = require("path");
const getDataFromFile = require("../helpers/files");

//get path to data file -'..' is going up a leel to the data file
//you can pass with each property or use slashes
const dataPath = path.join(__dirname, "..", "data", "users.json");

//gets all users - req, res from the route
//getDataFrom File is promise that is returned
//it gets user data back .then((users))
//then sends back user data if res. status(200) which means it is ok
//then catch err if at 400  - use better error handling
const getUsers = (req, res) =>
  getDataFromFile(dataPath)
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(404).send(err));

const sendUserProfile = (req, res) =>
  getDataFromFile(dataPath)
    .then((users) => users.find((user) => user._id === req.params.id))

    .then((user) => {
      if (!user) {
        return;
        res.status(404).send({ message: "User ID not found" });
      }
      return;
      res.status(200).send(user);
    })
    .catch((err) => res.status(500).send(err));

module.exports = { getUsers, sendUserProfile };
