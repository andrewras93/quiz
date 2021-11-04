import { Quiz } from "./Quiz.js";
import { QuizQuestion } from "./QuizQuestion.js";

export const quiz2 = new Quiz('Sport', new Date);

const question1 = new QuizQuestion('Sport', 'Hvem vandt EM i fodbold i 1992?', ['Danmark', 'Frankrig', 'Tyrkiet', 'Norge'], `Danmark`);
const question2 = new QuizQuestion('Sport', 'Hvem fører Formel 1 mesterskabet?', ['Max Verstappen', 'Lewis Hamiltion', 'Valteri Bottas', 'Lando Norris'], `Max Verstappen`);
const question3 = new QuizQuestion('Sport', 'Hvem vandt Champions League i 2020?', ['FC Barcelona', 'FC Bayern München', 'Sevilla', 'FC København'], `FC Bayern München`);

quiz2.addQuestion(question1);
quiz2.addQuestion(question2);
quiz2.addQuestion(question3);