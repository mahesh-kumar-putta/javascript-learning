// super : keyword is used in classes to call the constructor or access the properties and methods a parent ( super class)
// this = this object
// super = the parent

class Animal{
  constructor(){

  }
}

class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super();
      this.name = name;
      this.age = age;
      this.runSpeed = runSpeed;
  }
}

class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super();
      this.name = name;
      this.age = age;
      this.swimSpeed = swimSpeed;
  }
}

const rabbit = new Rabbit("rabbit",1,20);

const fish = new Fish("fish",2,"25");


class Animal2{
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed} kmph`);
  }
}

class Rabbit2 extends Animal2{
  constructor(name, age, runSpeed){
    super(name, age);
      this.runSpeed = runSpeed;
  }
}

class Fish2 extends Animal2{
  constructor(name, age, swimSpeed){
    super(name, age);
      this.swimSpeed = swimSpeed;
  }
}

const rabbit2 = new Rabbit2("rabbit",1,20);

const fish2 = new Fish2("fish",2,"25");

console.log(rabbit.name);
console.log(rabbit.age);

console.log(rabbit2.name);
console.log(rabbit2.age);

console.log(fish.name);
console.log(fish.age);

console.log(fish2.name);
console.log(fish2.age);

console.log(rabbit.runSpeed);
console.log(rabbit2.runSpeed);

rabbit2.move(40);