const chai = require('chai')
const expect = chai.expect
const DBQueries = require('../DBQueries')

describe('InsertDB function for movies table valid input', () => {
  xit('should return an array', (done) => {
    DBQueries.insertDB('The Game', 'paramount', 'Oct-01-2015').then((data) => {
      expect(data).to.be.eqls([])
      done()
    })
  })
})

describe('InsertDB function for movies table invalid input', (done) => {
  xit('should return an SequelizeDatabaseError', (done) => {
    DBQueries.insertDB([], 1234, '')
      .catch((err) => {
        expect(err.name).to.be.eqls('SequelizeDatabaseError')
        done()
      })
  })
})

describe('InsertIntoActors function for actor table valid input', () => {
  xit('should return an array', (done) => {
    DBQueries.insertIntoActors('abc', 'moviename').then((data) => {
      expect(data).to.be.eqls([])
      done()
    })
  })
})

describe('insertIntoActors function for actors table invalid input', (done) => {
  xit('should return an SequelizeDatabaseError', (done) => {
    DBQueries.insertIntoActors()
      .catch((err) => {
        expect(err.name).to.be.eqls('SequelizeDatabaseError')
        done()
      })
  })
})

describe('getData function for valid input', () => {
  xit('should return', (done) => {
    DBQueries.getData('Movie 1').then((data) => {
      console.log(data[0])
      expect(data[0].length).to.be.eqls(2)
      done()
    })
  })
})

describe('getData function for valid input', () => {
  xit('should return rowcount equal to 0', (done) => {
    DBQueries.getData('Movie1')
      .then( (data) => {
        expect(data[1].rowCount).to.be.eqls(0)
        done()
      })
  })
})

describe('getData function for invalid input', () => {
  it('should return rowcount equal to 0', (done) => {
    DBQueries.getData([])
      .catch( (err) => {
        expect(err.name).to.be.eqls('SequelizeDatabaseError')
        done()
      })
  })
})