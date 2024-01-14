const CHANGE_PLAYBACK_RATE = 'change_playback_rate';

chrome.action.onClicked.addListener(tab => {
    chrome.tabs.sendMessage(tab.id, CHANGE_PLAYBACK_RATE)
});