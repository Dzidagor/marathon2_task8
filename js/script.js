"use strict";
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);
let personalMovieDB = {
  'count': numberOfFilms,
  'movies': {},
  'actors': {},
  'genres': [],
  'privat': false
};

// Первый способ
let counter = 0;
while (counter < 2) {
  let movie = prompt('Один из последних просмотренных фильмов');
  let rating = prompt('На сколько оцените его?');
  if (movie == '' || movie == null || rating == '' || rating == null) {
    continue;
  } else {
    personalMovieDB.movies[movie] = rating;
    counter++;
  }
}

// Второй способ
for (let i = 0; i < 2; i++) {
  let movie = prompt('Один из последних просмотренных фильмов');
  let rating = prompt('На сколько оцените его?');
  if (movie == '' || movie == null || rating == '' || rating == null) {
    i--;
  } else {
    personalMovieDB.movies[movie] = rating;
  }
}

// Третий способ
let numberOfMovies = Object.keys(personalMovieDB.movies).length;
while (numberOfMovies < 2) {
  let movie = prompt('Один из последних просмотренных фильмов');
  let rating = prompt('На сколько оцените его?');
  if (movie == '' || movie == null || rating == '' || rating == null) {
    continue;
  } else {
    personalMovieDB.movies[movie] = rating;
    numberOfMovies = Object.keys(personalMovieDB.movies).length;
  }
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}
console.log(personalMovieDB);