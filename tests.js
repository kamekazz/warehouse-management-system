const id = '5d36019080b69a47bc25f761';
const arry = [
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761',
  '5d36019080b69a47bc25f761'
];

function helperUniqItemOne(arr, idParam) {
  let result = true;
  arr.forEach(function(item) {
    if (item === idParam) {
      result = false;
      console.log('good');
    }
  });
  console.log('arr', arr[0]);
  console.log('id', idParam);
  console.log('result', result);
  return result;
}

console.log(helperUniqItemOne(arry, id));
