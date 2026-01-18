// We assign new function. named load-Page
async function load_page(site) {
    
    const file = await fetch('../data/' + site + '.json');
    const data = await file.json();
    
    const container = document.getElementById('container');
    const sidebar = document.getElementById('sidebar');
    
    container.innerHTML = "";
    sidebar.innerHTML = '';

    Object.entries(data).forEach(([key, value]) =>{
        const wrapper = document.createElement('div');
        const sidewrapper = document.createElement('div');
        wrapper.classList.add('site-wrapper');


        const legend = document.getElementById('sidebar');
        const container = document.getElementById('container');
        if (key === "img") {
            console.log(key);
            wrapper.innerHTML =`<img src="../img/${value[0]}" width="${value[1]}" height="${value[2]}">`;
            container.appendChild(wrapper);
        
        }
        else if (key === "title"){
            wrapper.innerHTML = `<h2 class"title">${value}</h2>`
            wrapper.classList.remove('site-wrapper');
            container.appendChild(wrapper);
        }
        else if (key ==="text") {
            var pattern = /\$\(([^)]+)\)([^$]+)\$/gm
            var out = value.toString().replace(pattern,'<span class="$1">$2</span>');
            out = out.replace(/\n/g, '<br>');
            console.log(out);

            let sideOut = key.toString().replace(/\n/g, '<br>');



            wrapper.innerHTML= `<p>${out}</p>`;
            sidewrapper.innerHTML= `<p>${sideOut}</p>`;
            container.appendChild(wrapper)
            let inter = 0;
            inter++
            console.log(inter)

            

        }
        
        
        
        else {
            var pattern = /\$\(([^)]+)\)([^$]+)\$/gm
            var out = value.toString().replace(pattern,'<span class="$1">$2</span>');
            out = out.replace(/\n/g, '<br>');
            console.log(out);

            let sideOut = key.toString().replace(/\n/g, '<br>');



            wrapper.innerHTML= `<p>${out}</p>`;
            sidewrapper.innerHTML= `<p>${sideOut}</p>`;
            sidebar.appendChild(sidewrapper)
            container.appendChild(wrapper)
            let inter = 0;
            inter++
            console.log(inter)

            
        };
        wrapper.append
    });
    modeswitch(true);

}

function modeswitch(mode) {
    Boolean(mode);
    if(mode === false) {
        document.getElementById('sidebar').style.display = "none";
    }else {
        document.getElementById('sidebar').style.display = "flex";
    }
}