// routes/users.js
/* --------------------------------- imports -------------------------------- */
const router = require('express').Router();
const { getUsers, sendUserProfile, createUser } = require('../controllers/users');

/* --------------------------------- routes --------------------------------- */
router.get('/', getUsers);

router.get('/:id', sendUserProfile);

router.post('/', createUser);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
