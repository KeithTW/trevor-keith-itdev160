
titleText = "Click a square to play a tone";
subTitleText = "Use the slider to adjust the volume";
tunes = ["bga", "eab", "bba"];

$mainTitle = $("#mainTitle");
$subTitle = $("#subTitle");
slider = document.getElementById("volumeSlider");
$volumeIndicator = $("#volumeValue");

function playNote(noteID) {
    var note = document.getElementById(noteID + "Audio");

    note.currentTime = 0;
    note.volume = getVolume();
    note.play();

}

function playTune(tuneNdx) {
    // Check because for some reason it will only play 3 tones in one go
    tuneNdx = (tuneNdx | 0);

    tune = tunes[tuneNdx];

    if(tune.length <= 3) {
        for(noteNdx = 0; noteNdx < tune.length; noteNdx++) {
            playNote(tune[noteNdx]);

            sleep(150);

        }

    }

}

function getVolume() {
    return slider.value / 100;

}

slider.oninput = function() {
    if(getVolume() === 0) {
        $volumeIndicator.text("MUTED");

    } else if(getVolume() === 1) {
        $volumeIndicator.text("MAXED");

    } else {
        $volumeIndicator.text(getVolume());

    }

}

$(document).ready( function() {
    $volumeIndicator.text(getVolume());

    $mainTitle.text(titleText);
    $subTitle.text(subTitleText);

    $('#c').mousedown(function() {
        playNote('c');

    });
    
    $('#d').mousedown(function() {
        playNote('d');

    });
    
    $('#e').mousedown(function() {
        playNote('e');

    });
    
    $('#f').mousedown(function() {
        playNote('f');

    });
    
    $('#g').mousedown(function() {
        playNote('g');

    });
    
    $('#a').mousedown(function() {
        playNote('a');

    });
    
    $('#b').mousedown(function() {
        playNote('b');

    });

    $('#tune').mousedown(function() {
        playTune(Math.random() * tunes.length);

    });
    
});

// Aggressively crude sleep function
function sleep(milliseconds) {
    var start = new Date().getTime();

    while(true) {
        if((new Date().getTime() - start) > milliseconds){
            break;

        }

    }

}