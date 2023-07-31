import calc, {add, subtract as sub} from './calculator.js';

const calcResult = calc.add(1,2);
const addResult = add(10, 1);
const subResult = sub(addResult, 1);

console.log(calcResult);
console.log(addResult);
console.log(subResult);
