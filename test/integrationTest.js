const chai = require('chai')
const expect = chai.expect
const request = require('request')

describe('GET populateDB', () => {
  xit('should return OK Status', (done) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/populateDB',
      headers:
      {
        'postman-token': '6c9c0799-9069-26ba-c377-9a15c7f30e20',
        'cache-control': 'no-cache'
      }
    }
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      expect(response.statusCode).to.be.eqls(200)
      done()
    })
  })
})

describe('GET movie/:moviename', () => {
  xit('should return OK Status', (done) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/movie/Movie%201',
      headers:
      {
        'postman-token': '53702826-8d23-318c-ce98-947a10c7555a',
        'cache-control': 'no-cache'
      }
    }
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      expect(response.statusCode).to.be.eqls(200)
      done()
    })
  })
})

describe('GET movie/:moviename', () => {
  xit('should return 500 error', (done) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/movie/Movie%208',
      headers:
      {
        'postman-token': '53702826-8d23-318c-ce98-947a10c7555a',
        'cache-control': 'no-cache'
      }
    }
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      expect(response.statusCode).to.be.eqls(500)
      done()
    })
  })
})
