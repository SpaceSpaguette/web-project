async function load_page(site) {
    try {
        const response = await fetch('../data/' + site + '.json');
        const data = await response.json();
        
        const container = document.getElementById('container');
        const sidebar = document.getElementById('sidebar');
        
        // Clear previous content
        container.innerHTML = "";
        sidebar.innerHTML = '';

        Object.entries(data).forEach(([key, value]) => {
            const wrapper = document.createElement('div');
            const sidewrapper = document.createElement('div');
            wrapper.classList.add('site-wrapper');
            wrapper.id = key
            
            const formatText = (str) => {
                const pattern = /\$\(([^)]+)\)([^$]+)\$/gm;
                return str.toString()
                    .replace(pattern, '<span class="$1">$2</span>')
                    .replace(/\n/g, '<br>');
            };

            if (key === "img") {
                // value expected as [src, width, height]
                wrapper.innerHTML = `<img src="../img/${value[0]}" width="${value[1]}" height="${value[2]}" alt="${site} image">`;
                container.appendChild(wrapper);
            } 
            else if (key === "title") {
                wrapper.innerHTML = `<h2 class="title">${value}</h2>`;
                wrapper.classList.remove('site-wrapper');
                container.appendChild(wrapper);
            } 
            else if (key === "text") {
                wrapper.innerHTML = `<p>${formatText(value)}</p>`;
                container.appendChild(wrapper);
            } 
            else {
                // For any other keys, add to both sidebar (key) and container (value)
                wrapper.innerHTML = `<p>${formatText(value)}</p>`;
                sidewrapper.innerHTML = `<a href="#${key}">${key}</a>`;
                
                sidebar.appendChild(sidewrapper);
                container.appendChild(wrapper);
            }
        });

        modeswitch(true);
    } catch (error) {
        console.error("Error loading page data:", error);
    }
}

function modeswitch(mode) {
    const sidebar = document.getElementById('sidebar');
    if (!mode) {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
    }
}