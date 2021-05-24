"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questions.push(question);
    };
    Exam.prototype.print = function () {
        this.questions.forEach(function (question) {
            console.log(question.print());
            console.log();
        });
    };
    Exam.prototype.grade = function (answers) {
        var correctAnswers = 0;
        var numberOfQuestions = 0;
        this.questions.forEach(function (question) {
            if (question.getAnswer() === answers[numberOfQuestions]) {
                correctAnswers++;
            }
            numberOfQuestions++;
        });
        return correctAnswers / numberOfQuestions * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map