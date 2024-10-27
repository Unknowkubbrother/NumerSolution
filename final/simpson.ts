import {evaluate} from 'mathjs'
const func = "x^7+2x^3-1"
const a = -1;
const b = 2;

const h = (b-a)/2;

const fx = (num : number) =>{
    return evaluate(func, {x : num});
}

const result = (h/3)*(fx(a)+4*fx(a+h)+fx(b))

console.log(result)