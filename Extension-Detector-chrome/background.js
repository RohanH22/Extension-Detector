
// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.title == 'Industry Mitra') {

//     // do your things

//   }
// })

// var counter = 0;

// function sendExtensionListToContentScript() {
  chrome.management.getAll(function(extensions) {
    // Create a message object with the extensions list
    var message = {
      extensions: extensions
    };

    // Send the message to the content script
    chrome.tabs.query({}, function(tabs) {
      tabs.forEach(function(tab) {
        chrome.tabs.sendMessage(tab.id, message);
      });
    });
  });
  // chrome.tabs.reload();
  window.top.location.reload()
  // counter++;

  // if (counter === 1) {
  //   // clearInterval(intervalId);
  //   setInterval(sendExtensionListToContentScript, 1000)
  // }else{
  //   clearInterval();
  // }
// }

// sendExtensionListToContentScript();
// if (counter === 1) {
//   // clearInterval(intervalId);
//   setInterval(sendExtensionListToContentScript, 1000)
//   counter = 0;
// }else{
//   clearInterval();
// }
// var intervalId = setInterval(sendExtensionListToContentScript, 1000);

// Listen for the onInstalled event to send the extension list after the extension is installed or updated
// chrome.runtime.onInstalled.addListener(sendExtensionListToContentScript);

