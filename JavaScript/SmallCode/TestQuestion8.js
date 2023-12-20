class StringCalculator {

    static calculate(word) {

        let senArr = word.split(' ');
        let num = 0

        let maxCount = Number.MIN_SAFE_INTEGER;
        let minCount = Number.MAX_SAFE_INTEGER;

        while(num < senArr.length) {

            
            if(maxCount < senArr[num].length) {
                maxCount = senArr[num].length;
            }

            if(minCount > senArr[num].length) {
                minCount = senArr[num].length;
            }

            num++;
        }

        return maxCount+minCount;
    }

}

let word1 = "The quick brown fox jumps over the lazy dog";
let word2 = "The cat in the hat";

console.log('Total : ' +StringCalculator.calculate(word1));
console.log('Total : ' +StringCalculator.calculate(word2));