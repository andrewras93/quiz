export class Quiz {
    constructor(name, created) {
        this.name = name;
        this.created = created;
        this.questions = [];
    }

    shuffle() {
        this.questions.sort(() => Math.random() - 0.5);
    }

    toStringQuiz() {
        let s = ``;
        let id = 1;

        s += `<form>`;
        for (let i = 0; i < this.questions.length; i++) {            
            s += `<div>`;
            s += `<div class='question'>`;
            s += `<h2>`;
            s += `Spørgsmål ${i + 1} ud af ${this.questions.length}`;
            s += `</h2>`;
            s += `<p>`;
            s += this.questions[i].question;
            s += `</p>`;
            s += `</div>`;
            s += `<div class='answers'>`;
            s += `<h5>`;
            s += `Vælg 1 Svarmulighed`;
            s += `</h5>`;
            for (let j = 0; j < this.questions[i].possibleAnswers.length; j++) {
                s += `<div>`;
                s += `<input type='radio' value='${this.questions[i].possibleAnswers[j]}' name='group${id}' class='answer'>`;
                s += `<label>`;
                s += this.questions[i].possibleAnswers[j];
                s += `</label>`;
                s += `</div>`;
            }
            s += `</div>`;
            s += `</div>`;
            id++;
        }
        s += `<div id='submitContainer'>`;
        s += `<input type='submit' value='Indsend Svar' id='submit'>`;
        s += `<input type='text' placeholder='Indtast Navn' id='userName'>`;
        s += `<div>`;
        s += `</form>`;

        return s;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    toStringResults(answer, userName) {
        let s = ``;        
        let score = 0;

        s += `<div id='resultsList'>`;
        for (let i = 0; i < this.questions.length; i++) {            
            s += `<div>`;
            s += `<div class='question'>`;
            s += `<h2>`;
            s += `Spørgsmål ${i + 1}`;
            s += `</h2>`;
            s += `<p>`;
            s += this.questions[i].question;
            s += `</p>`;
            s += `</div>`;
            s += `<div class='answers'>`;
            for (let j = 0; j < this.questions[i].possibleAnswers.length; j++) {
                s += `<div>`;
                s += `<input disabled type='radio' value='${this.questions[i].possibleAnswers[j]}' class='answer'>`;
                s += `<label>`;
                s += this.questions[i].possibleAnswers[j];
                s += `</label>`;
                s += `</div>`;
            }
            let color = answer[i] == this.questions[i].correctAnswer ? 'green' : 'darkred';
            s += `<p style='color: ${color}' class='correctAnswer'>`;
            s += `Du svarede: ${answer[i]} Det korrekte svar: ${this.questions[i].correctAnswer}`;
            s += `</p>`;
            s += `</div>`;
            s += `</div>`;
            if (answer[i] == this.questions[i].correctAnswer) {
                score++
            }
        }
        s += `<h1 class='score'>`;
        s += `Din samlet score: ${score}`;
        s += `</h1>`;
        s += `<div>`;
        s += `<a href='index.html' id='newQuiz'>`;
        s += `Ny Quiz`;
        s += `</a>`;
        s += `</div>`;        
        s += `</div>`;

        localStorage.setItem(`User: ${userName}`, `Score ${score}`);
        return s;
    }
}