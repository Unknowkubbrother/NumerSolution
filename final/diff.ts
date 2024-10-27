import {evaluate , derivative, or, number } from 'mathjs'


const func : string = "e^x";
const direction : string = "forward";
const order :number= 1;
const oh : string = "h";
const xValue : number = 2;
const h : number = 0.25;


const diffFormula : {
    [direction : string] : {
        [order : number] : {
            [oh : string] : {
                [key : number] : number;
                frac: string;
            }
        }
    }
} = {
    "forward" : {
        1 : {
            "h" : {
                "1" : 1,
                "0" : -1,
                frac : "h" 
            },
            "h^2" : {
                "2" : -1,
                "1" : 4,
                "0" : -3,
                frac: "2h"
            }
        },
        2 : {
            "h" : {
                "2" : 1,
                "1" : -2,
                "0" : 1,
                frac : "h^2"
            },
            "h^2" : {
                "3" : -1,
                "2" : 4,
                "1" : -5,
                "0" : 2,
                frac: "h^2"
            }

        },
        3 : {
            "h" : {
                "3" : 1,
                "2" : -3,
                "1" : 3,
                "0" : -1,
                frac : "h^3"
            },
            "h^2" : {
                "4" : -3,
                "3" : 14,
                "2" : -24,
                "1" : 18,
                "0" : -5,
                frac : "2h^3"
            }
        },
        4 : {
            "h" : {
                "4" : 1,
                "3" : -4,
                "2" : 6,
                "1" : -4,
                "0" : 1,
                frac : "h^4"
            },
            "h^2" :{
                "5" : -2,
                "4" : 11,
                "3" : -24,
                "2" : 26,
                "1" : -14,
                "0" : 3,
                frac: "h^4"
            }
            
        }
    },
    backward: {
		1: {
			h: {
				'0': 1,
				'-1': -1,
				frac: 'h'
			},
			'h^2': {
				'0': 3,
				'-1': -4,
				'-2': 1,
				frac: '2h'
			}
		},
		2: {
			h: {
				'0': 1,
				'-1': -2,
				'-2': 1,
				frac: 'h^2'
			},
			'h^2': {
				'0': 2,
				'-1': -5,
				'-2': 4,
				'-3': -1,
				frac: 'h^2'
			}
		},
		3: {
			h: {
				'0': 1,
				'-1': -3,
				'-2': 3,
				'-3': -1,
				frac: 'h^3'
			},
			'h^2': {
				'0': 5,
				'-1': -18,
				'-2': 24,
				'-3': -14,
				'-4': 3,
				frac: '2h^3'
			}
		},
		4: {
			h: {
				'0': 1,
				'-1': -4,
				'-2': 6,
				'-3': -4,
				'-4': 1,
				frac: 'h^4'
			},
			'h^2': {
				'0': 3,
				'-1': -14,
				'-2': 26,
				'-3': -24,
				'-4': 11,
				'-5': -2,
				frac: 'h^4'
			}
		}
	},
    "central" : {
        1 : {
            "h^2" : {
                "1": 1,
                "-1" : -1,
                frac: "2h"
            },
            "h^4" : {
                "2" : -1,
                "1" : 8,
                "-1" : -8,
                "-2" : 1,
                frac: "12h",
            }
        },
        2:{
            "h^2" : {
                "1" : 1,
                "0" : -2,
                "-1" : 1,
                frac: "h^2"
            },
            "h^4" : {
                "2" : -1,
                "1" : 16,
                "0" : -30,
                "-1" : 16,
                "-2" : -1,
                frac: "12h^2"
            }
        },
        3 : {
            "h^2": {
                "2" : 1,
                "1" : -2,
                "-1" : 2,
                "-2" : -1,
                frac: "2h^3" 
            },
            "h^4" : {
                "3" : -1,
                "2" : 8,
                "1" : -13,
                "-1" : 13,
                "-2" : -8,
                "-3" : 1,
                frac: "8h^3"
            }
        },
        4 : {
            "h^2" : {
                "2" :1,
                "1" :-4,
                "0" :6,
                "-1":-4,
                "-2":1,
                frac: "h^4"
            },
            "h^4" : {
                "3" :-1,
                "2" : 12,
                "1" : -39,
                "0" : 56,
                "-1" : -39,
                "-2" :12,
                "-3" :-1,
                frac: "6h^4"
            }
        }

    }
}

const diff = (func : string , order : number , xValue : number) : number => {
    if (order == 0 ){
        return evaluate(func, {x: xValue});
    }

    const diffequation = derivative(func, 'x').toString();

    return diff(diffequation,order-1,xValue);
}

const fx = (xValue : number, i : number) => {
    const step = xValue + i * h;
    return evaluate(func,{x : step});
}

const formula = diffFormula[direction][order][oh];
const exactResult = diff(func,order,xValue)

let resultNumer = 0;
for(const i in formula){
    if (i == 'frac') {
        continue;
    }

    resultNumer += formula[i] * fx(xValue,Number(i));
}

resultNumer /= evaluate(formula.frac, {h : h});
const error = Math.abs((exactResult - resultNumer) / exactResult) * 100;
console.log(resultNumer)
console.log(error)