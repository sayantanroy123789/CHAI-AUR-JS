console.log("5">2) //true
console.log("1"<"6")// true
console.log("2"==2) //true
console.log("5"===5) //false
console.log("02">10);//false

console.log(null==0) //false
console.log(null>0) //false
console.log(null>=0) //true in js compresion operator convert null to 0.
console.log(0>=null) //true

console.log(undefined==0) //false
console.log(undefined>0); //false
console.log(undefined<0) //false


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId); //false
console.log(id===anotherId); //false

