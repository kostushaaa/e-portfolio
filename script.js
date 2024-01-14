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