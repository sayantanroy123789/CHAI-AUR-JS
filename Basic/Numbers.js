const nums=300;
// console.log(nums);
const balance=new Number(320);
console.log(balance);//[Number: 320]
console.log( balance.toString().length);//3
console.log(balance.toFixed(2)); //320.00
const otherNum=23.8942;
console.log(otherNum.toPrecision(3));//23.9

const last=1000000;
console.log(last.toLocaleString());//10,00,000