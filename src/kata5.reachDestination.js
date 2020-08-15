const reachDestination = (distance, speed) => {
let timeTaken = distance / speed;

let roundedInt = Math.round(timeTaken * 2)

let roundedTime = roundedInt / 2;

console.log("I should be there in " + roundedTime + " hours");

  return "I should be there in " + roundedTime + " hours";
};


module.exports = reachDestination;