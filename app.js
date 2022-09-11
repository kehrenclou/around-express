const { response } = require("express");
const express = require("express");
const { PORT = 3000 } = process.env;

const app = express();

app.get("/",(req,res)=>{
  res.send("Hello World");
})

app.listen(PORT, () => {
  console.log(` App listening at port ${PORT}`);
});
