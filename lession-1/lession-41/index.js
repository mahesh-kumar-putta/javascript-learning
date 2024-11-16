// static = keyword that defines properties or method that belongs to a class itself rather than the objects reated from that class ( class owns anything static, not the objects)

class MathUtils{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius*2;
  }

  static getArea(raddius){
    return this.PI*raddius*raddius;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.getDiameter(10));

console.log(MathUtils.getArea(10));