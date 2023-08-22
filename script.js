const API_KEY = "cc445126-b965-4de3-9987-d3555a682d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
getMovies(API_URL_POPULAR);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    },
  });
  const respData = await resp.json();
  showMovies(respData);
}

function showMovies(data) {
  const movies = document.querySelector(".movies");

  data.films.forEach((movie) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = ` 
      <div class="movie_cover-inner">
        <img 
          src="${movie.posterUrlPreview}"
          class="movie_cover"
          alt="${movie.nameRu}"
        />
      </div>
      <div class="movie_cover-darker"></div>
    </div>

    <div class="movie_info">
      <div class="movie_title">${movie.nameRu}</div>
      <div class="movie_category">${movie.genres.map(
        (genre) => `${genre.genre}`
      )}</div>  
      <div class="movie_average movie_average-green">9</div>  
    </div>`;
    movies.appendChild(movieEl);
  });
}
