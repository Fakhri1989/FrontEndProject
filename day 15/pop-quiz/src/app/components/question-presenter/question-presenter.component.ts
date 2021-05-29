import { Question } from './../../model/question';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-question-presenter',
    templateUrl: './question-presenter.component.html',
    styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit {

    @Input()
    question!: Question;


    @Output()
    ChosenAnswer = new EventEmitter<string>();

    onSelectAnswer(answer: string){
        this.ChosenAnswer.emit(answer);
    }
    
    constructor() { }

    ngOnInit(): void {
    }

}
