'use strict';

const personalMoviesDB ={
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start: function () {
        personalMoviesDB.count = +prompt('How many films have you watched', "");
    
        while ( personalMoviesDB.count== ''||  personalMoviesDB.count ==null|| isNaN( personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('How many films have you watched', "");
        }
    },

    rememberMyFilms: function() {
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
    
    },

    detectPersonalLevel:function() {
        if (personalMoviesDB.count <10){
            console.log('Too small');
        
        }else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30) {
            console.log('You are in the middle');
        }else if (personalMoviesDB.count >30) {
            console.log ('You are supergood');
        }else {
            console.log('Error');
        }
    
    },

    showMyDB:function(hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    
    },
    toggleVisibleMyDB: function () {
        if (personalMoviesDB.privat){
            personalMoviesDB.privat = false;

        } else {
            personalMoviesDB.privat = true;
        }


    },
    writeYourGenres: function () {
        for (let i = 1; i <=3 ; i++) {
            let genre = prompt(`Your favorite genre ${i}`);
            
            if (genre == '' || genre == null) {
                console.log('You entered incorrect information');
                i--;
            } else {
                personalMoviesDB.genres[i - 1] = genre;
            }

           personalMoviesDB.genres.forEach ((item, i) =>{
            console.log(`Favorite genre ${i + 1} - it is ${item} `);


           });
        }
    }

};

