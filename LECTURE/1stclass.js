// console.log('tomorrow is holiday');
// console.log('My name is Shagun');

// const ab=require('fs');
// ab.writeFileSync('shagu.txt','My section is K22PR')

// var name="Shagun";
// console.log(name);

// var age=21;
// console.log(age);

// var name="Shagun";
// var age=21;

// function displayMyDetails(userName,userAge)
// {
//     return 'My name is '+userName+'\n'+'My age is '+userAge+'';
// }
// console.log(displayMyDetails(name,age));



// function displayMyDetails(userName,userAge)
// {
//     return 'My name is '+name+'\n'+'My age is '+age+'';     //inscope
// }
// console.log(displayMyDetails());

//global scope

// var number=50;

// function Multi()
// {
//     var sum=number*10
//     console.log(sum);

// }
// console.log(Multi());
// Multi()


//Local Scope

// function Local()
// {
//     var number=50
//     console.log(number);

//     var number=57
//     console.log(number);

//     var square=number*number;
//     console.log(square);
// }
// Local()


// var student="Shagun";
// var student='Shagun Sharma';    // In var we can reassign the value
// student='s.sharma';
// console.log(student);

// let student='shagu';
// let student='shagun sharma';    // In let we cannot reassign the value
// console.log(student);


// function scope()
// {
//     var x=1;
//     if(true)
//     {
//         var x=2;
//         console.log(x);   // in var the output is 2 2 in var the value can be reassigned
//     }

//     console.log(x);
// }
// scope()


// function scope()
// {
//     let x=1;
//     if(true)
//     {
//         let x=2;
//         console.log(x);   // in let the output is 2 1 beacuse in let the value cannot be reassigned
//     }

//     console.log(x);
// }
// scope()


// function sum(a,b)
// {
//     return a+b;
// }
// console.log(sum(50,57));


// const shagu=function sum(a,b)
// {
//     return a+b;                //constant to function
// }
// console.log(shagu(50,57));



//Arrow function  :-anomanous function

// const multi=(a,b) =>{
//     return a* b;
// }
// console.log(multi(50,57));

// //doing directly using arrow function

// const divide=(a,b) =>a/b;
// console.log(divide(25,5));


// const value = a=>a*5;
// console.log(value(8));

// const triple=(a,b,c) =>a+b+c;
// console.log(triple(50,57,60));

const three=function mul(a,b,d)
{
    return a+b+d;
}
console.log(three(50,57,60));

function multi(a,b,c)
{
    return a*b*c;
}
console.log(multi(1,1,1));

function mul(a,b)
{
    return a*b;
}
console.log(mul(4,5));

