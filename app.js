/* --------------------------------- imports -------------------------------- */
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

/* -------------------------- declare app and port -------------------------- */
const app = express();

const { PORT = 3000 } = process.env;

/* -------------------------------- app -------------------------------- */
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  // console.log(` App listening at port ${PORT}`);
});
