class ResultantArray {

    static process(arr1, arr2) {

      let num = new Array(arr1.length);

        for(let i=0; i<arr1.length; i++) {
           num[i] = new Array(arr1.length);
            for(let j=0; j<arr1[i].length; j++) {
                num[i][j] = arr1[i][j] + arr2[i][j];
            }
        }

        return num;
    }

}

let num1 = [[1, 2, 3], [3, 5, 5]]
let num2 = [[1, 5, 7], [2, 1, 3]];

const rArray = ResultantArray.process(num1, num2);
console.log('Result : ' +rArray);