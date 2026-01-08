async function home() {
    const loadjs = await fetch('\../data/home.json');
    const stream = await loadjs.json();
    // Taking our container. we inset our home
    const container = document.getElementById('container');
    container.innerHTML = ''; 
    
    Object.entries(stream).forEach(([title, desc]) => { // for every title and key we generate a proper object
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper')
        String(desc[1]);
        wrapper.innerHTML = `
            <div class="header-row">
                <p class='title'>${title}</p>
                <p class="loadpgbtn" onClick="load_page(${"'" + desc[1] + "'"})"> ${desc[1]} </p>
            </div>
            <p class="desc"> ${desc[0]} </p> 
        `; //just the objects doing their job
        container.appendChild(wrapper); // place it inside our div
    });}
home();