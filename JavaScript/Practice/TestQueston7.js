class TargetRunner {

    static process(num, target) {

        let start = 0;
        let mid = 0;
        let end = num.length - 1;

        while(start <= end) {

            mid = Math.floor((start + end)/2);

            if(num[mid] === target) {
                return mid;
            } else if(num[mid] > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }

        }

        return -1;
    }

}

const arr1 = [9, 5, 3, 2, 1];
const target1 = 5;
console.log('Result : ' +TargetRunner.process(arr1, target1));

const arr2 = [10, 8, 6, 4, 2, 1];
const target2 = 6;
console.log('Result : ' +TargetRunner.process(arr2, target2));