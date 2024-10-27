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

let m : {
    [key : number] : number;
} = {}

for(let i=1;i<point.length;i++){
    m[i-1] = (point[i].y - point[i-1].y) / (point[i].x - point[i-1].x);
}

let result;
for(let i=1;i<point.length;i++){
    if (x >= point[i-1].x && point[i].x){
        result = point[i-1].y + m[i-1] * (x-point[i-1].x);
    }
}

console.log(result)

