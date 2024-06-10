function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 100);

// enable clipboard functionality
const clipboard = new ClipboardJS('#copyButton');

const copyButton = document.getElementById('copyButton');
const datetimeSpan = document.getElementById('datetime');

copyButton.addEventListener('click', function() {
    // Создаем временный элемент для копирования текста
    const tempElement = document.createElement('textarea');
    tempElement.value = datetimeSpan.textContent;
    document.body.appendChild(tempElement);

    // Выбираем текст внутри временного элемента
    tempElement.select();
    document.execCommand('copy');

    // Удаляем временный элемент
    document.body.removeChild(tempElement);

    alert('Copied to clipboard!');
});


const themeSwitcher = document.getElementById('themeSwitcher');
const themeStylesheet = document.getElementById('themeStyles');

// Проверяем значение переключателя и применяем соответствующий стиль
themeSwitcher.addEventListener('change', () => {
    console.log("Switch")
    if (themeSwitcher.checked) {
        themeStylesheet.href = 'dark_styles.css'; // Ссылка на темные стили
    } else {
        themeStylesheet.href = 'styles.css'; // Ссылка на светлые стили
    }
});




// Dir choose

// const selectSingle = document.querySelector('.selectDiv');
// const selectSingle_title = selectSingle.querySelector('.selectTitle');
// const selectSingle_labels = selectSingle.querySelectorAll('.selectLabel');
//
// // Toggle menu
// selectSingle_title.addEventListener('click', () => {
//     if ('active' === selectSingle.getAttribute('data-state')) {
//         selectSingle.setAttribute('data-state', '');
//     } else {
//         selectSingle.setAttribute('data-state', 'active');
//     }
// });
//
// // Close when click to option
// for (let i = 0; i < selectSingle_labels.length; i++) {
//     selectSingle_labels[i].addEventListener('click', (evt) => {
//         selectSingle_title.textContent = evt.target.textContent;
//         selectSingle.setAttribute('data-state', '');
//     });
// }

// Reset title
// const reset = document.querySelector('.reset');
// reset.addEventListener('click', () => {
//     selectSingle_title.textContent = selectSingle_title.getAttribute('data-default');
// });
