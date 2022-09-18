// routes/users.js
/* --------------------------------- imports -------------------------------- */
const router = require('express').Router();
const { getUsers, sendUserProfile, createUser } = require('../controllers/users');

/* --------------------------------- routes --------------------------------- */
router.get('/users', getUsers);

router.get('/users/:id', sendUserProfile);

router.post('/users', createUser)

/* --------------------------------- exports -------------------------------- */
module.exports = router;
