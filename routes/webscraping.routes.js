/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
// web scraping tools
const request = require('request-promise');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

function getUrl(item) {
  return `http://cranbury.worldandmain.com/shop/Catalog.aspx?kw=${item}`;
}

async function scraperCraigsliest(item) {
  try {
    const htmlResult = await request.get(getUrl(item));
    // const browser = await puppeteer.launch({ headless: false });
    const $ = await cheerio.load(htmlResult);
    const itemObjetData = $('#divItems')
      .children()
      .children();
    return itemObjetData;
  } catch (err) {
    console.error(err);
  }
}

// web scraping item
// post to  /webs/item
router.post('/', async (req, res) => {
  const { item } = req.body;
  try {
    const result = await scraperCraigsliest(item);
    res.json({
      success: true,
      message: 'good ruote',
      body: result
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: err
    });
  }
});

module.exports = router;
// $('#divItems').children().children().text()
