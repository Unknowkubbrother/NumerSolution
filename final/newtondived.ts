import {round} from 'mathjs'
const x = 4.5
const point : {
    x: number,
    y: number
}[] = [
    {x: 2, y: 9.5},
    {x : 4, y : 8},
    {x : 6, y : 10.5},
    {x : 8, y : 39.5},
    {x: 10, y : 72.5},
]

let c = point.map((item) => item.y)

for(let i=1;i<point.length;i++){
    for(let j=point.length-1;j>=i;j--){
        c[j] = (c[j] - c[j-1]) / (point[j].x - point[j-i].x)
    }
}

let result = 0
for(let i=0;i<point.length;i++){
    let sum = c[i];
    for(let j=0;j<i;j++){
        sum *= (x-point[j].x);
    }
    result+= sum;
}

console.log(c)
console.log(result)