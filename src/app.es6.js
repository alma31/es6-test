let tableau = []
document.getElementById('btn').addEventListener('click', () => {
    let inputValue = document.getElementById('nom').value;
    if (inputValue === "") {
    	document.getElementById('di').innerHTML = "pere noel"
    }
    else { 
        let tab = inputValue;
        tableau.push(inputValue);
        let premier = tab.charAt(0).toUpperCase();
        let maj = premier + inputValue.slice(1);
        let ecriture = document.body.appendChild(document.createElement('li')).innerHTML = maj
        let html = document.getElementById('di').innerHTML = maj;
    }

});

