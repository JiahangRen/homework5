// Add js here.
const mv = document.getElementById("videoplayer");
mv.autoplay = false;
mv.loop = false;
mv.tempVolume = 0;

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const slowerButton = document.getElementById("slower");
const fasterButton = document.getElementById("faster");
const skipButton = document.getElementById("skip");
const muteButton = document.getElementById("mute");

const volumeSet = document.getElementById("volume");
const slider = document.getElementById("slider");

//play button
playButton.addEventListener("click", function () {
    mv.play();
});

//pause button
pauseButton.addEventListener("click", function () {
    mv.pause();
});

//slower button
slowerButton.addEventListener("click", function () {
    if (mv.playbackRate === 2) {
        mv.playbackRate = 1;
    } else if (mv.playbackRate === 1) {
        mv.playbackRate = 0.5;
    } else {
        alert("Video is at slowest speed!");
    }
});

//faster button
fasterButton.addEventListener("click", function () {
    switch (mv.playbackRate) {
        case 0.5:
            mv.playbackRate = 1;
            break;
        case 1:
            mv.playbackRate = 2;
            break;
        case 2:
            alert("Video is at fastest speed!");
            break;
    }

});

//mute/unmute button
muteButton.addEventListener('click', function () {
    if (mv.muted) {
        mv.muted = false;
        muteButton.innerHTML = "Mute";
    } else {
        mv.muted = true;
        muteButton.innerHTML = "UnMute";
    }
});

//skipButton button
skipButton.addEventListener("click", function () {
    console.log("current time", mv.currentTime);
    if (mv.currentTime <= (mv.duration - 15)) {
        mv.currentTime += 15;
    } else {
        mv.currentTime = 0;
    }
    console.log("after skip time", mv.currentTime);
});

//slider
volumeSet.innerHTML = slider.value;
slider.oninput = function () {

    volumeSet.innerHTML = this.value;
    mv.volume = this.value / 100;
    if (mv.volume === 0) {
        mv.muted = true;
        muteButton.textContent = 'Unmute';
    } else {
        mv.muted = false;
        muteButton.textContent = 'Mute';
    }
};
