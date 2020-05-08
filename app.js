// Media class
class Media {

// Media constructor
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

// Media getters
  get title() {return this._title};
  get isCheckedOut() {
    if (this._isCheckedOut === true)
      {return `${this._title} is CHECKED OUT.`}
    else
      {return `${this._title} is AVAILABLE.`}
  };
  get ratings() {return this._ratings};

// Media check out setter
  set isCheckedOut(trueOrFalse) {return this._isCheckedOut = trueOrFalse }

// Media toggle check out status
  toggleCheckOutStatus() {this.isCheckedOut = !this.isCheckedOut};
  
// Media get average rating
  getAverageRating() {
    const ratingsSum = this._ratings.reduce((acc, val) => acc + val, 0);
    const lengthOfArray = this._ratings.length;
    const averageRating = (ratingsSum / lengthOfArray).toFixed(1);
    return `The average rating of ${this._title} is ${averageRating}.`;
  }

// Media add a new rating
  addRating(newRating) {
    this._ratings.push(newRating)
  }
}// end of Media class

// Book class
class Book extends Media {

// Book constructor
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

// Book getters
	get author() {return this._author};
  get pages() {return this._pages};

// Book setters
  set author(authorName) {this._author = authorName}
  set pages(numberOfPages) {this._pages = this._pages + numberOfPages}
}// end of class Book

// Movie class
class Movie extends Media {

// Movie constructor
  constructor (director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

// Movie getters
  get director() {return this._director};
  get runTime() {return this._runTime};

// Movie setters
  set director(directorName) {this._director = directorName};
  set runTime(minutes) {this._runtime = minutes};
}// end of Movie class

// CD class
class CD extends Media {

// CD constructor
  constructor (artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs
  }

//CD getters
  get artist() {return this._artist};
  get songs() {return this._songs};

//CD setters
  set artist(artist) {this._artist = artist};
  set songs(songs) {this._songs = songs};

// add a new song
  addSong(newSong) {this._songs.push(newSong)};
}// end of CD class

// test class functions
// create new book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// test toggle checkout status
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// test adding ratings and getting average rating
historyOfEverything.addRating(4);
historyOfEverything.addRating(3);
historyOfEverything.addRating(10);
historyOfEverything.getAverageRating;
console.log(historyOfEverything.getAverageRating());

// create new movie
const speed = new Movie('Jan de Bont', 'Speed', 116);

// test toggle checkout status
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

// test adding ratings and getting average rating
speed.addRating(8);
speed.addRating(7);
speed.addRating(10);
console.log(speed.getAverageRating());
