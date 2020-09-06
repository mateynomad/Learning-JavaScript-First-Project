"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1Name = prompt("Один из последних просмотренных фильмов?", ""),
      film1Mark = prompt("На сколько оцените его?", ""),
      film2Name = prompt("Один из последних просмотренных фильмов?", ""),
      film2Mark = prompt("На сколько оцените его?", "");

personalMovieDB.movies[film1Name] = film1Mark;
personalMovieDB.movies[film2Name] = film2Mark;

console.log(personalMovieDB);