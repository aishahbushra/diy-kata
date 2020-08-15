const joinNames = namesObj => {
  let first = namesObj[0];
  let second = namesObj[1];
  let third = namesObj[2];
  const arrayOfNames = []
  arrayOfNames.push(first.name, second.name, third.name);
  arrayOfNames.join(', ');

  const finalArray = arrayOfNames.slice(0, -1).join(', ')+' & '+arrayOfNames.slice(-1);

  return finalArray;

//    //arrayOfNames.reduce((previous, current, index, array) => {
//     if (i === array.length - 1) {
//       return previous + " & " + current;
//     } 
//     return previous + ", " + current;
//   })
//   return arrayOfNames; //
};

module.exports = joinNames;
