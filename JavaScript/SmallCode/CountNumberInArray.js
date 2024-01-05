class Runner {

    static process(acc) {

        let count = 0;
        acc.forEach(element => {
            element.forEach(x => {
                if(x == 5) {
                    count++;
                }
            });
        });

        return count;
    }

}

let acc1= [[1, 2, 5], [3, 5, 5]];
console.log('Result : ' +Runner.process(acc1));

let acc2 = [[1, 2, 5], [3, 5, 5, 5], [5, 1], [6, 7, 5, 4]];
console.log('Result : ' +Runner.process(acc2));