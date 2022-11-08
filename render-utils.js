// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');

// let state
let defeatedGoblinsCount = 0;
let playerHP = 10;
let goblins = [
    { id: 1, name: 'Terry', hp: 1 },
    { id: 2, name: 'Professor Goblin', hp: 4 },
];

let currentId = 3;

// - New goblin form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //  - User has supplied a name and submitted the form
    const data = new FormData(form);

    const goblinName = data.get('goblin-name');

    //  - Make a new goblin object with that user input

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    //  - Add that object to the array of goblins in state
    goblins.push(newGoblin);

    displayGoblins();
});
