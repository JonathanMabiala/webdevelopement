// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy(arr) {
  for (var product of arr) {
    console.log(product);
  }
}

logDairy(dairy);

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(ob) {
  for (key of Object.keys(ob)) {
    console.log(`${key} : ${ob[key]}`);
  }
}

birdCan(bird);

// Task 3

function animalCan() {
  for (prop in bird) {
    console.log(prop + ": " + bird[prop]);
  }
}

animalCan();
