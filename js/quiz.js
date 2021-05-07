const questions = [
    ['Hoeveel letters zitten er in het alfabet?', '26'],
    ['Hoeveel schriften heeft Japans?', '3'],
    ['Wat is de hoofdstad van Zuid-Korea', 'Seoel'],
    ['Op welke techniek is de Tor Browser gebaseerd?', 'Onion Routing']
];

const correct = [];
const incorrect = [];
let correctAnswers = 0;

for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);

    if (response === answer) {
        correctAnswers++;
        correct.push(question);
    } else {
        incorrect.push(question);
    }
}

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

let html = `
    <h1>You got ${correctAnswers} question(s) correct</h1>
    <h2>You got these questions right:</h2>
    <ol>${createListItems(correct)}</ol>
    
    <h2>You got these questions wrong</h2>
    <ol>${createListItems(incorrect)}</ol>
`;

document.querySelector('main').innerHTML = html;