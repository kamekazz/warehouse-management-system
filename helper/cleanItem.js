function removeSpaces(fullString) {
  const noSpaces = `${fullString}`;
  return noSpaces.replace(/\s/g, '');
}
function getLocation(string, start) {
  const location = string.search(start);
  return location;
}
function getItemNumber(string) {
  const beginningLocation = getLocation(string, ':');
  const endLocation = getLocation(string, 'Model');
  const itemNumber = string.slice(beginningLocation + 1, endLocation);
  return { itemNumber, endLocation };
}

function getModel(string) {
  const beginningLocation = getLocation(string, ':');
  const endModelLocation = getLocation(string, 'UPC');
  const modelId = string.slice(beginningLocation + 1, endModelLocation);
  return { modelId, endModelLocation };
}

function getUpc(string) {
  return string.substr(4);
}

function getImgUrl(item) {
  return `http://cranbury.worldandmain.com/img/items/${item}_1.jpg`;
}

function cutString(string, endLocation) {
  return string.substr(endLocation);
}

function getAllData(fullData) {
  const item = {};
  const noSpaces = removeSpaces(fullData);
  const { itemNumber, endLocation } = getItemNumber(noSpaces);
  const removeItemNumber = cutString(noSpaces, endLocation);
  const { modelId, endModelLocation } = getModel(removeItemNumber);
  const removeModel = cutString(removeItemNumber, endModelLocation);
  const upc = getUpc(removeModel);
  item.img = getImgUrl(itemNumber);
  item.itemNumber = itemNumber;
  item.model = modelId;
  item.upc = upc;
  return item;
}

module.exports = getAllData;
