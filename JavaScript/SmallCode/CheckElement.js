class Celement {

    static process(num1, num2) {

        for(let i=0; i<num1.length-1; i++) {
            for(let j=i+1; j<num1.length; j++) {
                if(num1[i] > num1[j]) {
                    let temp = num1[i];
                    num1[i] = num1[j];
                    num1[j] = temp;
                }
            }
        }

        console.log(num1);
        num2.sort();
        console.log(num2);

        for(let i=0; i<num1.length; i++) {
            if(num1[i] > num2[i]) {
                return false;
            }
        }

        return true;
    }

}

let num1 = [7, 5, 3, 2];
let num2 = [5, 4, 8, 7];

console.log('Result : ' +Celement.process(num1, num2))