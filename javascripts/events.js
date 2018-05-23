const tmdb = require('./tmdb');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'authenticate') {
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    } else if (e.target.id === 'mine') {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'navSearch') {
      $('#myMovies').addClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
    }
  });
};

const pressEnter = () => {
  // big old keypress event
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchWords = $('#searchBar').val().replace(' ', '%20');
      tmdb.showResults(searchWords);
    }
  });
};

const initializer = () => {
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
