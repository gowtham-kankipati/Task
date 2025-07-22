document.addEventListener('DOMContentLoaded', function() {
  const getTitleButton = document.getElementById('getTitleButton');
  const outputDiv = document.getElementById('output');

  getTitleButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs && tabs.length > 0) {
        const currentTab = tabs[0];
        outputDiv.textContent = currentTab.title;
      } else {
        outputDiv.textContent = "Could not get tab title.";
      }
    });
  });
});