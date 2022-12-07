'use strict';

const numberOfFilms = +prompt('How many films have you watched', "");
const personalMoviesDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false            
};

const a = prompt('What last movie did you watch?', ""),
      b = prompt('What is your rate?', ""),
      c = prompt('What last movie did you watch?', ""),
      d = prompt('What is your rate?', "");  
      
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);


