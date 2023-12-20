class Indices {

    static findPairsWithDifference(nums, target) {
        
        let map = new Map();
        let fArray = [];

        for(let i=0; i<nums.length; i++) {
            let elem = nums[i];
            
            if(map.has(elem + target)) {
                fArray.push([map.get(elem + target), i]);
            }

            if(map.has(elem - target)) {
                fArray.push([map.get(elem - target), i]);
            }

            map.set(elem, i);
        }

       return fArray;
    }

}

let nums = [9, 5, 1, 11, 14];
let target = 2;
let result = Indices.findPairsWithDifference(nums, target);

console.log(`Index pairs with absolute difference ${target}:`, result);

let nums1 = [10, 19, 11, 1, 6];
let target1 = 13;
let result1 = Indices.findPairsWithDifference(nums1, target1);
console.log(`Index pairs with absolute difference ${target1}:`, result1);