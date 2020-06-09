// var student1 = prompt("student1", "");
// var student2 = prompt("student2", "");
// var student3 = prompt("student3", "");
// var student4 = prompt("student4", "");
// var student5 = prompt("student5", "");
// student1 = parseFloat(student1);
// student2 = parseFloat(student2);
// student3 = parseFloat(student3);
// student4 = parseFloat(student4);
// student5 = parseFloat(student5);
// var array_Student = [];
// array_Student.push(student1);
// array_Student.push(student2);
// array_Student.push(student3);
// array_Student.push(student4);
// array_Student.push(student5);

var array_Student = [];
var student = prompt("nhap so sinh vien", "");
while (isNaN(student) || student < 0) {
  student = prompt("nhap so sinh vien", "");
}
for (var i = 0; i < student; i++) {
  var number_Student = prompt("sv thu" + (i + 1) + ":",0);
  while (isNaN(number_Student) || number_Student < 0 || number_Student > 10) {
     number_Student = prompt("sv thu" + (i + 1) + ":",0);
    
  }
  array_Student[i]=number_Student;
}
var index = 0;
for (var i = 0; i < array_Student.length; i++) {
  document.write(array_Student[i] + "</br>");
  if (array_Student[i] >= 5) {
    index++;
  }
}
document.write("đếm số hs trên 5 là" + index + "</br>");
arr2 = [8.5, 9.0, 7.0];
var array_Student = array_Student.concat(arr2);
console.log(array_Student);
// var tg;
// for (var i = 0; i < array_Student.length - 1; i++) {
//   for (var j = i + 1; j < array_Student.length; j++) {
//     if (array_Student[i] > array_Student[j]) {
//       tg = array_Student[i];
//       array_Student[i] = array_Student[j];
//       array_Student[j] = tg;
//     }
//   }
// }
array_Student.sort();
for (var i = 0; i < array_Student.length; i++) {
  document.write(array_Student[i] + ";");
}
// fix bai
// var arr=[];
// var n=prompt("inpunt",6);
// while(isNaN(n)||n<0){
//   n=prompt("input",6);
// }
// for(var i=0;i<n ;i++){
// var scorse=prompt("input scorse :" +i,0);
// var cout=0
// while(isNaN(scorse)|| (scorse<0||scorse>10)){
//   scorse=prompt("number"+i,6);
//   arr[i]=scorse;
// }
// if(scorse>5) cout++
// }
// for( var i=0;i<arr.length;i++){
//   document.write(+arr[i]+";")
// }
