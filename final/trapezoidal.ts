import {evaluate} from 'mathjs'
const func = "x^7+2x^3-1"
const a = -1;
const b = 2;

const fx = (num : number) : number =>{
    return evaluate(func, {x: num});
}

const h = b-a
const result =  (h/2)*(fx(a) + fx(b));

console.log(result);