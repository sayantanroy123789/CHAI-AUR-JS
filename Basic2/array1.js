const myArr=["Thor","captain america","iron man"];
console.log(myArr[0]);
const myArray1=new Array(10,50,80,100);
console.log(myArray1);

//array method
myArr.push("captain marvel","hulk");
myArr.pop()

myArr.unshift("vision");
myArr.shift();
console.log(myArr);

console.log(myArr.includes("captain america"));
console.log(myArr.indexOf("Thor"));


const newArr=myArr.join();
console.log(typeof newArr);//string

//slice vs splice

const mySub=['physics','chemistry',"math","biology","bengali","english"]
console.log("A",mySub);
let op1=mySub.slice(1,3);//[ 'chemistry', 'math' ]
console.log(op1);
console.log("b",mySub);//b [ 'physics', 'chemistry', 'math', 'biology', 'bengali', 'english' ]
/* slice method dont manipulate the original array, but splice method manipulate original array */
let op2=mySub.splice(1,3);
console.log(op2);//[ 'chemistry', 'math', 'biology' ]
console.log("c",mySub);//c [ 'physics', 'bengali', 'english' ]

