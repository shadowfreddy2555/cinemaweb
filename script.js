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
    document.body.innerHTML = '';
}

function addYouSuckText() {
    var youSuckText = document.createElement('p');
    youSuckText.textContent = 'You suck, you said L';
    youSuckText.style.fontSize = '24px';
    document.body.appendChild(youSuckText);
}

document.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    if (scrolled > 200) { // Adjust the scroll value as needed
        addCreatedByText();
    }
});

function addCreatedByText() {
    var createdByText = document.createElement('p');
    createdByText.textContent = 'Created by Shadowfreddy';
    createdByText.style.fontSize = '72px';
    createdByText.style.position = 'fixed';
    createdByText.style.top = '50%';
    createdByText.style.left = '50%';
    createdByText.style.transform = 'translate(-50%, -50%)';
    createdByText.style.color = '#ffffff';
    document.body.appendChild(createdByText);
}
