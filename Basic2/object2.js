const myobj=new Object();//singleton like constructor
console.log(myobj);//{}
myobj.name='sayan';
myobj.id=123;
myobj.islogedin=true;
console.log(myobj);

//nested object
const regularUser={
    fullname:{
        firstname:"sayantan",
        lastname:"roy"
    }
}
console.log(regularUser.fullname.firstname, regularUser.fullname.lastname);

const obj1={
    name:"sayantan",
    id:123789
}
const obj2={
    name:"priyanka",
    id:456
}
const obj3=Object.assign(obj1 ,obj2 );
console.log(obj3);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign({},target, source);
console.log(returnedTarget);

const obj4={...obj1,...obj2};
console.log(obj4);
const boy={
    male:"boys",
    age:25
}
const girl={
    female:"girls",
    salary:30000
}
const gender={...boy,...girl}
console.log(gender);//{ male: 'boys', age: 25, female: 'girls', salary: 30000 }

const collection=[
    {
        name:'abc',
        Number:123
    },
    {
        name:'rbc',
        Number:12
    },
    {
        name:'abw',
        Number:23
    },
    {
        name:'afc',
        Number:3
    }

]
console.log(collection[1].name);//rbc
console.log(Object.keys(obj1));//[ 'name', 'id' ]
console.log(Object.values(boy));//[ 'boys', 25 ]

console.log(girl.hasOwnProperty('salary'));//true