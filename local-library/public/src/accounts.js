//the purpose of this function is to take the id argument and use it to search through the accounts array and return the account object that matches that id.
function findAccountById(accounts, id) {
  const result = accounts.find((accounts) => accounts.id === id);

  return result;
}

//the purpose of this function is to take in the accounts array and filter them so that they are organized by the account owner's last name
function sortAccountsByLastName(accounts) {
  const result = accounts.sort((aResult, bResult) =>
    aResult.name.last.toLowerCase() > bResult.name.last.toLowerCase() ? 1 : -1
  );

  return result;
}

//the purpose of this function is to take in the account object, and use that object's id to iterate throughout
//the entire books array and return how many times that account has borrowed a book
function getTotalNumberOfBorrows(account, books) {
  const userId = account.id;

  const result = books.filter((books) =>
    books.borrows.some((borrows) => borrows.id === userId)
  );

  let length = result.length;

  return length;
}

//the purpose of this function is to return an array of book objects, that represents all the books currently checked out by the given
//account.
function getBooksPossessedByAccount(account, books, authors) {
  const userId = account.id;

  //assigns variable an array filtered to books in the given array that have a borrow id matching the user
  const borrowed = books.filter((books) =>
    books.borrows.some(
      (borrows) => borrows.id === userId && borrows.returned === false
    )
  );

  //next, you need to reformat every object to have an "author" key pair value, with the value containing the entire book author's object
  const result = borrowed.map((borrowedBook) => ({
    id: borrowedBook.id,
    title: borrowedBook.title,
    genre: borrowedBook.genre,
    authorId: borrowedBook.authorId,
    author: authors.find((author) => author.id === borrowedBook.authorId),
    borrows: borrowedBook.borrows,
  }));

  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
