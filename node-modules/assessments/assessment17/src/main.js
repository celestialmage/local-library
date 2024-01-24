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

function squareKmTotal(parks) {
  let result = parks.reduce(
    (total, parks) => (total += parks.areaInSquareKm),
    0
  );
  return result;
}

function parkNameAndState(parks) {
  let parkState = parks.reduce((acc, park) => {
    acc[park.name] = park.location.state;
    return acc;
  }, {});

  return parkState;
}

function parkByState(parks) {
  let result = parks.reduce((newObject, parks) => {
    let state = parks.location.state;

    if (!newObject[state]) {
      newObject[state] = [];
    }

    newObject[parks.location.state].push({
      name: parks.name,
      areaInSquareKm: parks.areaInSquareKm,
      location: { state: parks.location.state },
    });

    return newObject;
  }, {});

  return result;
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

console.log(parkByState(parks));

module.exports = { squareKmTotal, parkNameAndState, parkByState };
