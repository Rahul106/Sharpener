
class Epattern {

    static process(word) {

        let sen = "";
        let numList = [];

        for(let i=0; i<word.length; i++) {
            let ch = word.charAt(i);
            if(ch >= 0 && ch <=9) {
                sen += ch
            } else {
                sen += " ";
            }
        }

        sen = sen.split(' ');
        let j=0;
        for(let i=0; i<sen.length; i++) {
            if(sen[i] != ' ') {
                numList[j] = sen[i];
                j++;
            }
        }

        return numList;
    }

}

let str1 = "abc334v44d"; 
let str2 = "abv345fjjf123tyir45jf6th";

console.log('Result: ' +Epattern.process(str1));
console.log('Result : ' +Epattern.process(str2));