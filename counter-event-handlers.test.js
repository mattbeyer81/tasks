document.body.innerHTML = require('fs').readFileSync('./counter.html').toString();

const eventHandlers = require('./counter-event-handlers');
const numLabel = document.getElementById('number');


describe('Event handlers', () => {
  it('Plus then minus', () => {

    eventHandlers.plusHandler(numLabel);
    let textContent = numLabel.textContent
    expect(textContent).toBe('2')
  
    eventHandlers.minusHandler(numLabel);
    textContent = numLabel.textContent
    expect(textContent).toBe('1')
  })

})

