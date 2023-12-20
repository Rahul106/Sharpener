
class StarPattern {

        

    static getPattern() {
       
        let str = '';
        for(let i=1; i<=5; i++) {

            for(let m=5; m>=i; m--) {
                str += '*';
            }

            for(let n=1; n<i; n++) {
                str += ' ';
            }

            for(let p=1; p<i; p++) {
                str += ' ';
            }

            for(let q=5; q>=i; q--) {
                str += '*';
            }
            str += "\n";
           
        }
        
        console.log(str);
    }

}

StarPattern.getPattern();