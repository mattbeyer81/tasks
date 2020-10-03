const $ = require('jquery');

document.body.innerHTML = require('fs').readFileSync('./counter.html').toString();

const counter = require('./counter');

describe('Event Listeners', () => {
  it('Plus then minus', () => {

    $('#plus').click();
    let textContent = counter.numLabel.textContent
    expect(textContent).toBe('2')
  
    $('#minus').click();
    textContent = counter.numLabel.textContent
    expect(textContent).toBe('1')
  })
})

