// routes/users.js
/* --------------------------------- imports -------------------------------- */
const router = require("express").Router();
const {
  getUsers,
  sendUserProfile,
  createUser,
  updateUserProfile,
} = require("../controllers/users");

/* --------------------------------- routes --------------------------------- */
router.get("/", getUsers);
router.get("/:userId", sendUserProfile);
router.post("/", createUser);
router.patch("/me", updateUserProfile);

/* --------------------------------- exports -------------------------------- */
module.exports = router;
