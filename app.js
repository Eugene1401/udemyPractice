const numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних фильмов?", ""),
    b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }

  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало");
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Error");
  }
}

console.log(personalMovieDB);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 5));
console.log(calc(1, 2));
console.log(calc(5, 3));
