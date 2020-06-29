var user = {
    age: 22, // age 'à properrtie
    Name: "tan",
    lastName: "le",
    getName: function() { //getName là methoh
        return this.lastName + this.Name; // this ở đây đại diênj cho user

    },
    obj_Child: {
        age: 22, // age 'à properrtie
        Name: "tan",
        lastName: "le",
        getName: function() { //getName là methoh
            return this.lastName + this.Name; // this ở đây đại diênj cho user

        },
    },
}
var g = user.getName; //this của funtion trỏ tới obj window
console.log(g());
console.log(user.lastName);
console.log(user.getName()); //nếu thực thi lun thì this sẽ trỏ tới obj user
console.log(user.obj_Child.age);
var a = user.obj_Child.getName.bind(user.obj_Child)
console.log(a());



// contrustor
function createUser() {
    this.name = "Tan";
    this.age = 21;
}
// khai baos doi tuong
var obj_Name = new createUser();
obj_Name.name;

function createUser(name, age) {
    this.name = name;
    this.age = age;
}
var obj1 = new createUser("tan", 22); // taoj ddoois tuong
var create = function createUser(name, age) {
    this.name = name;
    this.age = age;
}
create.prototype.method_name = function() {
    alert(this.name);
}
var obj_st1 = new create("tan", 21) // ddoois tuong nay ke thua  cac thuoc tinh cuar create vaf them ke thua cuar metod_name
obj_st1.method_name();
//  prototype định nghĩ tính kế thừa
// định nghĩ obj con kế thừa từ cha
//var u1=new user("h",20);
//u1.user=funtion