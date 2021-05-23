function Calculator(a, b){
    this.number1 = a;
    this.number2 = b;
}

Calculator.prototype.add = function (){
    return (this.number1 + this.number2);
}

Calculator.prototype.substract = function (){
    return (this.number1 - this.number2);
}

Calculator.prototype.multiply = function (){
    return (this.number1 * this.number2);
}

Calculator.prototype.devide = function (){
    return (this.number1 / this.number2);
}

Calculator.prototype.log = function (){
    console.log(`the sum of the numbers is: ${this.add()} the difference of the numbers is ${this.substract()} and finally the product of the two numbers is ${this.multiply()}`);
}

var a = new Calculator(5, 10);
var b = new Calculator(10, 5);


a.log();
b.log();


setTimeout(()=>b.log(), 2000);