class  MaxAlpha {

    static getCount(sentences) {

        let maxCount = 0;
        let posIndex = 0;
        for(let i=0; i<sentences.length; i++) {

            let count = 0;
            let word = sentences[i];
            
            for(let j=0; j<word.length; j++) {    
                let ch = word.charAt(j);
                if(ch == 'a') {
                    count++;
                }
            }
            
            if(maxCount < count) {
                maxCount = count;
                posIndex = i;
            }
        }

        return posIndex;
    }

}

const sentences1 = ["ananya loves sharpener", "apple is a very healthy fruit", "this is great thanks very much"];
let count1 = MaxAlpha.getCount(sentences1);
console.log('Count : ' +count1);

const sentences2 = ["please wait", "money in my bank", "i have a lots of cars"];
let count2 = MaxAlpha.getCount(sentences2);
console.log('Count : ' +count2);



    

    
