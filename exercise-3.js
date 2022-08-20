const person1 = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  address: {
    state: 'Italy',
    city: 'Rome',
    street: 'Via Romano, 12'
  }
};


//let person2 = JSON.parse(JSON.stringify(person1));


const pippo =  JSON.stringify(person1);
let person2 = JSON.parse(pippo);
person2.address.city = 'Milan';

console.log(person1);
console.log(person2);