// format date
var date = new Date();
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var hh = date.getHours();
var p = date.getMinutes();
// if (dd < 10) {
//     dd = '0' + dd;
// }
// if (mm < 10) {
//     mm = '0' + mm;
// }
// var today = yyyy + '-' + mm + '-' + dd + ',' + hh + ":" + p;
// console.log(today)
//fix 
function createzezo(create) {
    // if (create < 10) {
    //     create = "0" + create;

    // };
    // return create;
    return (create < 10) ? "0" + create : create;
}
var today = yyyy + '-' + createzezo(mm) + '-' + createzezo(dd) + '-' + createzezo(hh) + '-' + createzezo(p);
console.log(today)