require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

const usersRoutes = require('./routes/users');
const locationRoutes = require('./routes/location');
const itemRoutes = require('./routes/item');
const palletRoutes = require('./routes/pallet');
const receivingRoutes = require('./routes/receiving');
const orderRoutes = require('./routes/order');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`mongodb connected`))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use('/api/users', usersRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/pallet', palletRoutes);
app.use('/api/receiving', receivingRoutes);
app.use('/api/order', orderRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
