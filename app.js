const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.js");

const app = express();

const { PORT = 3000 } = process.env;

//to get static file look in public folder
app.use(express.static(path.join(__dirname, "public"))); //gets stuff from public

//any other routes that don't match the public folder continue on
//to here and use the usersRouter
app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(` App listening at port ${PORT}`);
});
