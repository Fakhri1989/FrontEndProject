import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = "Calculator";
    a: number = 0;
    b: number = 0;
    sumValue: number | null = null;
    mulValue: number | null = null;
    subValue: number | null = null;
    results: string[] = [];

    get hasValue(): boolean{
        return this.sumValue !== null && this.mulValue !== null && this.subValue !== null;
    }

    sum() : number{
        return this.a + this.b;
    }

    multiply() : number{
        return this.a * this.b;
    }

    subtract() : number{
        return this.a - this.b;
    }

    reset(): void{
        this.mulValue = null;
        this.subValue = null;
        this.sumValue = null;
    }

    setA(a:string):void{
        this.a = Number(a);
        this.reset();
    }

    setB(b:string):void{
        this.b = Number(b);
        this.reset();
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
