class CVowels {

    static count(word) {

        const vowels = 'aeiouAEIOU';

        let count = 0;
        for(let ch of word) {
            if(vowels.includes(ch)) {
                count++;
            }
        }

        return count;
    }

}

let str1 = 'HELLO WORLD';
let str2 = 'a1e@i2o!u';

console.log('Result : ' +CVowels.count(str1));
console.log('Result : ' +CVowels.count(str2));