function sayMyName(){
    console.log("sayan");
    console.log(25);
}
sayMyName()
console.log(sayMyName());

function addTwoNumber(num1,num2){
 console.log(num1+num2);
}
addTwoNumber(3,4)//7
addTwoNumber(3,'4')//34
addTwoNumber(2,"a")//2a

function add(num1,num2){
    let result=num1+num2;
    return result
}
const result=add(6,8)
console.log(result);//14

// another method
function anotherAdd(n1,n2){
    return n1+n2
}
let sum=anotherAdd(5,10)
console.log("sum:",sum);//sum: 15

function logedinMessage(user){
    return `welcome ${user}`
}
console.log(logedinMessage('sayan'));//welcome sayan
console.log(logedinMessage());//welcome undefined

function message(user){
    if(user===undefined){
        console.log('please enter valid string');
        return
    }
    return `hi ${user}`
}
console.log(message());//undefined
console.log(message('priyanka'));//hi priyanka

