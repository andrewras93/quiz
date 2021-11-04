export class QuizQuestion {
    constructor(category, question, possibleAnswers, correctAnswer) {
        this.category = category;
        this.question = question;
        this.possibleAnswers = possibleAnswers;
        this.correctAnswer = correctAnswer;
    }
}