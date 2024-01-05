class MaxSubArray {

    static process(num) {

        let maxSum = 0;
        for(let i=0; i<fArray.length; i++) {
            let sum = 0;
            for(let j=i; j<fArray.length; j++) {
                sum += fArray[j];
            }
            maxSum = Math.max(maxSum, sum);
        }

        return maxSum;
    }

}

let fArray = [5, 2, -4, -5, 3, -1, 2, 3, 1];
console.log('Maximum Sum SubArray : ' +MaxSubArray.process(fArray));