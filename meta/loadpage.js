// We assign new function. named load-Page
async function load_page(site) {
    
    const file = await fetch('../data/' + site + '.json');
    const data = await file.json();
    
    const container = document.getElementById('container');
    //container.innerHTML = alert(site)
    document.getElementById('sidebar').innerHTML = ''


    Object.entries(data).forEach(([key, value]) =>{
        const legend = document.getElementById('sidebar');
        const container = document.getElementById('container');
        if (key === "img") {
            console.log(key);
        } else {
            var pattern = /\$\(([^)]+)\)([^$]+)\$/gm
            const out = value.toString().replace(pattern,'<span class="$1">$2</span>');
            console.log(out);
        };
    });
    modeswitch(false);

}

function modeswitch(mode) {
    Boolean(mode);
    if(mode === false) {
        document.getElementById('sidebar').style.display = "none";
    }else {
        document.getElementById('sidebar').style.display = "flex";
    }
}