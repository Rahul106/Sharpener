class SmallElement {

    static process(sArray) {

        let fArray = [];

        
        for(let i=0; i<sArray.length; i++) {
            let flag = false;
            for(let j=i+1; j<sArray.length; j++) {
                if(sArray[i] > sArray[j]) {
                    fArray[i] = j;
                    flag = true;
                }
              
            }
            
            if(flag == false) {
                fArray[i] = -1;
            }
        }

        return fArray;
    }

}

const fArray1 = [3, 1, 5, 2, 4];
console.log('Result : ' +SmallElement.process(fArray1));

const fArray2 = [1, 2, 3, 4, 0];
console.log('Result : ' +SmallElement.process(fArray2));