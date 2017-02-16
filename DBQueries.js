const Sequelize = require('sequelize')
// const dbconnect = process.env.mode
// const sequelize = new Sequelize(dbconnect)
const sequelize = new Sequelize('postgres://anujshankar:t7@localhost:5432/moviesdb')

function insertDB(studio, movie, releaseDate) {
  return sequelize.query(`INSERT INTO movies (NAME,STUDIO,RELEASEDATE)
   VALUES(?,?,?);`, { replacements: [movie, studio, releaseDate] })
}

function fetchActors(movie) {
  return sequelize.query(`SELECT actors FROM movies WHERE name=?;`, { replacements: [movie] })
}

function updateActorList(movie, actorList) {
  return sequelize.query('UPDATE movies SET actors = ? WHERE name = ?;', { replacements: [actorList, movie] })
}

function insertIntoActors(actorname, movie) {
  return sequelize.query(`INSERT INTO actors (actorname,moviename)
   VALUES(?,?);`, { replacements: [actorname, movie] })
}

function getData(movie){
  return sequelize.query(`SELECT studio,releasedate,actors.actorname FROM movies,actors WHERE movies.name = actors.moviename and movies.name = ?;`, { replacements: [movie] })
}

// getData('Movie 1').then( (data) => console.log(data[0]) )

// updateActorList('Movie 1', 'Anuj').then((data) => console.log(data))
// fetchActors('Movie 1').then((data) => console.log(data[0][0].actors))

module.exports = { insertDB, fetchActors, updateActorList, insertIntoActors, getData }
