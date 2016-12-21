'use strict';

var tableau = [];
var test = document.getElementById('btn').addEventListener('click', function () {
    var inputValue = document.getElementById('nom').value;
    if (inputValue === "") {
        document.getElementById('di').innerHTML = "pere noel";
    } else {
        var tab = inputValue;
        tableau.push(inputValue);
        var premier = tab.charAt(0).toUpperCase();
        var maj = premier + inputValue.slice(1).toLowerCase();
        var ecriture = document.body.appendChild(document.createElement('li')).innerHTML = maj;
        var html = document.getElementById('di').innerHTML = maj;
    }
});
document.getElementById('srcbtn').addEventListener('click', function () {
    var tablo = [];
    var filt = document.getElementById('filt');
    var valeurInput = document.getElementById('src').value.toLowerCase();
    var longeur = valeurInput.length;
    for (var i = 0; i < tableau.length; i++) {

        var element = tableau[i];
        var filter = element.indexOf(valeurInput);
        console.log(filter);
        if (filter === 0) {
            tablo.push(element);
            console.log(tablo);
            filt.innerHTML = tablo;
        }
    }
});
