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
        this.questions.forEach(function (element) {
            console.log(element.print());
            console.log();
        });
    };
    Exam.prototype.grade = function (answers) {
        var correctAnswers = 0;
        var numberOfQuestions = 0;
        this.questions.forEach(function (element) {
            if (element.getAnswer() === answers[numberOfQuestions]) {
                correctAnswers++;
            }
            numberOfQuestions++;
        });
        return correctAnswers / numberOfQuestions;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=Exam.js.map