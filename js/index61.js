var weekdayNumber =5;
var weekName =null;
switch(weekdayNumber){
    case 1:
        weekName='Monday';
    break;
  case 2:
    weekName='Thrsday';
    break;
  case 3:
    weekName='Wednesday';
    break;
  case 4:
    weekName='Tuesday';
    break;
    case 5:
    weekName='Friday';
    break;
    case 6:
    weekName='Saturday';
    break;
    case 7:
    weekName='Sunday';
    break;
  default:
    weekName='Out of range .';
}

console.log(weekName)
