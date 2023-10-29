//our Drumsounds taken from drums.json
const drums = new Howl({

    "src": [
    "./Drums/drums.webm",
    "./Drums/drums.mp3"
],
    "sprite": {
    "Crash 08": [
        0,
        5333.333333333333
    ],
        "FSB_HitSetOne-54": [
        7000,
        778.5034013605446
    ],
        "HP_Kick 3": [
        9000,
        357.1428571428577
    ],
        "HP_Snare 10": [
        11000,
        357.1428571428577
    ],
        "HP_hat 12": [
        13000,
        245.19274376417144
    ],
        "HP_hat 9": [
        15000,
        245.19274376417144
    ]
}
});

//Ensures that we can use Q-W-E-R-T-Y to play the pads.
document.addEventListener('keydown', (event) => {
    const keyCode = event.keyCode

    switch(keyCode) {
        case 81:
            drums.play('FSB_HitSetOne-54');
            break;
        case 87:
            drums.play('HP_hat 12');
            break;
        case 69:
            drums.play('HP_hat 9');
            break;
        case 82:
            drums.play('Crash 08');
            break;
        case 84:
            drums.play('HP_Kick 3');
            break;
        case 89:
            drums.play('HP_Snare 10');
            break;
        default:
    }
});
//This makes our drumkit functional by clicking.
const drumkit = document.querySelector('.drumkit')

drumkit.addEventListener('click',() => {
    if (event.target.classList.contains('pad')) {
        let soundToPlay = event.target.dataset.sound;
        drums.play(soundToPlay);
    }
})
//Ensures we dont highlight when clicking on a pad many times.
document.addEventListener('mousedown', function(event) {
    if (event.detail > 1) {
        event.preventDefault();

    }
}, false);

function makePadActive(pad) {
    // Remove the active class from all pads
    const allPads = document.querySelectorAll('.pad');
    allPads.forEach(pad => {
        pad.classList.remove('active');
    });

    // Add the active class to the pad that was clicked
    pad.classList.add('active');

    // Remove active class from the pad after 200 milliseconds
    setTimeout(() => pad.classList.remove('active'), 200);
}
const pads = document.querySelectorAll('.pad');

pads.forEach(pad => {
    pad.addEventListener('click', () => makePadActive(pad));
});



