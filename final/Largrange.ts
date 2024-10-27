const x : number = 4.5
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

let L : {
    [key : number] : number
} = {}

for(let i=0;i<point.length;i++){
    let multi = 1;
    for(let j=0;j<point.length;j++){
        if (i != j){
            multi *= (point[j].x - x) / (point[j].x - point[i].x)
        }
    }
    L[i] = multi
}

let result = 0;

for(let i=0;i<point.length;i++){
    result += point[i].y * L[i];
}

console.log(L)
console.log(result)