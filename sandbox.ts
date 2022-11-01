let character: string;
let age: number;
let isLoggedIn: boolean;



const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
  console.log(input);
})


const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5));

let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');

let numbers = [10, 20, 30, 40];

numbers.push(7);

let mixed = ['ken', 4, 'chun-li', 8, 9];


let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

