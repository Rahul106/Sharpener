
class Runner {

    static add(marks) {

        let max = 0;
        for(let i=0; i<marks.length; i++) {
            let maxMarks = 0; 
            for(let j=0; j<marks[i].length; j++) {
                maxMarks += marks[i][j];
            }
            if(max < maxMarks) {
                max = maxMarks
            }
        }



        return max;
    }


}

marks1 = [[1,2,3],[3,2,1]];
marks2 = [[1,5],[7,3],[3,5]];

const rArray = Runner.add(marks2);
console.log('Result : ' +rArray);
