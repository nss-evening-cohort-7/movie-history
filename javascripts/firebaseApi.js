let firebaseConfig = {};

const setConfig = (fbConfig) => {
  firebaseConfig = fbConfig;
};

const saveMovieToWishlist = (newMovie) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: `${firebaseConfig.databaseURL}/movies.json`,
      data: JSON.stringify(newMovie),
    })
      .done((uniqueKey) => {
        resolve(uniqueKey);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllMovies = () => {
  return new Promise((resolve, reject) => {
    const allMoviesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/movies.json`,
    })
      .done((allMoviesObj) => {
        if (allMoviesObj !== null) {
          Object.keys(allMoviesObj).forEach((fbKey) => {
            allMoviesObj[fbKey].id = fbKey;
            allMoviesArray.push(allMoviesObj[fbKey]);
          });
        }
        resolve(allMoviesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getWatchedMovies = () => {
  return new Promise((resolve, reject) => {
    const allMoviesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/movies.json?orderBy="isWatched"&equalTo=true`,
    })
      .done((allMoviesObj) => {
        if (allMoviesObj !== null) {
          Object.keys(allMoviesObj).forEach((fbKey) => {
            allMoviesObj[fbKey].id = fbKey;
            allMoviesArray.push(allMoviesObj[fbKey]);
          });
        }
        resolve(allMoviesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getWishlistMovies = () => {
  return new Promise((resolve, reject) => {
    const allMoviesArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseConfig.databaseURL}/movies.json?orderBy="isWatched"&equalTo=false`,
    })
      .done((allMoviesObj) => {
        if (allMoviesObj !== null) {
          Object.keys(allMoviesObj).forEach((fbKey) => {
            allMoviesObj[fbKey].id = fbKey;
            allMoviesArray.push(allMoviesObj[fbKey]);
          });
        }
        resolve(allMoviesArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const deleteMovieFromDb = (movieId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'DELETE',
      url: `${firebaseConfig.databaseURL}/movies/${movieId}.json`,
    })
      .done(() => {
        resolve();
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const updateMovieToWatchedInDb = (updatedMovie, movieId) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'PUT',
      url: `${firebaseConfig.databaseURL}/movies/${movieId}.json`,
      data: JSON.stringify(updatedMovie),
    })
      .done((modifiedMovie) => {
        resolve(modifiedMovie);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  saveMovieToWishlist,
  getAllMovies,
  getWatchedMovies,
  getWishlistMovies,
  deleteMovieFromDb,
  updateMovieToWatchedInDb,
};
