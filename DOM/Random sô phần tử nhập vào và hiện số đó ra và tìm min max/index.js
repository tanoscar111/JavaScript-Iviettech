 function $(id) {
     return document.getElementById(id);
 }

 function random() {

 }
 $("btn").onclick = function() {
     //  var el_input = document.getElementsByTagName("input");
     //  for (let i = 0; i < el_input.length; i++) {
     //      var value_input = el_input[i];
     //  var getValue_input = value_input.value;
     //  getValue_input = parseInt(value_input);
     // for(j=0;j<getValue_input;j++){

     // }
     var getValue_input = document.getElementById("input").value;
     var arraysave_random = [];
     getValue_input = parseInt(getValue_input);
     for (let i = 1; i <= getValue_input; i++) {
         var a = Math.floor(Math.random() * 100);
         arraysave_random.push(a);
     }
     //  for (let j = 0; j < arraysave_random.length; j++) {
     //      alert("so thu" + (j + 1) + "=" + arraysave_random[j]);

     //  }
     alert(Math.max.apply(Math, arraysave_random));


 }