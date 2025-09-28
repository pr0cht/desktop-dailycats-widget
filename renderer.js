const { ipcRenderer } = require('electron');

document.getElementById('close').addEventListener('click', () => {
    ipcRenderer.send('close-app');
});

async function loadCatImage() {
    try {
        const response = await fetch('assets/cats/cat' + Math.floor((Math.random() * 80) + 1) + '.jpg')
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        document.getElementById('catImage').src = url;
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

loadCatImage()
setInterval(loadCatImage, 86400000); // Refresh every 24 hours

