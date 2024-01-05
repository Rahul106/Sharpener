class ARunner {

    static getCount(acc) {

        let count = '';

        for(let i=0; i<acc.length; i++) {
            for(let j=0; j<acc[i].length; j++) {

                if(acc[i][j] === 5) {
                    count++;
                }

            }   
        }

        return count;
    }   

}

let accounts1 = [[1, 2, 5],[3, 5, 5]];
let accounts2 = [[1, 2, 5],[3, 5, 5, 5],[5, 1],[6, 7, 5, 4]];

let numCount1 = ARunner.getCount(accounts1);
console.log(numCount1);

let numCount2 = ARunner.getCount(accounts2);
console.log(numCount2);