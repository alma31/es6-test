let tableau = []
document.getElementById('btn').addEventListener('click', () => {
    let inputValue = document.getElementById('nom').value;
    if (inputValue === "") {
    	document.getElementById('di').innerHTML = "pere noel"
    }
    else { 
        let tab = document.body.appendChild(document.createElement('li')).innerHTML = inputValue;
        let html = document.getElementById('di').innerHTML = inputValue;
        tableau.push(inputValue);
        let premier = tab.charAt(0).toUpperCase();
        let maj = premier + inputValue.slice(1);
        let ecriture = tab + maj
        console.log(maj);

    }

});

