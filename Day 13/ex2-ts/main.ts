import { Exam } from './Exam';
import { Question } from './Question';

var exam = new Exam();
exam.addQuestion(new Question("question 1", ["1", "2", "3", "4"], 1));
exam.addQuestion(new Question("question 2", ["1", "2", "3", "4"], 2));
exam.addQuestion(new Question("question 3", ["1", "2", "3", "4"], 3));
exam.addQuestion(new Question("question 4", ["1", "2", "3", "4"], 4));

console.log(exam.grade([1,2,2,4]));
console.log(exam.grade([1,2,3,4]));

exam.print();