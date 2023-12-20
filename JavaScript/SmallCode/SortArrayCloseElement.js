class sortArray {

    static process(nums, ele)  {

        for(let j=0; j<nums.length; j++) {
            let val1;
            let val2;
            for(let i=0; i<nums.length-1; i++) {

            val1 = Math.abs(ele - nums[i]);
            val2 = Math.abs(ele - nums[i+1]);

            if(val1 > val2) {
                let temp = nums[i];
                nums[i] = nums[i+1];
                nums[i+1] = temp;
            }

        }
    }
        return nums;
    }

}

let fArray = [1,3,5,7,9];
const element = 5;
let sArray = [7, 8 ,10 ,1, 4, 9];

console.log('Result : ' +sortArray.process(fArray, element));
console.log('Result : ' +sortArray.process(sArray, element));