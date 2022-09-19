// controllers/users.js
/* --------------------------------- imports -------------------------------- */

const User = require("../models/user");

/* -------------------------------- functions ------------------------------- */
//get all users
const getUsers = (req, res) =>
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch(() =>
      res.status(500).send({ message: "An error has occurred on the server" })
    );

//get User
const sendUserProfile = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail(() => {
      const error = new Error("No user found by that Id");
      error.statusCode = 404;
      throw error;
    })
    .then((user) => {
      res.status(200).send({ data: user });
    })

    .catch((err) => {
      if (err.name === "CastError") {
        res.status(404).send({
          message: "User Id not found",
        });
      } else {
        res
          .status(500)
          .send({ message: "An error has occurred on the server" });
      }
    });
};

//createUser
const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.status(201).send({ data: user });
    })

    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        res.status(500).send({ message: "Server unable to create user" });
      }
    });
};

//updateUserProfile
const updateUserProfile = (req, res) => {
  const userId = req.user._id;
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    userId,
    { name, about },
    { runValidators: true, new: true }
  )
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err.name === "CastError") {
        res.status(400).send({
          message: `Bad Request ${err}`,
        });
      }
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        res
          .status(500)
          .send({ message: `Server unable to update user ${err}` });
      }
    });
};

/* --------------------------------- exports -------------------------------- */
module.exports = { getUsers, sendUserProfile, createUser, updateUserProfile };
