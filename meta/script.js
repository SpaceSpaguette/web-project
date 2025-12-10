alert("Warning you have loaded an EXAMPLE FILE.") // Just to let you know
fetch('../gen.txt') //What we have learned. 
fetch('../LICENCE.txt') 
    .then(response => response.text())
    .then(finalContent => {
        const addtoes = document.getElementById("demo"); 
        const toes = document.createElement('p');
        toes.textContent = finalContent; 
        addtoes.appendChild(toes);
    });