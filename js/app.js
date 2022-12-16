// grab html elements
// Get input's value on enter key press
// grab data related to user's search
//Inject the movie items into DOM based  on user's search

var searchInput = document.querySelector('.search');
var itemWrapper = document.querySelector('main');

function displayMatches(matches) {
    itemWrapper.innerHTML = '';
    for (var matchobj of matches) {
        itemWrapper.insertAdjacentHTML('beforeend', `
    <div class="movie-item" style= "background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(${matchobj.image_url})">
    <h3>${matchobj.title}</h3>
    <p>${matchobj.description}</p>
    <a href="${matchobj.imdb_url}"target= "_blank">View More Details</a></div>`)
    }

}



function getMovieData(event) {
    var keyCode = event.keyCode;
    var searchText = searchInput.value.trim().toLowerCase();
    if (keyCode === 13 && searchText) {
        var matches = [];
        for (var movie of movieData) {
            if (movie.title.toLowerCase().includes(searchText)) {
                matches.push(movie);
                console.log(movie);
            }
        }

       var responsePromise = fetch ('https://www.omdbapi.com/?apikey=56c29f25&s=${searchText}')
        then 
        displayMatches(matches);
    }

}


function init() {
    searchInput.addEventListener('keydown', getMovieData)
}

init();




























