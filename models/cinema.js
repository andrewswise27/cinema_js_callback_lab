const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map(film => film.title)
  return titles
};

Cinema.prototype.filmByTitle = function (filmtitle) {
  const film = this.films.filter(film => film.title === filmtitle);
  return film;
};

Cinema.prototype.filmByProperty = function (property, value) {
  const genre = this.films.filter(film => film[property] === value);
  return genre;
};

Cinema.prototype.filmByYear = function (filmyear){
  const year = this.films.filter(film => film.year === filmyear);
  return year;
};

Cinema.prototype.filmNotByYear = function (filmyear){
  const year = this.films.every(film => film.year !== filmyear);
  return year;
};

Cinema.prototype.filmOverLength = function (filmlength){
  const length = this.films.filter(film => film.length > filmlength);
  return length;
};

Cinema.prototype.totalRunTime = function () {
const lengths = this.films.map(film => film.length)
const initialValue = 0;
const sumWithInitial = lengths.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
return sumWithInitial;
};

module.exports = Cinema;
