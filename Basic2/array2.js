const marvel=['thor','iron man','captain america'];
const dc=['batman','superman','wonder woman']
marvel.push(dc);
console.log(marvel);
console.log(marvel[3][2]);//wonder woman
let newarray=marvel.concat(dc);
console.log(newarray);

//spread operator
const allhero=[...marvel,...dc];
console.log(allhero);

const anotherarray=[1,2,3,[8,15,74],50,7,[40,90,[57,87,[100,47],85],60]];
const realarray=anotherarray.flat(Infinity);
console.log(realarray);


console.log(Array.isArray("sayan"));//false
console.log(Array.from("sayan"));//[ 's', 'a', 'y', 'a', 'n' ]
console.log(Array.from({name:"sayan",marks:55}));//[] return a null array.
let score1=80;
let score2=74;
let score3=65;
console.log(Array.of(score1,score2,score3));//[ 80, 74, 65 ]
