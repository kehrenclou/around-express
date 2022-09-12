// routes/cards.js
/* --------------------------------- imports -------------------------------- */
const router = require("express").Router();
const getCards = require("../controllers/cards");

/* --------------------------------- routes --------------------------------- */
router.get("/", getCards);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
