class ArrayProcess {

    static process(arr) {

        let result = [];
       
        for(let i=0; i<arr.length; i++) {
            let flag = false;
            for(let j=i+1; j<arr.length; j++) {
                if(arr[i] > arr[j]) {
                    result[i] = j;
                    flag = true;
                }
            }

            if(!flag) {
                result[i] = -1;
            }
        }

        return result;
    }

}

let fArray = [3, 1, 5, 2, 4];
console.log('Result : ' +ArrayProcess.process(fArray));

let sArray = [1, 2, 3, 4, 0];
console.log('Result : ' +ArrayProcess.process(sArray));