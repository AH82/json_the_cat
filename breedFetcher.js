const userInput = process.argv.slice(2);
const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=' + userInput, (error, response, body) => {
  // console.log(typeof body)
  // console.log('response: ', response);
  if (response === undefined) {
    console.log('No response from the website! make sure you typed the correct address.');

  } else {
    const data = JSON.parse(body);
    // console.log('type of data [0]: ', typeof data[0]);
    // console.log('error:', error);
    if (data[0] === undefined) {
      console.log(`The "${userInput}" does not exist (at least in our database), check for typos or try again with another breed.`);
    } else {
      console.log(data[0]['description']);
    }
  }
 
});