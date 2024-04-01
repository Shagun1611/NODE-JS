//object :--  we use curly  brackets

// const basket={
//     name:'Shagun',   //property field
//     age:'21',

// }
// // console.log(basket);
// console.log(basket["name"]);

//function inside the object

// const person={
//     name: 'Shagun',
//     age: 21,
//     msg:function(){
//         console.log('My name is '+this.name);
//     }
// }
// person.msg();

// const basket={
//     name:"Apple",
//     color:"Red",

//     taste:function(){
//         console.log('The color of apple is '+this.color);
//     }
// }
// // basket.taste();
// console.log(basket.taste());

//without using function keyword

// const student={
//     name:"Shubham",
//     rollno:66,
//     age:100,

//     represent(){
//         console.log('My friend name is '+this.name);
//     }
// }
// student.represent();


// Array:- we use square brackets

// const hobbies=['footbal','cricket','kabaddi']//forof

// for (const games of hobbies) {
//     console.log(games);
// }

// const friends=['Atul','Sahil','Rohit','Shubham'];

// for (const best of friends) {
//     console.log(best);
    
// }

//without forof method

// const games=['Tennis','Cricket','Football'];
// console.log(games.map(games=>'play: '+games));

// for (const play of games) {
//     console.log(play);
    
// }

//push and pop:-

// const food=['idly','dosa'];
// food.push('sambar');
// console.log(food);

// const food=['choco','pastery','coffee','biscuits','shubham'];
// food.pop('shubham');
// console.log(food);

// const lpu={
//     dep:'cse',
// }
// lpu.dep='it';
// console.log(lpu);

// const item1=['samosa','bread','choco'];
// const item2=item1;
// console.log(item2);
// item2.push('Butter');
// console.log(item1);
// console.log(item2);

// const eat1=['sweets','ladu','pie'];
// let eat2=['choco'];
// eat2=eat1.concat(eat2);
// console.log(eat2);  
// for (const sweet of eat1) {   //forof :- if we wan to print in iteration step wise step we use for of method  
//     console.log(sweet);
    
// }

//using of slice

// const item1=['idly','dosa']; //use of slice:- if we dont use slice 'sambar' will we printed in both (item 1,intme 2) so to avoid it we use slice so that 'sambar get printed in item 2 only.
// const item2=item1.slice();
// item2.push('sambar');
// console.log(item1);
// console.log(item2);


//spread operator:---

// const item1=['idly','dosa']; 
// const item2=[...item1]
// item1.push('sambar');
// console.log(item1);
// console.log(item2);

// const item1=['idly','dosa']; 
// const item2=[...item1]   //with spread ooperator
// item2.push('sambar');
// console.log(item1);
// console.log(item2);

// const item1=['idly','dosa']; 
// const item2=[item1]       //without spread
// item1.push('sambar');
// console.log(item1);
// console.log(item2);

// const item1=['idly','dosa']; 
// const item2=[...item1]
// const item3=[...item1]
// item2.push('sambar');
// item3.push('sambar');
// console.log(item1);
// console.log(item2);
// console.log(item3);

// const item1=['idly','dosa']; 
// item1.push('sambar');
// const item2=[...item1]
// console.log(item1);
// console.log(item2);


// spread operator on object

// const student1={

//     name:'Shagun'
// };
// const student2={...student1}
// console.log(student1,student2);    //it is used to copy  the values of the elements in the another. clonning of arrays,merging of objects .


// const student1={

//     name:'Shagun'
// };
// const student2={...student1,age:'21'}
// console.log(student1,student2);

//***when  we are using ... in object(curly brackets{}) and array square brackets([]) its spread operator
//**  when we use using ... in open brackets () it is call  rest operator

//rest operator

// const items=(item1,item2,item3)=>{
//     return [item1,item2,item3];

// }
// console.log(items(1,2,3));

const items=(...item1)=>{
    return item1;
}
console.log(items(1,2,3,4,5,6));  //it is used to push user supplied value into an array

// const mine={
//     name:'shagun',
//     age:'21',
//     best ()
//     {
//         console.log("i am the best in the world")
//     }
// };
// console.log(mine.best());







