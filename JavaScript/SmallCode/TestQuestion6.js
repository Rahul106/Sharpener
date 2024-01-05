class BinarySearch {

    static findMinElement(arr) {

        let start = 0;
        let mid = 0;
        let end = arr.length - 1;

        while(start < end) {

            mid = Math.floor((start + end)/2);

            if(arr[mid] > arr[end]) {
                start = mid + 1;
            } else {
                end = mid;
            }

        }

        return arr[end];
    }
      
}

let fArray = [4, 5, 6, 7, 0, 2];
let sArray = [2, 3, 4, 10, 1, 2];

console.log('Minimum Element : ' +BinarySearch.findMinElement(fArray));
console.log('Minimum Element : ' +BinarySearch.findMinElement(sArray));


let num1 = [5, 6, 1, 2, 3, 4];
console.log('Minimum Element : ' +BinarySearch.findMinElement(num1));

let num2 = [1, 2, 3, 4];
console.log('Minimum Element : ' +BinarySearch.findMinElement(num2));

let num3 = [2, 1];
console.log('Minimum Element : ' +BinarySearch.findMinElement(num3));

let num4 = [7, 8, 9, 1, 2, 3, 4, 5, 6];//s0//e8//m4//v2//e3//s0//m1//s2//e3//m2//s3//e3
console.log('Minimum Element : ' +BinarySearch.findMinElement(num4));
