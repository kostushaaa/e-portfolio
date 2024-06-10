const states = [
    'lernfeld_1/lernfeld_1.html',
    'lernfeld_2/lernfeld_2.html',
    'lernfeld_3/lernfeld_3.html',
    'lernfeld_4/lernfeld_4.html',
    'lernfeld_5/lernfeld_5.html'
];

let state = '';

function selectLernfeld(index) {
    state = states[index - 1];
    loadHTML(state, 'content');
    highlightButton(index);
}

function loadHTML(filePath, elementId) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the HTML file:', error);
        });
}

function highlightButton(index) {
    const buttons = document.querySelectorAll('.lf_switch button');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`lf_${index}`).classList.add('active');
}
