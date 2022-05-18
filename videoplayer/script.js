const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const volume = document.getElementById('volume');
const hof = document.getElementById('hof');
const hos = document.getElementById('hos');

// setting default volume
video.volume = 50 / 100;

// Play & pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play & pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

// update progress and timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // get mins
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // get secs
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    //get total duration
    let maxMin = Math.floor(video.duration / 60);
    if (maxMin < 10) {
        maxMin = '0' + String(maxMin);
    }
    let maxSec = Math.floor(video.duration % 60);
    if (maxSec < 10) {
        maxSec = '0' + String(maxSec);
    }
    timestamp.innerHTML = `${mins}:${secs}/${maxMin}:${maxSec}`;
}

// set video time to progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

// volume control
function setVolume() {
    video.volume = this.value / 100;
}



// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

volume.addEventListener('change', setVolume);

// change videos
hos.addEventListener('click', () => {
    video.src = 'videos/hos.mp4';
    video.play();
});

hof.addEventListener('click', () => {
    video.src = 'videos/hof.mp4';
    video.play();
});
