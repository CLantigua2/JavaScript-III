/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - using a variable from an object within a function with the this keyword.
* 2. Global binding - using this within the global scope will always return the window Object as it isn't binded to anything else at this time.
* 3. New binding - using the new keyword on a function object creates a new instance of that object that binds it's attributes to that instance. 
* 4. Explicit Binding - using call or apply function methods explicitly binds the objects this keyword to the constructor function call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  bornYear: 1985,
  thisYear: 2018,
  calculateAge: function () {
    return this.thisYear - this.bornYear;
  }
}

console.log(myObj.calculateAge());

// Principle 3

// code example for New Binding

function Player(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.attack = function () {
    console.log(`${this.name} likes to attack with ${this.weapon}!`);
  }
}

const wario = new Player('Wario', 'Red Turle shells');
wario.attack();

// Principle 4

// code example for Explicit Binding
const myName = {
  'name': 'Carlos'
}

const goodAt = ['HTML', 'CSS', 'JavaScript', 'React', 'video games'];
const badAt = ['Algorithms', 'backend', 'API setups', 'also video games'];

function hello(goodAt1, goodAt2, goodAt3, badAt1, badAt2, badAt3) {
  console.log(`Hi, I'm ${this.name}, and I'm good at ${goodAt1}, ${goodAt2}, ${goodAt3}. But I'm terrible ${badAt1}, ${badAt2}, ${badAt3}`);
}

hello.apply(myName, goodAt, badAt);