const domString = (movieArray, config) => {
  let strang = '';
  movieArray.forEach((movie) => {
    strang += `<div class="col-sm-6 col-md-4">`;
    strang +=   `<div class="thumbnail">`;
    strang +=     `<img src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang +=     `<div class="caption">`;
    strang +=       `<h3>${movie.original_title}</h3>`;
    strang +=       `<p>${movie.overview}</p>`;
    strang +=       `<p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;
  });

  printToDom(strang);
};

const printToDom = (stringz) => {
  $('#movies').html(stringz);
};

module.exports = {
  domString,
};
