class Media {
  constructor (title){
   this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title () {
    return this._title;
  }
  get isCheckedOut () {
    return this._isCheckedOut;
  }
  get ratings () {
    return this._ratings;
  }
  set isCheckedOut(checking) { // maybe _isCheckedOut instead checking
    this._isCheckedOut = checking;
  }
  addRating (ratings) {
    this._ratings.push(ratings);
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let totalRate = this._ratings.reduce(function(a, b) { return a + b; }, 0);
    let averageRate = totalRate / this._ratings.length;
    return averageRate;
  }
}
class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  } 
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}
class Cd extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = [];
  } 
  get director () {
    return this._director;
  }
  get runTime () {
    return this._runTime;
  }
}
const historyOfEverythins = new Book ('A Short History of Nearly Everything', 'Bill Bryson', 544);
const speed = new Movie ('Speed', 'Jan de Bont', 116);

historyOfEverythins.toggleCheckOutStatus(); //Tets 
historyOfEverythins.addRating(5); //Test AddRatint
historyOfEverythins.addRating(3); //Test AddRatint
historyOfEverythins.addRating(4); //Test AddRatint
historyOfEverythins.addRating(2); //Test AddRatint
console.log('Average rating: ' + historyOfEverythins.getAverageRating());
console.log(historyOfEverythins);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('Average rating: ' + speed.getAverageRating());

/*
Nice work! If you've made it this far, you clearly have a strong understanding of class syntax and inheritance.
If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

Add more properties to each class (movieCast, songTitles, etc.)

Create a CD class that extends Media.

In .addRating(), make sure input is between 1 and 5.

Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.

Create class called Catalog that holds all of the Media items in our library.

*/
