exports.plusHandler = function(element){
    let num = +element.textContent
    element.textContent = ++num;
}

exports.minusHandler = function(element){
    let num = +element.textContent
    element.textContent = --num;
}