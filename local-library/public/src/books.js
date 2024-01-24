//the purpose of this function is to take in an array of authors and the id of a single author. it will then return the author that has the matching id
function findAuthorById(authors, id) {
  const result = authors.find((authors) => authors.id === id);

  return result;
}

//the purpose of this function isto take in an array of book objects and a string containing the ID of a single book. the function should then
//return that book object
function findBookById(books, id) {
  const result = books.find((books) => books.id === id);

  return result;
}

//the purpose of the function is to take in an array of book objects. the function should return two arrays, one with all of the books that are
//currently checked out, and one with books that have been returned.
function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((books) =>
    books.borrows.every((borrows) => borrows.returned === true)
  );

  const borrowed = books.filter((books) =>
    books.borrows.some((borrows) => !(borrows.returned === true))
  );

  const booksSorted = [borrowed, returned];

  return booksSorted;
}

//the purpose of this function is to take in a book object and an array of all account objects. it should then return an array of all accounts that
//borrowed that book's id, with the returned status aphended onto the account object
function getBorrowersForBook(book, accounts) {
  const hasReturned = (user, book) => {
    const borrow = book.borrows.find((borrow) => borrow.id === user.id);
    return borrow ? borrow.returned : false;
  };

  const borrowIds = book.borrows.map((borrow) => borrow.id);
  const borrowUsers = accounts.filter((account) =>
    borrowIds.includes(account.id)
  );

  const result = borrowUsers.map((user) => ({
    ...user,
    returned: hasReturned(user, book),
  }));

  finalResult = result.map((user, index) => {
    if (index < 10) {
      return user;
    }
  });

  return finalResult;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
