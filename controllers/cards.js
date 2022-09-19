// controllers/cards.js
/* --------------------------------- imports -------------------------------- */

const Card = require("../models/card");

/* -------------------------------- functions ------------------------------- */
//get all Cards
const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send(cards))
    .catch(() =>
      res.status(500).send({ message: "An error has occurred on the server" })
    );
};

//create new Card
const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(201).send({ data: card });
    })

    .catch((err) => {
      if (err.name === "ValidationError") {
        res.status(400).send({
          message: `${Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")}`,
        });
      } else {
        res.status(500).send({ message: "Server unable to create card" });
      }
    });
};

//delete Card
const deleteCard = (req, res) => {
  const { cardId } = req.params;

  Card.findByIdAndRemove(cardId)
    .orFail(() => {
      const error = new Error("Card id does not exist");
      error.statusCode = 404;
      throw error;
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => {
      if (err.name === "CastError") {
        res.status(404).send({
          message: "Card Id not found",
        });
      } else {
        res
          .status(500)
          .send({ message: "An error has occurred on the server" });
      }
    });
};

/* --------------------------------- exports -------------------------------- */
module.exports = { getCards, createCard, deleteCard };
