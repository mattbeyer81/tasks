const $ = require('jquery');

document.body.innerHTML = require('fs').readFileSync('./counter.html').toString();

require('./counter');

const numLabel = document.getElementById('number');

describe('Event Listeners', () => {
  it('Plus then minus', () => {

    $('#plus').click();
    let textContent = numLabel.textContent
    expect(textContent).toBe('2')
  
    $('#minus').click();
    textContent = numLabel.textContent
    expect(textContent).toBe('1')
  })
})

