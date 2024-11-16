// classes : (ES6 feature)- provides more structure and cleaner way to work with objects compared to traditional constructor functions

class Product{
  constructor(name, price){
      this.name = name;
      this.price = price;
  }

  // no need to use function keyname
  display(){
    console.log(`Product: ${this.name}`);
    console.log(`Price is ${this.price}`);
  }
  totalPrice(tax){
    return Number(this.price)+Number((this.price*tax));
  }
}

const prod1 = new Product("shirt","1000");
prod1.display();
console.log(prod1.totalPrice(0.1));