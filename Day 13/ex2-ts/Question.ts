export class Question{
    constructor(
        private caption: string,
        private answers: string[],
        private correctIndex: number 
    ){}

    print(): string {
        var question = this.caption;
        question += "\n";
        this.answers.forEach(element => {
            question += (this.answers.indexOf(element) + 1);
            question += ". ";
            question += element;
            question += "\n";
        });
        return question;
    }

    getAnswer(): number{
        return this.correctIndex;
    }
}