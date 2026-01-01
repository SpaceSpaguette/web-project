async function home() {
    const loadjs = await fetch('\../data/home.json');
    const stream = await loadjs.json();
    // Taking our container. we inset our home
    const container = document.getElementById('container');
    container.innerHTML = '';    
    
    Object.entries(stream).forEach(([title, desc]) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <p class="title">${title}</p>
            <p class="desc">${desc}</p>
        `;
        container.appendChild(wrapper); // place it inside our div
    });}
home();