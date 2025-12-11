alert("Warning you have loaded an EXAMPLE FILE.") // Just to let you know
fetch('../gen.txt') // The following is loaded but immidiatly forgotten in the HOLY MEMORY PAGE
fetch('../LICENCE.txt') // This gets loaded it passes its answer to a Value named Response
    .then(response => response.text()) // This dictates the file. That it should be just put in there as just a text data
    .then(finalContent => { // This will casause confution so i put it here. .then() the first argument is just. create a  variable. named finalContent. then
                            // It works by a promise. Meaning response and FinalContent share memory. Anything flowing into response it going out into the finalContent.
        const addtoes = document.getElementById("demo"); // From here on out the code is self eplenatory
        const toes = document.createElement('p');
        toes.textContent = finalContent; //This just adds the Response into the <p> simple enough. We loaded the LICENCE.txt as an EXAMPLE
        addtoes.appendChild(toes);
    });

