let a=10;
let b=a;
b=10+5;
console.log(a);
console.log(b);

let myId={
    name:"Sayantan Roy",
    roll:"SDE1"
}
let anotherId=myId;
anotherId.roll="SDE2";
console.log(anotherId.roll);
console.log(myId.roll);