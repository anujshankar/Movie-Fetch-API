const axios = require('axios')

const getParamount = () => axios.get('https://movie-api-lyalzcwvbg.now.sh/paramount')

const getDreamworks = () => axios.get('https://movie-api-lyalzcwvbg.now.sh/dreamworks')

const getActors = () => axios.get('https://movie-api-lyalzcwvbg.now.sh/actors')

// getActors().then( (res) => console.log(res.data) ) 

module.exports = { getParamount,getDreamworks, getActors}
