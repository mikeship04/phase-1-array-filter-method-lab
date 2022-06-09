// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//this function should match drivers case sensitive
function findMatching(anArray, aString) {
    return anArray.filter(
        (driverName) => driverName.toLowerCase() === aString.toLowerCase()
    );
}


//this function should return drivers names who begin with provided letters
function fuzzyMatch(anArray, someStrings){
    return anArray.filter(
        (driverName) =>
        driverName.toLowerCase().indexOf(someStrings.toLowerCase()) === 0
    );
}

// each driver object has 2 properties name and hometown
//return each element whose name matches
function matchName(anArrayOfObjects, aString) {
    return anArrayOfObjects.filter((get) => get.name === aString);
}
