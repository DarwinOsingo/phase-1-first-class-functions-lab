// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. Return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Array of the two driver selector functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Higher-order function to create fare multipliers
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  
  // 5. Fare doubler
  const fareDoubler = createFareMultiplier(2);
  
  // 6. Fare tripler
  const fareTripler = createFareMultiplier(3);
  
  // 7. Function to select drivers dynamically
  function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);
  }
  
  