const value={
    name:"sayan",
    val:999,
    welcomeMsg: function(){
        console.log(`${this.name}, welcome to our website`);
        console.log(this);
    }
}
value.welcomeMsg() //sayan, welcome to our website
value.name='Manasi';
value.welcomeMsg() //Manasi, welcome to our website
console.log(this);//{} here this return one empty object.But if I run it on browser it will return window object.

function chai(){
    let userName='sam'
    console.log(this.userName);// undefined  --->this only work inside object but in function it will give undefiend.
}
chai();

const addTwo=(n1,n2)=>{
    return n1+n2
}
console.log(addTwo(3,7));//10. its madnatory to use return keyword if I use curly braces.

const add=(m1,m2)=> (m1+m2)
console.log(add(9,8));//17.no need to use return keyword if I use parentheses.

const exm=(k1,k2)=>({userName:"SAYANTAN"}) //its madnatort to use parentheses if you return one object.
console.log(exm(8,6));