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





function parseText(text) {
}