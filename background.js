chrome.action.onClicked.addListener((tab) => {
    // 當按下擴展按鈕時打開新標籤頁
    chrome.tabs.create({ url: 'dist/index.html#/editor' });
  });