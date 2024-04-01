console.log('My name is Shagun Sharma');

const { log } = require('console');
const shag=require('fs');
shag.writeFileSync('shagu1.txt','I AM THE BEST')

var name="Shagun";
var name="Sharma";
console.log(name);

var name ="Shagun";
var age=21;

function details(userName,userAge){
    return 'my name '+userName+'\n'+'my age '+userAge;
}
console.log(details(name,age));

function scope(userName,userAge)
{
    var value=10;
    if(true)
    {
        console.log(value);
        value =100;
    }
    console.log(value);
    console.log(userName);
    console.log(userAge);
}
scope(name,age)

const bc=function sum(a,b,c,d){
    return a+b+c+d;
}
console.log(bc(10,10,101,10));

//Arrow function

const multi=(a,b,c,d)=>a*b*c*d;
console.log(multi(0,34,54,57));