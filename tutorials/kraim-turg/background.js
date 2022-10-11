
chrome.runtime.onInstalled.addListener(() => {
    console.warn('Kui tihti see litib?')
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const kraim = 'https://punane.crime.ee';

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
    console.warn('Tõmbasime käima', tab);
    if (tab.url.startsWith(kraim)) {
        // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        console.warn('Praegu badge on', prevState);
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON';

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        if (nextState === "ON") {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.executeScript({
                files: ["scripts/turg.js"],
                target: { tabId: tab.id },
            });
        }
    }
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    const state = await chrome.action.getBadgeText({ tabId: tab.id });

    if (state === "ON") {
        // Insert the CSS file when the user turns the extension on
        await chrome.scripting.executeScript({
            files: ["scripts/turg.js"],
            target: { tabId: tab.id },
        });
    }
}
);
