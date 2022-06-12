// Code your solution here
/*
     returns all drivers that match the passed in name
     returns matching drivers if case does not match but letters do
     returns an empty array if there is no match
*/
const findMatching = (passedDrivers, passedNames) => {
  return passedDrivers.filter(function (match) {
    return match.toLowerCase() === passedNames.toLowerCase();
  });
};

/*
    returns a driver if beginning provided letters match
    does not return drivers if only middle or ending letters match
*/
const fuzzyMatch = (passedDrivers, passedNames) => {
  return passedDrivers.filter(function (match) {
    return match.substring(0, 2) === passedNames.substring(0, 2);
  });
};

// accesses the data structure to check if name matches
const matchName = (passedDrivers, passedNames) => {
  return passedDrivers.filter((match) => {
    const realName = match.name;
    return realName === passedNames;
  });
};
