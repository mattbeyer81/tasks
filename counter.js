const numLabel = document.getElementById('number');

const eventHandlers = require('./counter-event-handlers');

document.getElementById('plus').addEventListener('click', () => {
    eventHandlers.plusHandler(numLabel)
});

document.getElementById('minus').addEventListener('click', () => {
    eventHandlers.minusHandler(numLabel)
});