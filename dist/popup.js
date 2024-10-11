function btnClick() {
    document.getElementById('openPage').addEventListener('click', function () {
        chrome.tabs.create({ url: 'dist/index.html' });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    btnClick();
});