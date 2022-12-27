'use strict';

let numberOfFilms;
function start() {
    numberOfFilms = +prompt('How many films have you watched', "");

    while (numberOfFilms == ''|| numberOfFilms ==null|| isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched', "");
    }
}
start();

const personalMoviesDB ={
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false           
};

// const a = prompt('What last movie did you watch?', ""),
//       b = prompt('What is your rate?', ""),
//       c = prompt('What last movie did you watch?', ""),
//       d = prompt('What is your rate?', "");  
      
// personalMoviesDB.movies[a] = b;
//personalMoviesDB.movies[c] = d;

function rememberMyFilms() {
    for (let i =0; i<2; i++) {
        const a = prompt('What last movie did you watch?', ""),
              b = prompt('What is your rate?', "");
        if(a != null && b !=null && a != '' && b !="" && a.length <=50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
              
              }else {
                i--;
              }
    }

}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count <10){
        console.log('Too small');
    
    }else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
        console.log('You are in the middle');
    }else if (personalMoviesDB.count >30) {
        console.log ('You are supergood');
    }else {
        console.log('Error');
    }

}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }

}
showMyDB(personalMoviesDB.privat);
function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Your favorite genre ${i}`);

    }
}

writeYourGenres();

