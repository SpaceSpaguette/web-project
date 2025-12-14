alert("Warning you have loaded an EXAMPLE FILE.") // Just to let you know
fetch('../data/linuxtechtips.xml')
    .then(response => response.text()) 
    .then(rawContent => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rawContent, "application/xml");
        const preambleElement = xmlDoc.getElementsByTagName("id")[0];
        const preambleText = preambleElement.textContent;
        // This finds the pattern: $color_name text_to_color$
        const regex = /\$([a-zA-Z]+)\s(.*?)\$/g;
        
        
        // Transformation of the string
        
        // Replacement: We replace the matched string with a <span> tag.
        // $1 is the color name (e.g., 'blue').
        // $2 is the text content (e.g., 'colored text').
        const htmlContent = preambleText.replace(
            regex, 
            '<span class="$1">$2</span>'
        );
        
        // We build the thing
        
        const container = document.getElementById("demo"); 
        const element = document.createElement('p');
        
        element.innerHTML = htmlContent; 
        
        container.appendChild(element);
    });


const themeLink = document.getElementById('theme-link');
const swapButton = document.getElementById('theme-swap-btn');
let currentTheme = 'night'; 

function swapTheme() {
    if (currentTheme === 'day') {
        // Change to the Night theme
        themeLink.href = '../assets/themes/default.css';
        currentTheme = 'night';
        swapButton.textContent = 'Switch to Day Mode';
    } else {
        // Change back to the Day theme
        themeLink.href = '../assets/themes/light.css';
        currentTheme = 'day';
        swapButton.textContent = 'Toggle Night Mode';
    }
}

swapButton.addEventListener('click', swapTheme);
//