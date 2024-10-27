import {round} from 'mathjs'
const matrixA : number[][] = [[5,2,0,0],[2,5,2,0],[0,2,5,2],[0,0,2,5]]
const arrB : number[] = [12,17,14,7]
const intitalX : number[] = [0,0,0,0]
let arrX : number[] = intitalX.map((x) => x)
let arrXold : number[] = Array(intitalX.length).fill(0)
const errorFactor : number = 0.000001

let iteration : {
    [key : number] :{
        iter: number,
        x : number[],
        error : number[]
    }
} = {}

const calculateError = (newValue: number, oldValue: number) => {
    return Math.abs((newValue - oldValue));
};

const checkError = (arrX: number[], arrXOld: number[]) => {
    for(let i = 0; i < arrX.length; i++){
        if (calculateError(arrX[i],arrXOld[i]) > errorFactor){
            return true;
        }
    }
    return false;
};

let iter = 0;

do{
    iter++
    arrXold = arrX.map((x) => x)
    for(let i=0;i<matrixA.length;i++){
        let sum = arrB[i]
        for(let j=0;j<matrixA[i].length;j++){
            if (i != j){
                sum -= matrixA[i][j] * arrX[j]
            }
        }
        arrX[i] = sum / matrixA[i][i]
    }

    iteration[iter] = {
        iter : iter,
        x : arrX.map((x) => x),
        error: arrX.map((x,i) => calculateError(x,arrXold[i]))
    }

}while(checkError(arrX,arrXold))

console.log(iteration)

