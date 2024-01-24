/*
  Complete the functions below as detailed in the instructions.

  When one of the function parameters refers to a `park`, assume it is an object of the following shape:
  {
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: {
      state: "Maine"
    }
  }
*/

function findParkByName(parks, name) {
  const result = parks.find((parks) => parks.name === name);
  if (result) {
    return result;
  } else {
    return null;
  }
}

function allParksAboveCertainSize(parks, minSize) {
  return parks.every((parks) => parks.areaInSquareKm > minSize);
}

function getBigParkNames(parks, minSize) {
  let result = parks.filter((parks) => parks.areaInSquareKm >= minSize);

  return result.map((result) => result.name);
}

function doesStateHaveOneBigPark(parks, minSize, state) {
  let result = parks.filter((parks) => parks.location.state === state);

  return result.some((result) => result.areaInSquareKm >= minSize);
}

const parks = [
  {
    name: "Canyonlands",
    areaInSquareKm: 1366.2,
    location: { state: "Utah" },
  },
  {
    name: "Crater Lake",
    areaInSquareKm: 741.5,
    location: { state: "Oregon" },
  },
  {
    name: "Zion",
    areaInSquareKm: 595.9,
    location: { state: "Utah" },
  },
];

doesStateHaveOneBigPark(parks, 800, "Utah");

module.exports = {
  findParkByName,
  allParksAboveCertainSize,
  getBigParkNames,
  doesStateHaveOneBigPark,
};
