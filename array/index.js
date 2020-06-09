var aray_String=[1,2,3,4,5];
for(var i=0;i<aray_String.length;i++){
    document.write(aray_String[i] +";");
}
var array_Multiples=[];
var index=0; //dùng để lưu từng phần tử vào array
for( var i=0;i<1000;i++){
    if(i%3==0&&i%5==0){
        array_Multiples[index]=i;
        index++;
       
    }
    
}
for(var i=0;i<array_Multiples.length;i++ ){
    document.write(array_Multiples[i]+";");
}