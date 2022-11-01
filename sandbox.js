var character;
var age;
var isLoggedIn;
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
var numbers = [10, 20, 30, 40];
numbers.push(7);
var mixed = ['ken', 4, 'chun-li', 8, 9];
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
