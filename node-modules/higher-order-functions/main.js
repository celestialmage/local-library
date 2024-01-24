const parks = [
  { name: "Biscayne", rating: 4.2 },
  { name: "Grand Canyon", rating: 5 },
  { name: "Gateway Arch", rating: 4.5 },
  { name: "Indiana Dunes", rating: 4.1 },
];

//example of the find() method, only returns the first item that meets the condition

let park = parks.find((park) => park.rating >= 4.5);

// console.log(park);

//example of the filter() method

let ratingFour = parks.filter((park) => park.rating >= 4.5);

// console.log(ratingFour);

//example of the map() method

let parkNames = parks.map((parks) => parks.name);

// console.log(parkNames);

//example of the some() method

let aboveFour = parks.some((parks) => parks.rating >= 5);

console.log(aboveFour);

//example of the every() method

let highRating = parks.every((parks) => parks.rating >= 4.5);

// console.log(highRating);

//example of the reduce() method

const areas = [768, 1004.2, 433.1];

let initialValue = 200;

let result = areas.reduce((total, area) => total + area, initialValue);

// console.log(result);

// ******************************************* //

let newList = parks.reduce((newList, parks) => {
  newList[parks.name] = parks.rating;
  return newList;
}, {});

// console.log(newList);
