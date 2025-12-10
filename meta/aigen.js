// Function to fetch and process the XML file
function loadXMLContent() {
    fetch('doc.xml')
        .then(response => response.text()) 
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            const preambleElement = xmlDoc.getElementsByTagName("preamble")[0];
            const preambleText = preambleElement.textContent;










            
            const body = document.body;
            body.innerHTML = '';
            const newParagraph = document.createElement('p');       // The element
            newParagraph.style.fontSize = '2em';
            newParagraph.style.textAlign = 'center';
            newParagraph.textContent = preambleText;
            body.appendChild(newParagraph);
        });
}
loadXMLContent();