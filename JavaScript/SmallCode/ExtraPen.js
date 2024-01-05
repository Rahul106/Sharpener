class ExtraPen {

    static minimumWorkForPens(pensArray) {
        
        let workRequired = 0;
        let extraPens = 0;
      
        pensArray.forEach((pens) => {
          
            if (pens > 0) {
            // Student needs pens
            if (extraPens >= pens) {
              // If there are enough extra pens, use them
              extraPens -= pens;
            } else {
              // If there are not enough extra pens, additional work is needed
              workRequired += pens - extraPens;
              extraPens = 0;
            }
          } else {
            // Student has extra pens
            extraPens += Math.abs(pens);
          }
        });
      
        return workRequired;
      }

}

 // Example usage
 const pensArray = [5, -4, 1, -3, 1];
 const minWork = ExtraPen.minimumWorkForPens(pensArray);
 console.log(`Minimum work required: ${minWork} units`);