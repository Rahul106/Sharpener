class Stone {

    static getCount(jewels, stone) {

        let count = 0;
        for(let x of stone) {
            if(jewels.includes(x)) {
                count++;    
            }
        }

        return count;
    }

}

let jewels1 = 'aA';
let stones1 = 'aAAbbbb';

let jewels2 = 'z';
let stones2 = 'ZZ';

console.log('Result : ' +Stone.getCount(jewels1, stones1));
console.log('Result : ' +Stone.getCount(jewels2, stones2));