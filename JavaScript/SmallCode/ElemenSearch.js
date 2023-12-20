class ESearch {

    static process(xArray, target) {

        let start = 0;
        let mid = 0;
        let end = xArray.length-1;

        while(start <= end) {

            mid = Math.floor((start + end) / 2);

            if(xArray[mid] == target) {
                return mid;
            } else if(xArray[mid] > target) {
                start = mid + 1;
            } else {
                end = mid -1 ;
            }
        }

        return -1;
    }

}

let dArray1 = [9, 5, 3, 2, 1];
let dTarget1 = 5;
console.log('Position : ' +ESearch.process(dArray1, dTarget1));

let dArray2 = [10, 8, 6, 4, 2, 1];
let dTarget2 = 6;
console.log('Position : ' +ESearch.process(dArray2, dTarget2));

let dArray3 = [10,8,6,4,2,1]
let dTarget3 = 11;
console.log('Position : ' +ESearch.process(dArray3, dTarget3));


