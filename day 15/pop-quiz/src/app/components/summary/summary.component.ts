import { Question } from './../../model/question';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

    
    @Input()
    questions: Question[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
