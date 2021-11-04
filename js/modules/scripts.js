export function createHeader(title1, title2) {
    const header = document.getElementById('header');
    const container = document.createElement('div');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const index = document.createElement('a');
    const quiz1 = document.createElement('a');
    const quiz2 = document.createElement('a');

    container.setAttribute('class', 'container');
    nav.setAttribute('class', 'navbar-nav');
    index.setAttribute('href', 'index.html');
    quiz1.setAttribute('href', 'quiz1.html');
    quiz2.setAttribute('href', 'quiz2.html');
    
    index.appendChild(document.createTextNode(`Forside`));
    quiz1.appendChild(document.createTextNode(`Quiz 1: ${title1}`));
    quiz2.appendChild(document.createTextNode(`Quiz 2: ${title2}`));

    li1.appendChild(index);
    li2.appendChild(quiz1);
    li3.appendChild(quiz2);

    ul.append(li1, li2, li3);
    nav.appendChild(ul);
    container.appendChild(nav);

    header.appendChild(container);

    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('header > div > nav > ul > li > a');
    const menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {

        if (menuItem[i].href === currentLocation) {

            menuItem[i].classList.add('active');

        }

    }
}

export function createFooter(where) {
    const footer = document.createElement('footer');
    const container = document.createElement('div');
    const p = document.createElement('p');
    
    container.setAttribute('class', 'container');    

    p.appendChild(document.createTextNode(`@Project 2, 2021`));

    container.appendChild(p);

    footer.appendChild(container);

    where.appendChild(footer);
}

export function toQuizButtons(where, title1, title2) {
    const toQuiz1 = document.createElement('a');
    const toQuiz2 = document.createElement('a');
    const div = document.createElement('div');

    toQuiz1.setAttribute('href', 'quiz1.html');
    toQuiz2.setAttribute('href', 'quiz2.html');

    toQuiz1.appendChild(document.createTextNode(`${title1} Quiz`));
    toQuiz2.appendChild(document.createTextNode(`${title2} Quiz`));

    div.append(toQuiz1, toQuiz2)

    where.appendChild(div);
}

export function displayQuiz(quiz, where) {
    quiz.shuffle();
    where.innerHTML = quiz.toStringQuiz();    
}

export function submitQuiz(quiz, where) {
    const submit = document.getElementById('submit');
    const userName = document.getElementById('userName');
    const usersAnswers = [];

    submit.addEventListener('click', function(e) {
        e.preventDefault();

        const input = document.getElementsByClassName('answer');
        
        for (let i = 0; i < input.length; i++) {            
            if (input[i].checked) {                
                usersAnswers.push(input[i].value);
            }
        }

        where.innerHTML = '';
        where.innerHTML = quiz.toStringResults(usersAnswers, userName.value);
    });
}