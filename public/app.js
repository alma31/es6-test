'use strict';

var tableau = [];
document.getElementById('btn').addEventListener('click', function () {
    var inputValue = document.getElementById('nom').value;
    if (inputValue === "") {
        document.getElementById('di').innerHTML = "pere noel";
    } else {
        var tab = inputValue;
        tableau.push(inputValue);
        var premier = tab.charAt(0).toUpperCase();
        var maj = premier + inputValue.slice(1);
        var ecriture = document.body.appendChild(document.createElement('li')).innerHTML = maj;
        var html = document.getElementById('di').innerHTML = maj;
    }
});
