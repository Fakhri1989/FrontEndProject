import { QUESTIONS } from './model/questions';
import { Question } from './model/question';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentQuestion: Question;
    currentQuestionIndex: number;

    summary: Question[];
    isQuizOver: boolean;

    constructor() {
        this.currentQuestionIndex = 0;
        this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
        this.summary = [];
        this.isQuizOver = false;
    }

    userSelectAnswer(answer: string) {
        if (!this.isQuizOver) {
            let answerIndex = this.currentQuestion.answers.indexOf(answer);
            this.currentQuestion.userAnswer = answerIndex;

            this.currentQuestionIndex++;

            this.summary.push(this.currentQuestion);

            if (this.currentQuestionIndex >= QUESTIONS.length) {
                this.isQuizOver = true;
            }
            else {
                this.currentQuestion = QUESTIONS[this.currentQuestionIndex];
            }
        }
    }

}
