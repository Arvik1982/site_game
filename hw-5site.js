
function yearTime(monthNumber) {
    
    monthNumber= +prompt(`введите месяц`)
    
    if (0>=monthNumber||monthNumber>=13||isNaN(monthNumber)) {
        alert(`Такого месяца нет`)
    } else {
        switch (monthNumber) {
                case 12:
                case 1:
                case 2: alert(`зима`);
                    break;
                case 3:
                case 4:
                case 5: alert(`весна`);
                    break;
                case 6:
                case 7:
                case 8: alert(`лето`);
                    break;  
                case 9:
                case 10:
                case 11: alert(`осень`);
                    break; 
                }
            }
            
            
    }
    
   