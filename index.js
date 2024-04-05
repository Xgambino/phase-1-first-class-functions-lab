// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4);
}



function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = selectingDrivers[0](drivers);

console.log(firstTwoDrivers);

const lastTwoDrivers = selectingDrivers[1](drivers);

console.log(lastTwoDrivers);


function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    };
}
  
  // Example usage:
  console.log(createFareMultiplier(4)(10)); // Output: 40 (10 * 4)
  
const fareDoubler = createFareMultiplier(2);

// Example usage:
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);

// Example usage:
console.log(fareTripler(10));

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));