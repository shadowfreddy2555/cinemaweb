function redirectToCinemaServer() {
    window.location.href = "https://discord.gg/SB5KvRXZhj";
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'l' || event.key === 'L') {
        removeAllContent();
        addYouSuckText();
    }
});

function removeAllContent() {
    document.body.innerHTML = ''; // Clear all content in the body
}

function addYouSuckText() {
    var youSuckText = document.createElement('p');
    youSuckText.textContent = 'You suck, you said L';
    youSuckText.style.fontSize = '72px'; // Set the font size to 24 pixels (you can adjust as needed)
    document.body.appendChild(youSuckText);
}
