// routes/cards.js
/* --------------------------------- imports -------------------------------- */
const router = require('express').Router();
const { getCards, createCard } = require('../controllers/cards');

/* --------------------------------- routes --------------------------------- */
router.get('/', getCards);
router.post('/', createCard);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
