//object literals

const jsUser={
    name:"Sayan",
    age:25,
    location:"burdwan",
    email:"sayan@google.com",
    islogedin:false,
    lastLogedin:["monday","wednestday"]
}
console.log(jsUser.name);
console.log(jsUser['email']);

const mysym=Symbol("mykey");
const symobj={
    [mysym]:"symbol10"
}
console.log(symobj[mysym]);
console.log(mysym);
jsUser.email="sayan@chatgpt.com";
Object.freeze(jsUser);
jsUser.name="sayantan"
jsUser.email="sayan@microsoft.com";
console.log(jsUser);


const jsUser2={
    name:"priyanka",
    age:24
}
jsUser2.greeting=function(){
    console.log("hello js user")
}
console.log(jsUser2.greeting);//[Function (anonymous)]
console.log(jsUser2.greeting());//hello js user undefined

jsUser2.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);
}
console.log(jsUser2.greetingTwo());//hello js user priyanka
