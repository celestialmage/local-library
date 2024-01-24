/*
  Complete the functions below as described in the instructions.

  The `parks` parameter refers to an array of objects with the following shape:
  {
    id: 1,
    name: "Acadia",
    areaInSquareKm: 198.6,
    location: { state: "Maine" },
  }

  The `users` parameter refers to an object with the following shape:
  {
    "karah.branch3": {
      visited: [1],
      wishlist: [4, 6],
    }
  }
*/

/*
  This function takes in an array of parks and a specific state and returns all the parks that are in that state.

  [
    {
      id: 2,
      name: "Canyonlands",
      areaInSquareKm: 1366.2,
      location: { state: "Utah" },
    }
  ]
*/

function getParksByState(parks, state) {
  return parks.filter((parks) => parks.location.state === state);
}

/*
  This function takes in an array of parks, all users, and a username. It then returns an array of park objects related 
  to the wishlist of the user with that username. Each number in the wishlist refers to the id of one of the parks.

  [
    {
      id: 1,
      name: "Acadia",
      areaInSquareKm: 198.6,
      location: { state: "Maine" },
    }
  ]
*/
function getWishlistParksForUser(parks, users, username) {
  //assign the specific user passed into a variable to store that user's object
  const wishlist = users[username].wishlist;

  return parks.filter((parks) => wishlist.includes(parks.id));
}

//function returns a boolean that represents whether or not a user has visited all parks in the parks array from a given state.
function userHasVisitedAllParksInState(parks, users, state, username) {
  //if a given park is in the passed state
  const stateParks = parks.filter((parks) => parks.location.state === state);

  //maps the ids of the state parks to an array
  const parkIds = stateParks.map((parks) => parks.id);

  //assigns the array of the parks the passed user has visited to a variable
  const userVisited = users[username].visited;

  //returns an array of parks the user has visited
  let result = parkIds.every((parkIds) => userVisited.includes(parkIds), []);

  return result;
}

//This function takes in the list of users and two usernames. If the first user has visited any
//of the parks represented by the second user's wish list, return true. Otherwise, return false.
function userHasVisitedParkOnWishlist(users, userOne, userTwo) {
  const visited = users[userOne].visited;

  const wishlist = users[userTwo].wishlist;

  const result = visited.some((visited) => wishlist.includes(visited));

  return result;
}

//This function returns all the usernames who have visited any park on the given user's wish list.
function getUsersForUserWishlist(users, targetUser) {
  const wishlist = users[targetUser].wishlist;

  const visitedParks = Object.keys(users).filter((people) => {
    const currentUser = users[people];
    console.log(currentUser);
    return wishlist.some((park) => currentUser.visited.includes(park));
  });

  return visitedParks;
}

module.exports = {
  getParksByState,
  getWishlistParksForUser,
  getUsersForUserWishlist,
  userHasVisitedAllParksInState,
  userHasVisitedParkOnWishlist,
};
