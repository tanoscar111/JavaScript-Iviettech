 function $(id) {
     return document.getElementById(id);
 }

 function createl(tag) {
     return document.createElement(tag)
 }
 $("btn").onclick = function() {
     //  var el_input = document.getElementsByTagName("input");
     //  for (let i = 0; i < el_input.length; i++) {
     //      var value_input = el_input[i];
     //  var getValue_input = value_input.value;
     //  getValue_input = parseInt(value_input);
     // for(j=0;j<getValue_input;j++){

     // }
     var el = document.getElementsByClassName("chid_rd");
     if (el.length > 0) {
         el[0].remove();
     }
     var getValue_input = document.getElementById("input").value;
     var arraysave_random = [];
     getValue_input = parseInt(getValue_input);
     for (let i = 1; i <= getValue_input; i++) {
         var a = Math.floor(Math.random() * 100);
         arraysave_random.push(a);
     }
     var createDiv = createl("div");
     createDiv.className = "chid_rd";

     for (let j = 0; j < arraysave_random.length; j++) {
         //   alert("so thu" + (j + 1) + "=" + arraysave_random[j]);
         var createEl = createl("p");
         var createNodeText = document.createTextNode("so thu" + (j + 1) + "=" + arraysave_random[j]);
         createEl.appendChild(createNodeText);

         createDiv.appendChild(createEl);

     }


     //max min
     var createEl1 = createl("p");
     var createNodeText1 = document.createTextNode("max=" + Math.max.apply(Math, arraysave_random));
     createEl1.appendChild(createNodeText1);
     createDiv.appendChild(createEl1);
     var createEl2 = createl("p");
     var createNodeText2 = document.createTextNode("Min=" + Math.min.apply(Math, arraysave_random));
     createEl2.appendChild(createNodeText2);
     createDiv.appendChild(createEl2);
     $("add").appendChild(createDiv);

 }