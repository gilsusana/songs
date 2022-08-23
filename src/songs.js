const songs = require("./data");

//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let allArtists = array.map (item=> item.artist)
    return allArtists;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){
    let songsArtist = array.filter(item => item.artist === artist);
    return songsArtist;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
    let order = array.map(item => item.title).sort().slice(0, 10);
    return order;
   };

//Exercise 4: Order by year, ascending
function orderByYear(array){
    let orderYear = array.map(item => ({ year:item.year, title:item.title})).sort((a,b) => a.year - b.year).sort((a,b) =>a.year === b.year ? a.title.localeCompare(b.title):null); 
    return orderYear;
};

//Exercise 5: Filter songs by genre
function songsByGenre(array, genre) {
    let songsGenre= array.filter(item=> item.genre.includes(genre)); 
    return songsGenre;
};

//Exercise 6: Modify the duration of songs to minutes
function minutsToSeconds() {
let durationDivided = array.map(item => item.duration);
let text="3min 30sec";
let chars= text.split(" ");
let minutes = parseInt(chars[0], 10);
let seconds = parseInt(chars[1], 10);
let number = minutes + seconds;   
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    }
}