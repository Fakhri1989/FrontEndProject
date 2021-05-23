let o1 = {};

let a1 = [2, 4, 6];

function Fakhri() {

}

var k1 = new Fakhri();
var k2 = new Fakhri();

k1.x = 20;
k2.x = 40;

Fakhri.prototype.z = 50;

console.log(k1.z);
console.log(k2.z);

console.log(k1.x);
console.log(k2.x);