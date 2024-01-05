class MaximumStudent {

    static process(num) {

        let maxLimit = Math.floor((num.length/2));
        let intMap = new Map();
        
        for(let i=0; i<num.length; i++) {
            intMap.set(num[i], i);
        }

        console.log(intMap);

        for(let [key, value] of intMap) {
            if(value > 1) {
                return key;
            }
        }
    }

}

let fArray = [3, 2, 3];
console.log('Result : ' +MaximumStudent.process(fArray));