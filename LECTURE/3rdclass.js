//destructuring  objects

//  const market={stock : 'SBI HDFC', value: '25k'};  // destructing :-fetching data from array and object
//  const name=market.stock;
//  const value1=market.value;
//  console.log(name ,value1);


//  const person={name: 'SHAGUN', friend: 'SHUBHAM'};
//  const {name}=person;
//  const {friend}=person;               // or const{name,friend }=person;
//  console.log(name,"\n",friend);


//  const cricket={player1: 'Shagun',player2: 'shubham', player3: 'kinshuk'};
//  const{player3}=cricket;
//  console.log(player3);

 //Destructuring using Array:-

//  const friend=['Shubham ','Kinshuk'];
//  const [friend1,friend2]=friend;
//  console.log(friend1,friend2);

//  const ab=['ab1','ab2','ab3'];
//  const[value1,value2,value3]=ab; 
//  console.log(value1,value3);
  
//  const skills=['java','cpp','c','python','html','css'];
//  const[skill1,skill2,skill3]=skills;
//  console.log(skill1,skill2,skill3);

 // setTimeout

//  setTimeout(()=>{
//     console.log('Welcome to the party!!!');
//  },5000)
//  console.log('SHAGUN');
//  console.log('SHARMA');

 // setInterval()

 setInterval(()=>{
    console.log('Going');
 },2000)
 console.log('SHAGUN');
 console.log('SHARMA');


// callback()

// const fetchData=(callback)=>{
//     callback("Coding Started");
// }
// setTimeout(()=>{                             //program started from here
//     fetchData((status)=>
//     {
//         console.log(status);
//     })
// },5000);

// const execute=(callback)=>{
//     callback("welcome");
// }
// setTimeout(()=>
// {
//     execute((coding)=>
//     {
//         console.log(coding);
//     })
// },2000)

// const bank={
//     name:'sbi',
//     value:'25k',
//     type: 'current'
// }
// const name=bank.name;
// const val=bank.value;
// console.log(name,val);

// const obj=(...item)=>{
//     return item;
// }
// console.log(obj(1,2,3,4,5,6,7,8));


