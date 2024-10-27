import { multiply, inv} from 'mathjs'

const x = [1,2,3];
const point : {
    x : number[]
    y : number
}[] = [
    {x: [1,0,1], y: 4},
    {x: [0,1,3], y: -5},
    {x: [2,4,1], y: -6},
    {x: [3,2,2], y: 0},
    {x: [4,1,5], y: -1},
    {x: [2,3,3], y: -7},
    {x: [1,6,4], y: -20}
]

const K = x.length;

let memory : {
    [key : string] : number
} = {}

const sumXiXj = (i : number , j : number) => {
    const key1 = `${i}-${j}`;
    const key2 = `${j}-${i}`;
    if (memory[key1]) return memory[key1]
    if (memory[key2]) return memory[key2]

    let sum = 0;
    for(let k=0;k<point.length;k++){
        sum += (i != 0 ? point[k].x[i-1] : 1) * (j != 0 ? point[k].x[j-1] : 1)
    }

    memory[key1] = sum;
    memory[key2] = sum;
    return sum;
}

let matrixX : number[][] = []
let arrY : number[] = []

for(let i = 0;i<K+1;i++){
    matrixX[i] = []
    for(let j=0;j<K+1;j++){
        if (i == 0 && j == 0){
            matrixX[i][j] = point.length;
            continue;
        }

        matrixX[i][j] = sumXiXj(i,j);

    }

    arrY[i] = 0;
    for(let j=0;j < point.length ;j++){
        arrY[i] += (i != 0 ? point[j].x[i-1] : 1) * point[j].y;
    }
}

const arrA = multiply(inv(matrixX),arrY);

let result = 0;
for(let i=0;i<arrA.length;i++){
    result+= (i != 0 ? x[i-1] : 1) * arrA[i];
}

console.log(matrixX)
console.log(arrY)
console.log(result)
