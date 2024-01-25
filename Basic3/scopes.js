function one(){
    const name='sayan'
        function two(){
            const website='youtube'
            console.log(name+website);
        }
        two()
        // console.log(website);//give error
        console.log(name);//sayan
}

one()
// console.log(name);//give error

if (true) {
    const num=10;
    if (num===10) {
        const num1=50;
        console.log(num1);//50
        console.log(num+5) //15
    }
    // console.log(num1);//error
    console.log(num);//10
    
}
// console.log(num);//error

//HOISTING
normal() //we can access the normal function before its declaration.
function normal(){
    let x=100;
    console.log(x);
}
 
//  hold()  //give error.Hoisting is not applicable for expression.
const hold=function(){
    let y=60;
    console.log(y);
}
hold();//60
    
