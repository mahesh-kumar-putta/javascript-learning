// nested objects : Objects inside of another object, Allows you to represent more complex data structure.
//Child object is enclosed by a parent object
// Person(Address{}, ContactInfo{})
// ShoppingCart(Keyboard{},Monitor{})

const person = {
  name:"Mahesh",
  age: 26,
  hobbies: ["sports","coding"],
  address: {
    street : "abcd street",
    city: "najohfehjbvh",
    country: "India"
  }
}

console.log(person.name);
console.log(person.hobbies);
console.log(person.address);
console.log(person.address.city);

class Human{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address)
  }
}

class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Human("Nahesh", "36", "churchstreet","chicago","USA");

const person2 = new Human("Namesh", "56", "hsuidhjsd","Hyd","IND");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);

console.log(person1.address.street);