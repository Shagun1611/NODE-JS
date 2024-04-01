const person={
        name: 'Shagun',
        age: 21,
        msg:function(){
            console.log('My name is '+this.name);
        }
    }
    person.msg();