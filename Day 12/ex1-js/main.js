var colors = require('colors');

colors.enable();

function Calculator(a, b){
    this.number1 = a;
    this.number2 = b;
}

Calculator.prototype.add = function (){
    return (this.number1 + this.number2);
}

Calculator.prototype.subtract = function (){
    return (this.number1 - this.number2);
}

Calculator.prototype.multiply = function (){
    return (this.number1 * this.number2);
}

Calculator.prototype.divide = function (){
    return (this.number1 / this.number2);
}

Calculator.prototype.log = function (){
    var v1 = `${this.number1} + ${this.number2} = ${this.add()}`;
    v1.green;
    var v2 =`${this.number1} - ${this.number2} = ${this.subtract()}`;
    v2.cyan;
    var v3 =`${this.number1} * ${this.number2} = ${this.multiply()}`;
    v3.bold;

    console.log(v1);
    console.log(v2);
    console.log(v3);
    console.log();
}



var a = new Calculator(5, 10);
var b = new Calculator(3, 4);


a.log();
b.log();


setTimeout(()=>b.log(), 2000);