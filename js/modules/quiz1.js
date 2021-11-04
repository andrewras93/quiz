import { Quiz } from "./Quiz.js";
import { QuizQuestion } from "./QuizQuestion.js";

export const quiz1 = new Quiz('Matematik', new Date);

const question1 = new QuizQuestion('Matematik', 'Hvad er 2 + 2?', ['4', '6', '10', '1'], '4');
const question2 = new QuizQuestion('Matematik', 'Hvad er Pi?', ['3.64', '3.14', '3.41', '2.314'], '3.14');
const question3 = new QuizQuestion('Matematik', 'Hvor mange sider har en trekant?', ['1', '2', '3', '4'], '3');
const question4 = new QuizQuestion('Matematik', 'Hvad er 8 * 0?', ['0', '8', '80', '1'], '0');

quiz1.addQuestion(question1);
quiz1.addQuestion(question2);
quiz1.addQuestion(question3);
quiz1.addQuestion(question4);