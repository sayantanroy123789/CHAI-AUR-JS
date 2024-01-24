function calculatePrice(...num1){
return num1
}
console.log(calculatePrice(2));//2
console.log(calculatePrice(200,300,700,800));//rest operator

const user={
name:'sayan',
age:25
}
function handleObject(anyObject){
    console.log(`name is ${anyObject.name} and age is ${anyObject.age}`);

}
handleObject(user)

const newArr=[100,300,80,91]
function handleArray(getArray){
    return getArray[2]
}
console.log(handleArray(newArr));//80