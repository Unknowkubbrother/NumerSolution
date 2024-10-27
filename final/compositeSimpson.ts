import {evaluate} from 'mathjs'
const func = "x^7+2x^3-1"
const a = -1;
const b = 2;
const n = 4;
const h = (b-a)/(2*n);

const fx = (num : number) =>{
    return evaluate(func, {x : num});
}

let sum1 = 0;
let sum2 = 0;
for(let i=1;i<2*n;i++){
    if (i % 2 != 0){
        sum1 += fx(a+i*h);
    }
    else{
        sum2 += fx(a+i*h);
    }
}

const result = (h/3)*(fx(a)+4*sum1+2*sum2+fx(b))

console.log(result)