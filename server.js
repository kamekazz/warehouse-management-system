require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users.routes');
const locationRoutes = require('./routes/location.routes');
const itemRoutes = require('./routes/item.routes');
const palletRoutes = require('./routes/pallet.routes');
const receivingRoutes = require('./routes/receiving.routes');
const orderRoutes = require('./routes/order.routes');
const ticketRoutes = require('./routes/ticket.routes');
const pickerRoutes = require('./routes/picker.routes');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json({ extended: false }));

// Connect Database
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log(`mongodb connected`))
  .catch(err => console.log(err));

app.use('/api/auth', usersRoutes);
app.use('/api/location', locationRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/pallet', palletRoutes);
app.use('/api/receiving', receivingRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/ticket', ticketRoutes);
app.use('/api/picker', pickerRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
