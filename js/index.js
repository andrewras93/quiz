import { quiz1 } from "./modules/quiz1.js";
import { quiz2 } from "./modules/quiz2.js";
import { createFooter, createHeader, displayQuiz, submitQuiz, toQuizButtons } from "./modules/scripts.js";

const body = document.getElementById('body');
const index = document.getElementById('index');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

function initialization() {
    createHeader(quiz1.name, quiz2.name);
    createFooter(body);
    if(index) {
        toQuizButtons(index, quiz1.name, quiz2.name);
    }      

    if(div1) {
        displayQuiz(quiz1, div1);
        submitQuiz(quiz1, div1);
    }

    if(div2) {
        displayQuiz(quiz2, div2);
        submitQuiz(quiz2, div2);
    }
}

window.addEventListener('load', initialization);