export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.id = `goblin-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    // use a weird "ternary" to set the face
    // fit he goblin lives, do a imp emoji, else do a fire emoji
    faceEl.id = `goblin-face- ${goblinData.hp}`;
    faceEl.textContent = goblinData.hp > ? '😈' : '🔥';
    
    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}