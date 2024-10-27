import { multiply,inv } from "mathjs";

const x = 65
const point : {
    x: number,
    y: number
}[] = [
    {x: 10, y: 5},
    {x : 15, y : 9},
    {x : 20, y : 15},
    {x : 30, y : 18},
    {x: 40, y : 22},
    {x : 50, y : 30},
    {x : 60, y : 35},
    {x : 70, y : 38},
    {x : 80 , y : 43}
]
const M = 1;

let matrixX : number[][] = []

let arrY  : number[] = []

let result = 0;

let memory : {
    [key : number] : number;
} = {}

const getSumPow = (pow : number) => {
    if (memory[pow]){
        console.log("mmm");
        return memory[pow];
    }
    let sum = 0;
    for(let i=0;i<point.length;i++){
        sum += Math.pow(point[i].x,pow);
    }
    memory[pow] = sum;
    return sum;
}


for(let i=0;i<M+1;i++){
    matrixX[i] = []
    for(let j=0;j<M+1;j++){
        if (i == 0 && j == 0){
            matrixX[i][j] = point.length
            continue;
        }

        matrixX[i][j] = getSumPow(i+j);
    }

    arrY[i] = 0
    for(let j=0;j<point.length;j++){
        arrY[i] += point[j].y * Math.pow(point[j].x,i);
    }

}

const arrA = multiply(inv(matrixX),arrY);

for(let i=0;i<arrA.length;i++){
    result += arrA[i] * Math.pow(x,i);
}

console.log(matrixX);
console.log(arrY);
console.log(arrA)
console.log(result)
