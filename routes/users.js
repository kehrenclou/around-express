// routes/users.js
/* --------------------------------- imports -------------------------------- */
const router = require("express").Router();
const { getUsers, sendUserProfile } = require("../controllers/users");

/* --------------------------------- routes --------------------------------- */
router.get("/users", getUsers);

router.get("/users/:id", sendUserProfile);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
