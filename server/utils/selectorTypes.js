const convertNumber = x => parseInt(x, 10);

const validateNumber = num => num > 0;

const numberType = {
  validation: validateNumber,
  convert: convertNumber,
};

module.exports = {
  convertNumber,
  validateNumber,
  numberType,
};
