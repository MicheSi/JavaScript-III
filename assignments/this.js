/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - This will refer to whatever is in the global object
* 2. Implicit Binding - This refers to whatever obejct is being called to the left of the dot when the function is being invoked
* 3. New Binding - This refers to the new object that is created and returned using a constructor function
* 4. Explicit Binding - This refers to whatever object is being passed through the argument when using the call or apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function book (){
    console.log(this.favBook);
}

var favBook = 'The Giver'; //use var to get global object
book();

// Principle 2

// code example for Implicit Binding
const myDog = {
    name: 'Keira',
    age: 1,
    breed: 'pitbull',
    favFood: 'anything she can find',
    eat: function(){
        console.log(`${this.name} is a ${this.breed} who will eat ${this.favFood}`)
    }
}

myDog.eat();

// Principle 3

// code example for New Binding
function Candy(favorite){
    this.favCandy = favorite;
}

const myFav = new Candy('Hi-Chew');

console.log(myFav.favCandy);

// Principle 4

// code example for Explicit Binding
function family() {
    console.log(`My ${this.famMem}'s name is ${this.name} and ${this.pronoun} is ${this.age}`);
}

const myDad = {
    name: 'Bounthong',
    age: 61,
    pronoun: 'he',
    famMem: 'dad'
}

const myMom = {
    name: 'Souksakhone',
    age: 59,
    pronoun: 'she',
    famMem: 'mom'
}

family.call(myDad);
family.call(myMom);