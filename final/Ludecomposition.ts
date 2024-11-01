let matrixA : number[][] = [[-2,3,1],[3,4,-5],[1,-2,1]]
let arrB : number[] = [9,0,-4];

const createMatrix = (size : number) =>{
    let matrix = new Array(size);
    for(let i=0;i<size;i++){
        matrix[i] = new Array(size);
    }
    return matrix;
}

let matrixL : number[][] = createMatrix(matrixA.length)
let matrixU : number[][] = createMatrix(matrixA.length)

for (let i = 0; i < matrixA.length; i++) {
    for (let j = 0; j < matrixA.length; j++) {
        matrixL[i][j] = 0;
        matrixU[i][j] = i == j ? 1 : 0;
    }
}

for(let i=0;i<matrixA.length;i++){
    for(let j=0;j<matrixA.length;j++){
        let sum = matrixA[i][j]
        for(let k=0;k<matrixA.length;k++){
            sum -= matrixL[i][k] * matrixU[k][j]
        }
        
        if (i >= j){
            matrixL[i][j] = sum / matrixU[i][i];
        }else{
            matrixU[i][j] = sum / matrixL[i][i];
        }
    }
}

let arrY = Array(arrB.length).fill(0);

for(let i=0;i<matrixA.length;i++){
    let sum = arrB[i];
    for(let j=0;j<i;j++){
        sum -= matrixL[i][j] * arrY[j]
    }
    arrY[i] = sum / matrixL[i][i];
}

let arrX = Array(arrY.length).fill(0);
for(let i=matrixA.length-1;i>=0;i--){
    let sum = arrY[i];
    for(let j=matrixA.length-1;j>i;j--){
        sum -= matrixU[i][j] * arrX[j]
    }
    arrX[i] = sum / matrixU[i][i];
}


console.log(matrixL)
console.log(matrixU)
console.log(arrY)
console.log(arrX)
