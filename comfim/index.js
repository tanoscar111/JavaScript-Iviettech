// var c=confirm("are you OK");
// console.log(c);
// document.write('<div><a id="id1"> hi anh em</a></div>');
// var a= document.getElementById("id1");
// console.log(a);
document.write('<input id="id_input" value="gggg">');
var getValue=document.getElementById("id_input");
console.log(getValue.value);
getValue.disabled;//trangj thai
getValue.focus();
var a=4.1114.toFixed(2);
console.log(a);
console.log(typeof(a));
var today=new Date();
console.log(today.getDate());
console.log(today.getMonth());//hiển thị tháng thành -1  vì nó lưu theo array  từ 0 -11
var text="hi anh em";
console.log(text.indexOf("hi"));
console.log(text.substr(0,2));
console.log(text.length);

//funtion
var fn=function (id){
  return id; 
}
console.log(fn(2));
var fn_=function(id){
  return document.getElementById("id_input");
};
console.log(fn_( ));
var $=function(id){
  return document.getElementById("id_input");
};
console.log($( ));