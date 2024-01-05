class ARunner {

    static process(arr, target) {

        let firstOccur = -1;
        let lastOccur = -1;
        let num = [];

        for(let i=0; i<arr.length; i++) {
            
            if(arr[i] === target) {
                num[1] = i
                if(firstOccur == -1) {
                    firstOccur = num[0];
                    num[0] = i;
                }
            }

        }

        return num;
    }

}

let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let target = 5;
console.log('Result : ' +ARunner.process(arr, target));
