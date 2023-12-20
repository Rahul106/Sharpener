class RString {

    static extractNumbers(str) {
        // Use a regular expression to find all sequences of digits
        let numbers = str.match(/\d+/g);
    
        // Convert the array of strings to an array of numbers
        numbers = numbers ? numbers.map(Number) : [];
    
        return numbers;
    }

    static process(s1, s2) {

        let i=0;
        let j=0;
        
        console.log('-----' +RString.extractNumbers(s2));

        while(i<s1.length && j<s2.length) {

            if(s1.charAt(i) == s2.charAt(j)) {
                i++;
                j++;
            } else if((s2.charAt(j) > '0') && (s2.charAt(j) < '9')) {
                i+=parseInt(s2[j]);
                j++;
            } else {
                return false;
            }

        }

        return (j===s2.length) && (i===s1.length);
    }

}

let str1 = 'SHARPENER';
let str2 = 'S3P3R';
console.log('Result --: ' +RString.process(str1, str2));

let str3 = 'DFS';
let str4 = 'D1S';
console.log('Result= : ' +RString.process(str3, str4));

let str5 = 'DFS';
let str6 = 'D1X'
console.log('Results : ' +RString.process(str5, str6));
 
let str7 = 'SXXXXXXXARPENER';
let str8 = 'S10P3R';
console.log('Result : ' +RString.process(str7, str8));