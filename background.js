// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        file: 'jquery-3.4.1.min.js'
    });

    chrome.tabs.executeScript({
        file: 'scramble_page.js'
    });

});