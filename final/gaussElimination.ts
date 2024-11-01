import {round} from 'mathjs'
let matrixA : number[][] = [[4,-4,0],[-1,4,-2],[0,-2,4]]
let arrB : number[] = [400,400,400];

for(let i=0;i<matrixA.length;i++){
    for(let j=0;j<matrixA.length;j++){
        if (i>j){
           let tempA = [...matrixA[j]]
           tempA = tempA.map((val)=>{
            return (val / matrixA[j][j]) * matrixA[i][j];
           })
           let tempB = (arrB[j] / matrixA[j][j]) * matrixA[i][j];
           matrixA[i] = matrixA[i].map((val,index)=>{
            return val - tempA[index];
           })
           arrB[i] -= tempB;
        }
    }
}

let arrX = Array(arrB.length).fill(0);
for(let i=matrixA.length-1;i>=0;i--){
    let sum = arrB[i]
    for(let j=matrixA.length-1;j>=0;j--){
        sum -= matrixA[i][j] * arrX[j]
    }
    arrX[i] = sum / matrixA[i][i]
}

console.log(matrixA);
console.log(arrX);

