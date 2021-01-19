const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8c0e0b1b99e51f1340602651531679a6&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8c0e0b1b99e51f1340602651531679a6&query="'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

// Get initial movies
getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
}

function showMovies(movies){
    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = ` <div class="movie">
        <img src="" alt="">
        <div class="movie-info">
            <h3>Movie Title</h3>
            <span class="green"></span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quo sint officiis ducimus tempore porro! Quos, est! Est in officiis beatae molestias ut dolorem quam?
        </div>
    </div>`
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_URL + searchTerm)

        search.value = ''
    } else{
        window.location.reload()
    }
})

