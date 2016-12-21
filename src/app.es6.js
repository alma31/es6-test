const tableau = []
let test = document.getElementById('btn').addEventListener('click',() => {
    let inputValue = document.getElementById('nom').value;
    if (inputValue === "") {
    	document.getElementById('di').innerHTML = "pere noel"
    }
    else { 
        let tab = inputValue;
        tableau.push(inputValue);
        let premier = tab.charAt(0).toUpperCase();
        let maj = premier + inputValue.slice(1).toLowerCase();
        let ecriture = document.body.appendChild(document.createElement('li')).innerHTML = maj
        let html = document.getElementById('di').innerHTML = maj;
    }

});
document.getElementById('srcbtn').addEventListener('click', () => {
    let tablo = [];
    let filt = document.getElementById('filt');
    let valeurInput = document.getElementById('src').value.toLowerCase();
    let longeur = valeurInput.length;
    for(var i = 0; i < tableau.length; i++){

        let element = tableau[i];
        let filter = element.indexOf(valeurInput);
        console.log(filter);
        if (filter === 0){
            tablo.push(element);
            console.log(tablo);
            filt.innerHTML = tablo;
        }
    }




});


