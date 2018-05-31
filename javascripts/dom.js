
const domString = (movieArray, config, whereToPrint) => {
  let strang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      strang += `<div class="row">`;
    }
    strang += `<div class="col-sm-6 col-md-4">`;
    strang +=   `<div class="thumbnail movie">`;
    strang +=     `<img data-poster="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang +=     `<div class="caption">`;
    strang +=       `<h3 class="movie-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    strang +=       `<p class="movie-overview">${movie.overview}</p>`;
    strang +=       `<p><a href="#" class="btn btn-primary" role="button">Review</a> 
    <a class="btn btn-default addMovieToWishlist" role="button">Wishlist</a></p>`;
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;

    if (index % 3 === 2) {
      strang += `</div>`;
    }
  });

  printToDom(whereToPrint, strang);
};

const printToDom = (whereToPrint, stringz) => {
  $(`#${whereToPrint}`).html(stringz);
};

module.exports = {
  domString,
};
