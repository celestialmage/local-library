const author = {
  name: {
    firstName: "Philip",
    surname: "Pullman",
  },
  birthday: "1946-10-19",
};

const array = [
  "Ursula K. Le Guin",
  "Brandon Sanderson",
  "Terry Pratchett",
  "Neil Gaiman",
  "J. R. R. Tolkien",
];

function destructure(object) {
  let {
    name: { firstName, surname },
  } = object;

  console.log(firstName + " " + surname);
}

function destructArray(array) {
  const [first, second, third] = array;

  console.log(first, second, third);
}

destructure(author);

destructArray(array);
