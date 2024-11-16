// Inheritance : Allows a new class to inherit properties and methods from an existing class ( parent -> class). helps in code reusability

class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }

  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }

}

class Rabbit extends Animal{
  name = "rabbit";
}

class Fish extends Animal{
   name = "Fish";
   swim(){
    console.log(`Hey, I'm a ${this.name} and I'm swimming`);
   }
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.eat();
rabbit.sleep();
console.log(rabbit.alive);

fish.eat();
fish.sleep();
console.log(fish.alive);
fish.swim();

