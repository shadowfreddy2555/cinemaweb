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

document.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    if (scrolled > 200) {
        addCreatedByText();
    } else {
        removeCreatedByText();
    }
});

function addCreatedByText() {
    var createdByText = document.getElementById('createdByText');

    if (!createdByText) {
        createdByText = document.createElement('p');
        createdByText.textContent = 'Created by Shadowfreddy';
        createdByText.style.fontSize = '72px';
        createdByText.style.position = 'fixed';
        createdByText.style.top = '50%';
        createdByText.style.left = '50%';
        createdByText.style.transform = 'translate(-50%, -50%)';
        createdByText.style.color = '#ffffff';
        createdByText.id = 'createdByText';
        document.body.appendChild(createdByText);
    }
}

function removeCreatedByText() {
    var createdByText = document.getElementById('createdByText');
    if (createdByText) {
        createdByText.remove();
    }
}
