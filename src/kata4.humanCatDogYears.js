const humanCatDogYears = function(humanYear) {
  let catYear, dogYear;

  if( humanYear <= 0) {
    return [0,0,0];
  }
  if(humanYear === 1){
    catYear = 15;
    dogYear = 15;
  }
  if(humanYear === 2){
    catYear = 15 + 9;
    dogYear = 15 + 9;
  }
  if (humanYear > 2) {
    catYear = (16) + 4 * humanYear;
    dogYear = (14) + 5 * humanYear;
  }
  
  return [humanYear, catYear, dogYear];
};

module.exports = humanCatDogYears; 
