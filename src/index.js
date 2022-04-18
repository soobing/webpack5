import generateJoke from './generateJoke.js';
import './styles/main.scss'
import './b.js';
import smileImg from './assets/smile.svg';

const smileEl = document.getElementById('smile');
smileEl.src = smileImg;

[1, 2, 3].map(v => v + 2);

// const p = new Promise();
generateJoke();

document.getElementById('jokeBtn').addEventListener('click', generateJoke);
console.log(generateJoke)