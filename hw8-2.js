// Задание 2



      function isPositive (number) {
        if (number > 0) {
            return true;
        } else { 
            return false;
        }
        
            
          }
          
          
          function filter(array, ruleFunction) {
            let result = [];
          
            for (let i = 0; i < array.length; i++) {
              
        if (ruleFunction(array[i])=== true){
              result.push(array[i]);}
            }
          
            return result;
          }
          
          console.log(filter([3, -4, 1, 9], isPositive));