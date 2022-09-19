// controllers/cards.js
/* --------------------------------- imports -------------------------------- */
const path = require("path");
const Card = require("../models/card");
const getDataFromFile = require("../helpers/files");

/* --------------------------------- path --------------------------------- */
const dataPath = path.join(__dirname, "..", "data", "cards.json");

/* -------------------------------- functions ------------------------------- */
const getCards = (req, res) => console.log("getcards");
// getDataFromFile(dataPath)
//   .then((cards) => res.status(200).send(cards))
//   .catch(() =>
//     res.status(500).send({ message: "An error has occurred on the server" })
//   );

const createCard = (req, res) => {

  const { name, link } = req.body;

  Card.create({ name, link, owner:req.user._id })
    .then((card) => {
      res.status(200).send({ data: card });
    })

    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        res
          .status(500)
          .send({ message: "An error has occurred on the server" });
      }
    });
};

/* --------------------------------- exports -------------------------------- */
module.exports = { getCards, createCard };
