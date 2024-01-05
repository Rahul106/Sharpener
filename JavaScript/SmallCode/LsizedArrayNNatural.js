
class LArray {

    static process(N, L, S) {

        let minSum = findSum(L);
        console.log(minSum);

        let maxSum = findSum(N) - findSum(N-L);
        console.log(maxSum);

        if(S < minSum || S > maxSum) {
            return 'NO';
        } else {
            return 'YES';
        }

    }

    

}

function findSum(n) {

    return n*(n+1)/2;
}

let N1=5;
let L1=3;
let S1=11;
console.log('Result : ' +LArray.process(N1, L1, S1));

let N2=5;
let L2=3;
let S2=5;
console.log('Result : ' +LArray.process(N2, L2, S2));
