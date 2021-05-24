"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exam_1 = require("./Exam");
var Question_1 = require("./Question");
var exam = new Exam_1.Exam();
exam.addQuestion(new Question_1.Question("question 1", ["1", "2", "3", "4"], 1));
exam.addQuestion(new Question_1.Question("question 2", ["1", "2", "3", "4"], 2));
exam.addQuestion(new Question_1.Question("question 3", ["1", "2", "3", "4"], 3));
exam.addQuestion(new Question_1.Question("question 4", ["1", "2", "3", "4"], 4));
console.log(exam.grade([1, 2, 2, 4]));
console.log(exam.grade([1, 2, 3, 4]));
exam.print();
//# sourceMappingURL=main.js.map