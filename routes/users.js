const router = require("express").Router();
const { getUsers, getProfile } = require("../controllers/users");

router.get("/users", getUsers);

router.get("/users/:id", getProfile);

//need a controller - when route is hit use controller

module.exports = router;
