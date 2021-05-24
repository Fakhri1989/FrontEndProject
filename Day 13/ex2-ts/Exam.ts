import { Question } from './Question';

export class Exam{
    private questions: Question[] = [];

    constructor( 
    ){}

    addQuestion(question:Question): void{
        this.questions.push(question);
    }

    print(): void{
        this.questions.forEach(question => {
            console.log(question.print());
            console.log();
        });
    }

    grade(answers: number[]): number{
        let correctAnswers = 0;
        let numberOfQuestions = 0;

        this.questions.forEach(question => {
            if(question.getAnswer() === answers[numberOfQuestions]){
                correctAnswers++;
            }

            numberOfQuestions ++;
        });

        return correctAnswers/numberOfQuestions * 100;
    }
}