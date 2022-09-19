// routes/cards.js
/* --------------------------------- imports -------------------------------- */
const router = require('express').Router();
const { getCards, createCard, deleteCard } = require('../controllers/cards');

/* --------------------------------- routes --------------------------------- */
router.get('/', getCards);
router.post('/', createCard);
router.delete('/:cardId', deleteCard);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
