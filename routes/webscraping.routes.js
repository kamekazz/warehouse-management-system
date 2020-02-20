/* eslint-disable radix */
/* eslint-disable no-undef */
/* eslint-disable node/no-unsupported-features/es-syntax */
const express = require('express');

const router = express.Router();
// web scraping tools

const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const getAllData = require('../helper/cleanItem');

function getUrl(item) {
  return `http://cranbury.worldandmain.com/shop/Catalog.aspx?kw=${item}`;
}

// eslint-disable-next-line consistent-return
async function scraperCraigsliest(item) {
  const itemTextData = {};
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(getUrl(item));
    await page.waitForXPath('//*[@id="divItems"]/div/div', {
      timeout: 10000
    });

    const html = await page.content();
    const $ = cheerio.load(html);
    browser.close();
    itemTextData.brand = $(
      '#divItems > div > div > p:nth-child(2) > strong'
    ).text();
    itemTextData.description = $(
      '#divItems > div > div > div.grdi > p > a > strong'
    ).text();
    itemTextData.fullStringData = $(
      '#divItems > div > div > p:nth-child(4)'
    ).text();
    browser.close();
    return itemTextData;
  } catch (err) {
    console.error(err);
    browser.close();
  }
}

// web scraping item
// post to  /webs/item
router.post('/', async (req, res) => {
  const { item } = req.body;
  try {
    const { brand, description, fullStringData } = await scraperCraigsliest(
      item
    );
    let itemData = {};
    itemData.brand = brand;
    itemData.description = description;
    itemData = { ...itemData, ...getAllData(fullStringData) };
    res.json({
      success: true,
      message: 'fond item',
      data: itemData
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      message: 'err'
    });
  }
});

module.exports = router;
// $('#divItems').children().children().text()
