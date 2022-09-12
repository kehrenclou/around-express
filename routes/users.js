/* --------------------------------- imports -------------------------------- */
const router = require("express").Router();
const { getUsers, getProfile } = require("../controllers/users");

/* --------------------------------- routes --------------------------------- */
router.get("/users", getUsers);

router.get("/users/:id", getProfile);


/* --------------------------------- exports -------------------------------- */
module.exports = router;
