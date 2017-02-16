const DBQueries = require('./DBQueries')

function fetchAPIData(movie) {
  return new Promise((resolve, reject) => {
    DBQueries.getData(movie).then((data) => {
      // console.log(data)
      data = data[0]
      const studio = data[0].studio
      const releaseDate = data[0].releasedate
      let actorsArray = []
      for (let i = 0; i < data.length; i++) {
        actorsArray.push(data[i].actorname)
      }
      const response = {
        movieName: movie,
        releaseDate: releaseDate,
        actors: actorsArray,
        studio: studio
      }
      // console.log(response)
      resolve(response)
    })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

module.exports = fetchAPIData