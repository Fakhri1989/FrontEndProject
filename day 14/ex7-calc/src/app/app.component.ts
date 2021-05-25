import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    a: number = 0;
    b: number = 0;
    sumValue: number = 0;
    mulValue: number = 0;
    subValue: number = 0;
    results: string[] = [];

    sum() : number{
        return this.a + this.b;
    }

    multiply() : number{
        return this.a * this.b;
    }

    subtract() : number{
        return this.a - this.b;
    }

    setNumbers(a:number, b:number):void{
        this.a = a;
        this.b = b;
    }

    setA(a:string):void{
        this.a = Number(a);
    }

    setB(b:string):void{
        this.b = Number(b);
    }   

    calculate():void{
        this.sumValue = this.sum();
        this.mulValue = this.multiply();
        this.subValue = this.subtract();
        this.results = [
            `${this.a} + ${this.b} = ${this.sumValue}` ,
           `${this.a} * ${this.b} = ${this.mulValue}`,
            `${this.a} - ${this.b} = ${this.subValue}`
        ]
    }

}
