export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    const srEl = document.createElement('span');

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;
    hpEl.id = `goblin-hp-${goblinData.id}`;

    srEl.classList.add('screen-reader-only');
    srEl.id = `goblin-sr-${goblinEl.id}`;
    srEl.textContent = goblinEl.hp > 0 ? 'goblin emoji' : 'fire emoji';

    // use a weird "ternary" to set the face
    // fit he goblin lives, do a imp emoji, else do a fire emoji
    faceEl.id = `goblin-face-${goblinData.id}`;
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}
