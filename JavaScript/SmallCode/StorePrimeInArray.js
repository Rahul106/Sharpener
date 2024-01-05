class StorePrime {

    static process(num) {

        let flag = true;    
        if(num == 0 || num == 1) {
            flag = false;
            return flag;
        } 
        
        if(num == 2) {
            flag = true;
            return flag;
        } 
        
        
        for(let i=2; i<=num/2; i++) {
            if(num%i == 0) {
                flag = false;
                return flag;
            } else {
                flag = true;
            }   
        }

        return flag;
    }

}

//let element = 3;
//console.log( +element+ ' is Prime Number ' +StorePrime.process(element));

let i=0;
let pArray = [];
let flag = false;

for(let num=0; num<=100; num++) {
    flag = StorePrime.process(num);
    if(flag) {
        pArray[i++] = num;
        if(pArray.length == 10) {
            break;
        }
    }
}

console.log(pArray);
