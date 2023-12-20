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