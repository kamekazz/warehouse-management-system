export const cleanObj = obj => {
  let newObj = {};
  Object.keys(obj).forEach(prop => {
    if (obj[prop]) {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

export const hpGoToInput = id => {
  document.getElementById(id).focus();
};
