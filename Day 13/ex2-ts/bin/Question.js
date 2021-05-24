"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var Question = /** @class */ (function () {
    function Question(caption, answers, correctIndex) {
        this.caption = caption;
        this.answers = answers;
        this.correctIndex = correctIndex;
    }
    Question.prototype.print = function () {
        var _this = this;
        var question = this.caption;
        question += "\n";
        this.answers.forEach(function (element) {
            question += (_this.answers.indexOf(element) + 1);
            question += ". ";
            question += element;
            question += "\n";
        });
        return question;
    };
    Question.prototype.getAnswer = function () {
        return this.correctIndex;
    };
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=Question.js.map