let history = [];

document.getElementById('submitButton').addEventListener('click', (e) => {
    let value = document.getElementById('userInput').value;

    // Check if the value is empty before adding it to the history
    if (value.trim() !== '') {
        history.push(value);

        let historyElement = document.createElement('p');
        historyElement.textContent = value;

        // Allow history items to be edited
        historyElement.addEventListener('click', () => {
            editHistoryItem(historyElement);
        });

        // Allow history items to be deleted
        historyElement.addEventListener('contextmenu', (event) => {
            event.preventDefault(); // Prevent the context menu from appearing
            deleteHistoryItem(historyElement);
        });

        document.querySelector('#output').appendChild(historyElement);
        document.getElementById('userInput').value = '';
    }
});

document.getElementById('clearButton').addEventListener('click', (e) => {
    document.getElementById('output').textContent = '';
});

document.getElementById('clearHistoryButton').addEventListener('click', (e) => {
    // Clear both the displayed history and the history array
    document.getElementById('output').textContent = '';
    history = [];
});

function editHistoryItem(element) {
    // Implement the logic to make the history item editable
    // You might want to replace the text content with an input field
}

function deleteHistoryItem(element) {
    // Implement the logic to delete the history item
    // You need to remove it from both the displayed history and the history array
}
