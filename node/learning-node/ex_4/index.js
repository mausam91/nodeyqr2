var oneLinerJoke = require('./node_modules/one-liner-joke');

var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(getRandomJoke.body)
console.log(getRandomJoke.tags.join(', '))