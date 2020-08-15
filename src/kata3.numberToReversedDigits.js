const numberToReversedDigits = number => {
  const numToString = number.toString();
  let newArray = numToString.split('').reverse;
  let finalResults = [];
  newArray.forEach(element => finalResults.push(Number(element)))

  return finalResults;
};

module.exports = numberToReversedDigits;
