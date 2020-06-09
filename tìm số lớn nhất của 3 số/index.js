

var number1=prompt("so thu nhat",1);
var number2=prompt("so thu 2",2);
var number3=prompt("so thu 3",3);
number1=parseInt(number1);
number2=parseInt(number2);
number3=parseInt(number3);
// max=min=number1;
// if(number2>max){
//     max=number2;
// }
// if (number3>max) {
//     max=number3;
// }
// alert("max:"+max);
// if(number2<min){
//     min=number2;
// }
// if(number3<min){
//     min=number3;
// }
// alert("min:"+min);
// cách khác
var max=Math.max(number1,number2,number3);
alert(max);
var min=Math.min(number1,number2,number3);
alert(min);