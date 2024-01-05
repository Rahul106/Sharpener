class MissNumber {

    static process(num) {


        let natNum = ((num.length+2) * (num.length + 1))/2;
        console.log(natNum);

        let totalSum = 0;
        for(let i=0; i<num.length; i++) {
            natNum -= num[i];
        }

        return natNum;
    }

}

let fArray =  [9, 6, 4, 2, 3, 5, 7, 1];
console.log('Result: ' +MissNumber.process(fArray));