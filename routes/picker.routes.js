const express = require('express');
const router = express.Router();
const Ticket = require('../model/Ticket');

//SCEND TICK EN GET PRODUCT
router.post('/start_picker', async (req, res) => {
  const { ticketId, productId, productValue } = req.body;
  try {
    const ticket = await Ticket.findOne({ _id: ticketId }).populate({
      path: 'products',
      model: 'products'
    });
    if (!ticket) {
      res.json({
        success: false,
        message: 'Ticket not fond'
      });
    } else {
      if (ticket.status === 'plash') {
        ticket['status'] = 'start';
        // await ticket.save();
        res.json({
          success: true,
          message: 'Ticket',
          ticket
        });
      } else {
        res.json({
          success: false,
          message: 'errors status',
          ticket
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

//PICK PRODUCT AND UPDATE
router.post('/pick', async (req, res) => {
  const { id, itemIndex, palletsContIndex, palletsContValue } = req.body;
  try {
    let ticket = await Ticket.findOne({ _id: id });
    if (!ticket) {
      res.json({
        success: false,
        message: 'Ticket not fond'
      });
    } else {
      if (ticket.status === 'picking') {
        ticket.items[itemIndex]['palletsCont'][
          palletsContIndex
        ] = palletsContValue; // not savings
        ticket.items[itemIndex]['status'] = 'picking';
        if (isItemComplete(ticket.items[itemIndex]['palletsCont']))
          ticket.items[itemIndex]['status'] = 'c/p';
        if (isTicketComplete(ticket.items)) {
          ticket.status = 'completed';
          await ticket.save();
          res.json({
            success: true,
            message: 'tick completed',
            ticket
          });
        } else {
          await ticket.save();
          res.json({
            success: true,
            message: 'pick!!!!',
            ticket
          });
        }
      } else {
        res.json({
          success: false,
          message: 'errors status',
          ticket
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

//FINECH TICKT
router.post('/done', async (req, res) => {
  const { ticketId, orderId } = req.body;
  let new_items = [];
  try {
    let oldTicket = await Ticket.findOne({ _id: ticketId });
    let order = await Orders.findOne({ _id: orderId, status: 'plash' });
    for (let i = 0; i < oldTicket.items.length; i++) {
      const item = oldTicket.items[i];
      if (item.status !== 'completed') {
        let itemLafes = item.palletsCont.reduce(reducer);
        item.cont = itemLafes;
        new_items.push(item);
      }
      if (item.status !== 'completed') {
        let contFond = item.cont - item.palletsCont.reduce(reducer);
        item.cont = contFond;
        await oldTicket.save();
      }
    }
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      err: err
    });
  }
});

module.exports = router;

const isTicketComplete = items => {
  let resulte = false;
  let cont = items.length;
  items.forEach(element => {
    console.log('status', element.status);
    if (element.status === 'completed') {
      cont--;
      if (cont <= 0) {
        return (resulte = true);
      }
    }
  });
  return resulte;
};

const isItemComplete = contArray => {
  let resulte = false;
  let cont = contArray.length;
  contArray.forEach(element => {
    if (element === 0) {
      cont--;
      if (cont <= 0) {
        return (resulte = true);
      }
    }
  });
  return resulte;
};

const reducer = (accumulator, currentValue) => accumulator + currentValue;
