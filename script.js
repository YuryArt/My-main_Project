'use strict';

const numberOfFilms = +prompt('How many films have you watched', "");
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

if (personalMoviesDB.count <10){
    console.log('Too small');

}else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
    console.log('You are in the middle');
}else if (personalMoviesDB.count >30) {
    console.log ('You are supergood');
}else {
    console.log('Error');
}


console.log(personalMoviesDB);


