// SUPER HEROES
const superheroes = require("superheroes");

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

var mySuperheroName = superheroes.random();
//=> 'Spider-Ham'

console.log(mySuperheroName);

// SUPER VILLAINS
const supervillains = require("supervillains");

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]

var mySupervillainName = supervillains.random();
//=> 'Mud Pack'

console.log(mySupervillainName);
