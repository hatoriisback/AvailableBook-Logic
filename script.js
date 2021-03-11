"strict";

function book(title, author, isbn, numCopies) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.numCopies = numCopies;
}

book.prototype.getAvailability = function () {
  if (this.numCopies === 0) {
    return "Out of Stock";
  } else if (this.numCopies < 10) {
    return "Low of Stock";
  }
  return "In Stock";
};

book.prototype.sell = function (numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
};

book.prototype.restock = function (NumCopiesStocked = 5) {
  this.numCopies += NumCopiesStocked;
};

const hungerGames = new book(
  "Hunger Games",
  "Doraemon",
  "Harry Potter",
  123919,
  5
);
console.log(hungerGames.getAvailability());
hungerGames.restock(12);
console.log(hungerGames.getAvailability());
hungerGames.sell(17);
console.log(hungerGames.getAvailability());
