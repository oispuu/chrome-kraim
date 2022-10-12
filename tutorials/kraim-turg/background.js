
const kraim = 'https://punane.crime.ee';
let state = 'OFF';

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: state,
    });
});

function toggleState(tab) {
    state = state === 'ON' ? 'OFF' : 'ON';
    // Set the action badge to the next state
    chrome.action.setBadgeText({
        tabId: tab.id,
        text: state,
    });
}

function execute(tab) {
    console.warn('Litin scripti', state)
    if (state === "ON") {
        // Insert the CSS file when the user turns the extension on
        chrome.scripting.executeScript({
            files: ["scripts/turg.js"],
            target: { tabId: tab.id },
        });
    }
}

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(kraim)) {
        // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        toggleState(tab);

        execute(tab);
    }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    execute(tab);
}
);
