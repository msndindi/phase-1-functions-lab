// Code your solution in this file!
const changer = 264;

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  let diff = Math.abs(start - destination);
  return diff * changer;
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  let distanceFeet = distanceTravelledInFeet(start, destination);

  let free = distanceFeet - 400;
  if (distanceFeet > 400 && distanceFeet < 2000) {
    return free * 0.02;
  } else if (distanceFeet > 2000 && distanceFeet < 2500) {
    return 25;
  }

  if (distanceFeet > 2500) {
    return "cannot travel that far";
  }
  return 0;
}
