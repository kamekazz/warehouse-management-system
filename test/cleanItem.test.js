const helper = require('../helper/cleanItem');

describe('cleanItem helper functions', () => {
  const sampleInput = 'Item #: 12345 Model : MD01 UPC: 54321';
  const noSpaces = 'Item#:12345Model:MD01UPC:54321';

  test('removeSpaces removes all whitespace', () => {
    expect(helper.removeSpaces(sampleInput)).toBe(noSpaces);
  });

  test('getLocation finds index of substring', () => {
    expect(helper.getLocation('Hello World', 'World')).toBe(6);
  });

  test('getItemNumber extracts item number', () => {
    const result = helper.getItemNumber(noSpaces);
    expect(result.itemNumber).toBe('12345');
    expect(result.endLocation).toBe(noSpaces.indexOf('Model'));
  });

  test('getModel extracts model id', () => {
    const modelString = 'Model:MD01UPC:54321';
    const result = helper.getModel(modelString);
    expect(result.modelId).toBe('MD01');
    expect(result.endModelLocation).toBe(modelString.indexOf('UPC'));
  });

  test('getUpc strips UPC prefix', () => {
    expect(helper.getUpc('UPC:54321')).toBe('54321');
  });

  test('cutString returns substring from position', () => {
    expect(helper.cutString(noSpaces, noSpaces.indexOf('Model'))).toBe('Model:MD01UPC:54321');
  });

  test('getImgUrl builds image url', () => {
    expect(helper.getImgUrl('12345')).toBe('http://cranbury.worldandmain.com/img/items/12345_1.jpg');
  });

  test('getAllData parses full data string', () => {
    const result = helper.getAllData(sampleInput);
    expect(result).toEqual({
      img: 'http://cranbury.worldandmain.com/img/items/12345_1.jpg',
      itemNumber: '12345',
      model: 'MD01',
      upc: '54321'
    });
  });
});
