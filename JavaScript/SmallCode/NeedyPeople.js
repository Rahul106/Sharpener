function process(tMoney, spend=1, needy=0) {
    
    if(tMoney < spend*spend) {
        return needy;
    }

    return process(tMoney - spend*spend, spend+1, needy+1);
}

let num1 = 14;
let num2 = 35;

console.log('Result : ' +process(num1));
console.log('Result : ' +process(num2));