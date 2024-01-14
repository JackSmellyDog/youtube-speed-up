const NORMAL_SPEED = 1;
const ONE_AND_A_HALF_SPEED = 1.5;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const video = document.getElementsByTagName('video')[0];
    if (video.playbackRate !== NORMAL_SPEED) {
        setPaybackRate(video, NORMAL_SPEED);
    } else {
        setPaybackRate(video, ONE_AND_A_HALF_SPEED)
    }
});

function setPaybackRate(video, newPaybackRate) {
    video.pause();
    video.playbackRate = newPaybackRate;
    video.play();
}
