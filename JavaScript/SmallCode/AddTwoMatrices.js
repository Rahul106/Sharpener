class TwoMatrices {

    static process(mat1, mat2) {

        let row = mat1.length;
        let col = mat1[0].length;
        let arr = new Array(row);

        for(let i=0; i<row; i++) {
            arr[i] = new Array(col);
            for(let j=0; j<col; j++) {
                arr[i][j] = mat1[i][j] + mat2[i][j];
            }
        }

        return arr;
    }

}


let MT1 = [[1,2,5], [3,5,5]];
let MT2 = [[1,5,7], [2,1,3]];

console.log('Result : ' +TwoMatrices.process(MT1, MT2)); 

