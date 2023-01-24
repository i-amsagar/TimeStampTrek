  //Updates and tabs in system and find all tabs in youtube
  chrome.tabs.onUpdated.addListener((tabId, tab) => {
      if (tab.url && tab.url.includes("youtube.com/watch")) {
        const queryParameters = tab.url.split("?")[1];
        const urlParameters = new URLSearchParams(queryParameters);
    
        chrome.tabs.sendMessage(tabId, {
          type: "NEW",
          videoId: urlParameters.get("v"),
        });
      }
    });