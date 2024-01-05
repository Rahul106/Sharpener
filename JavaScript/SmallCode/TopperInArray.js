class TopArray {

    static process(num) {

        let rArray = [];
       
        for(let i=0; i<num.length; i++) {
            let flag = true;
            for(let j=i+1; j<num.length; j++) {
                if(num[i] < num[j]) {
                   flag = false;
                   break;            
                }
            }
            if(flag == true) {
                rArray.push(num[i]);
            }
        }
        
    return rArray;
    }

}

let num1 = [16, 17, 4, 25, 5, 2];
let num2 = [16, 14, 4, 3, 5, 2];
let num3 = [16, 17, 4, 30, 5, 219];
let num4 = [16, 10, 25, 0, 5, 15];

console.log('Result : ' +TopArray.process(num1));
console.log('Result : ' +TopArray.process(num2));
console.log('Result : ' +TopArray.process(num3));
console.log('Result : ' +TopArray.process(num4));