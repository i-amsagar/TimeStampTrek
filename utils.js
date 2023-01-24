//Display that this page is youtube video or not or diplay messages

//Active Chrome tab
export async function getActiveTabURL() {
    const tabs = await chrome.tabs.query({
        currentWindow: true,
        active: true
    });
    return tabs[0];
}