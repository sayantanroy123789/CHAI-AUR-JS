const name="sayan";
const count=50;
// console.log(name+count+" value");
console.log(`my name is ${name} and my repocount is ${count}`);
const game=new String('IGI');
console.log(game[0]);
console.log(game.__proto__);
console.log(game.length);
console.log(game.toLowerCase());
console.log(game.charAt(2));
console.log(game.indexOf('G'));


const myName=new String("Sayantan Roy");
const newString=myName.substring(0,5);//negative value is not allow
console.log(newString);
const anotherString=myName.slice(1,2);//negative value is allow
console.log(anotherString);
const test="   SAYAN    ";
console.log(test);
console.log(test.trim());
const url="https//www.sayantan20%roy"
console.log(url.replace("20%","_"));
console.log(url.includes("roy"));


const last=new String("sayan-tan-roy");//devide into array
console.log(last.split("-"));