//the purpose of this function is to take in an array of book objects and return the number of books in the array
function getTotalBooksCount(books) {
  return books.length;
}

//the purpose of this function is to take in an array of accounts and return the number of accounts inside the array
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

//the purpose of this function is to be passed an array of books and return a number that represents the number of books
//currently checked out of the library
function getBooksBorrowedCount(books) {
  const borrowed = books.filter((books) =>
    books.borrows.find((borrows) => borrows.returned === false)
  );

  return borrowed.length;
}

//the purpose of this function is to be passed an array of book objects and returns an array containing five or fewer objects that represent
//the most common genres, ordered from most common to least common.
//each object in the array has two keys: the `name` key which names the genre, and the `count` key which represents the number of times
//the genre occurs
function getMostCommonGenres(books) {
  const genreArray = [];
  const genreTally = [];
  const genreRanking = [];

  books.map((books) => {
    if (!genreArray.some((genres) => genres === books.genre)) {
      genreArray.push(books.genre);
    }
  });

  for (let genre in genreArray) {
    genreRanking.push({
      name: genreArray[genre],
      count: books.filter((books) => books.genre === genreArray[genre]).length,
    });
  }

  genreRanking.sort((aResult, bResult) =>
    aResult.count < bResult.count ? 1 : -1
  );

  const result = [...genreRanking.slice(0, 5)];

  return result;
}

//the purpose of this function is to be passed an array of book objects and then rank those books based on the amount of times
//those books have been checked out. only rank to the highest 5
function getMostPopularBooks(books) {
  let bookArray = [];

  bookArray = books.reduce(
    (array, book) =>
      bookArray.concat([
        ...array,
        { name: book.title, count: book.borrows.length },
      ]),
    []
  );

  bookArray.sort((aResult, bResult) =>
    aResult.count < bResult.count ? 1 : -1
  );

  const result = [...bookArray.slice(0, 5)];

  return result;
}

//the purpose of this function is getting passed an array of book objects and an array of author objects, and returns an array containing
//five or less authors in order of book popularity.
function getMostPopularAuthors(books, authors) {
  let bookArray = [];
  let result = [];

  bookArray = books.reduce((array, book) => {
    const author = authors.find((author) => author.id === book.authorId);

    if (author) {
      const authorName = Object.values(author.name);

      return array.concat({
        name: authorName.join(" "),
        count: book.borrows.length,
      });
    }

    return array;
  }, []);

  //you need to find a way to combine the counts of authors with the exact same name

  //if you can find the current index's name somewhere else in the array, combine the counts and save that item's index to be skipped
  //and then concat that item to the array

  //iterates throughout the bookArray
  for (let i = 0; i < bookArray.length; i++) {
    //sets the current author's name to currentName
    const currentName = bookArray[i].name;

    //sets variable to tell if a matching name was found
    let found = false;

    //iterates throughout the result array
    for (let j = 0; j < result.length; j++) {
      const resultName = result[j].name;

      //if the current result name is equal to the currentName, add the two counts together
      if (currentName === resultName) {
        result[j].count += bookArray[i].count;
        found = true;
      }
    }

    if (!found) {
      result = result.concat(bookArray[i]);
    }
  }

  result.sort((aResult, bResult) => (aResult.count < bResult.count ? 1 : -1));

  result = [...result.slice(0, 5)];

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
