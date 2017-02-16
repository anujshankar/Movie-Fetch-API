const urlsToQuery = require('./urlsToQuery')
const databaseOps = require('./databaseOps')

function operations() {
  return new Promise((resolve, reject) => {
    urlsToQuery.getParamount()
      .then((response) => {
        return databaseOps.insertAllDB(response.data,'paramount')
      })
      .then(() => {
        return urlsToQuery.getDreamworks()
      })
      .then((response) => {
        return databaseOps.insertAllDB(response.data,'dreamworks')
      })
      .then(() => {
        return urlsToQuery.getActors()
      })
      .then((response) => {
        return databaseOps.insertActorsToDB(response.data)
      })
      .then(() => resolve('Operations Successful'))
      .catch((err) => {
        console.log(err)
        reject('reject')
      })
  })
}

module.exports = operations
