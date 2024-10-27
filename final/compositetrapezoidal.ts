import {evaluate} from 'mathjs'
const func = "x^7+2x^3-1"
const a = -1;
const b = 2;
const n = 4;

const fx = (num : number) : number =>{
    return evaluate(func, {x: num});
}

const h = (b-a)/n;

let sum = 0;
for(let i=1;i<n;i++){
    sum += fx(a+(i*h));
}
const result = (h/2)*(fx(a)+2*(sum)+fx(b))
console.log(result);