// const userInput = process.argv.slice(2); // userInput became breedName
const fetchBreedDescription = function(breedName, callback) {

  const request = require('request');
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    // console.log(typeof body)
    console.log('response: ', response && response.statusCode);
    console.log('error:', error);
    if (response === undefined) {
      callback('No response from the website! make sure you typed the correct address.', null);
  
    } else {
      const data = JSON.parse(body);
      // console.log('type of data [0]: ', typeof data[0]);
      if (data[0] === undefined) {
      // if (data === null) {                // <-- this works in happy scenario
        callback(`The "${breedName}" does not exist (at least in our database), check for typos or try again with another breed.`, null);
      } else {
        callback(null, data[0]['description']);
      }
    }
   
  });
};
module.exports = { fetchBreedDescription };