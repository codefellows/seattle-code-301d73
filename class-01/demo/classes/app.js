// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.hello = function () {
//   return "Hi, I am " + this.name;
// }

// Animal.prototype.goodbye = function () {
//   return "Adios"";
// }

class Animal {

  constructor(name) {
    this.name = name;
  }

  hello() {
    return "Hi, I am " + this.name;
  }

  goodbye() {
    return "Adios";
  }
}

class Pet extends Animal {

  constructor(name, vaccinated = false) {
    super(name);
    this.vaccinated = vaccinated;
  }

  hasShots() {
    return this.vaccinated;
  }

}

class Dog extends Pet {

  beg() {
    return super.hello() + ". Cock head and eyeball magic";
  }

}

class Cat extends Pet {

  hello() {
    return super.hello() + " and I am your superior";
  }

}

class GoldenRetriever extends Dog {

}

const lela = new Dog("Lela", true);

console.log(lela.hello());
console.log(lela.beg());

const patchesOhoolihan = new Cat("Patches O'hoolihan")
console.log(patchesOhoolihan.hello());

console.log('Lela has shots', lela.hasShots());
console.log('Patches has shots', patchesOhoolihan.hasShots());

