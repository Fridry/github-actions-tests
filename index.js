const checkNumbers = (valueOne, valueTwo) => {
  if (isNaN(+valueOne) || isNaN(+valueTwo)) return "Invalid values";
};

const addition = (valueOne, valueTwo) => {
  const areValuesInvalid = checkNumbers(valueOne, valueTwo);

  if (areValuesInvalid) return areValuesInvalid;

  return +valueOne + +valueTwo;
};

const subtraction = (valueOne, valueTwo) => {
  const areValuesInvalid = checkNumbers(valueOne, valueTwo);

  if (areValuesInvalid) return areValuesInvalid;

  return +valueOne - +valueTwo;
};

const multiplication = (valueOne, valueTwo) => {
  const areValuesInvalid = checkNumbers(valueOne, valueTwo);

  if (areValuesInvalid) return areValuesInvalid;

  return +valueOne * +valueTwo;
};

const division = (valueOne, valueTwo) => {
  const areValuesInvalid = checkNumbers(valueOne, valueTwo);

  if (areValuesInvalid) return areValuesInvalid;

  return +valueOne / +valueTwo;
};

const rest = (valueOne, valueTwo) => {
  const areValuesInvalid = checkNumbers(valueOne, valueTwo);

  if (areValuesInvalid) return areValuesInvalid;

  return +valueOne % +valueTwo;
};

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  rest,
  checkNumbers,
};
