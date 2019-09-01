const array = [
  { name: 'manny', balance: 4 },
  { name: 'sara', balance: 7 },
  { name: 'coco', balance: 44 },
  { name: 'kk', balance: 4 }
];

const mapNew = array.map(x => x.balance * 2);

console.log('mapNew', mapNew);
