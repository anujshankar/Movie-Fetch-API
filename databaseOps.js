const DBQueries = require('./DBQueries')

function insertAllDB(data, studio) {
  for (let i = 0; i < data.length; i++) {
    const movie = data[i].movieName;
    const releaseDate = data[i].releaseDate;
    DBQueries.insertDB(studio, movie, releaseDate)
      .then(() => { })
      .catch((err) => {
        console.error(err)
        return error
      })
  }
}

function insertActorsToDB(data) {
  for (let i = 0; i < data.length; i++) {
    const actorName = data[i].actorName;
    const movies = data[i].movies;
    for (let i = 0; i < movies.length; i++) {
      DBQueries.insertIntoActors(actorName, movies[i]).then(() => { })
        .catch((err) => {
          console.error(err)
          return err
        })
    }
  }
}

// function insertActorsToDB(data){
//   for( let i = 0; i < data.length; i++ ){
//     const actorName = data[i].actorName;
//     const movies = data[i].movies;
//     for( let i = 0; i < movies.length; i++ ){
//       //fetch the actor list and update
//       DBQueries.fetchActors(movies[i]).then( (actorList) => {
//         const actorString = actorList[0][0].actors
//         const newActorListString = actorString + ' ,' + actorName
//         return DBQueries.updateActorList(movies[i],newActorListString)
//       }).then( () => console.log('update successful') )
//       .catch( (err) => {
//         console.error(err)
//         return err
//       })
//     }
//   }
// }

// const a = [{
//   actorName: 'Actor 1',
//   movies: ['Movie 1', 'Movie 2', 'Movie 5']
// },
// { actorName: 'Actor 2', movies: ['Movie 2', 'Movie 3'] },
// {
//   actorName: 'Actor 3',
//   movies: ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 5', 'Movie 6']
// }];

// insertActorsToDB(a)

module.exports = { insertAllDB, insertActorsToDB }
