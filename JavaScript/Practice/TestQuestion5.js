class Srunner {

    static process(word) {

        let result = '';
        for(let i=0; i<word.length; i++) {

            let ch = word[i];

            if(ch >= 'A' && ch <= 'Z') {
                
                if(i != 0) {
                    result += ' ';
                }
                result += ch.toLowerCase();
                
            } else {
                result += ch;
            }

        }

        return result;
    }

}

let s1 = "BruceWayneIsBatman";
let s2 = "You";
let s3 = "RahulRajkumarGupta";

console.log('Result : ' +Srunner.process(s1));
console.log('Result : ' +Srunner.process(s2));
console.log('Result : ' +Srunner.process(s3));