// getter : special method that makes a property readable
// setter : special method that makes a property writable

// validate and modify a value when reading/writing a property

class Reactange{

  constructor(height, width){
    this.height = height;
    this.width = width;
  }

  // this will be called automatically
  set height(newHeight){
    if(newHeight>0){
      // _ specifies a private variable
      this._height = newHeight;
    } else{
      console.error(`Height cannot be negative`);
    }
  }

  set width(newWidth){
    if(newWidth>0){
      // _ specifies a private variable
      this._width = newWidth;
    } else{
      console.error(`Height cannot be negative`);
    }
  }

  get height(){
    return this._height;
  }

  get width(){
    return this._width;
  }

  // here getter acts as function
  get area(){
    return this._height * this._width;
  }

}

const rectangle1 = new Reactange(23,23);

console.log(rectangle1.height);
console.log(rectangle1.width);

//observe this
console.log(rectangle1.area);

