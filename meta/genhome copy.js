async function renderDistroPage() {
    const response = await fetch('distrochoose.json');
    const data = await response.json();
    const container = document.body;

    // Regex: Matches any key that contains "img" and "obj" separated by a hyphen
    const imgKeyRegex = /^img-obj/i;

    Object.entries(data).forEach(([key, value]) => {
        const wrapper = document.createElement('div');

        // 1. Use Regex to test the KEY
        if (imgKeyRegex.test(key)) {
            // value[0] is location, value[1] is class
            const imgLoc = value[0];
            const imgClass = value[1];
            
            wrapper.innerHTML = `<img src="${imgLoc}" class="${imgClass}" alt="distro graphic">`;
        } 
        // 2. Standard Logic for other keys
        else if (key === "title") {
            wrapper.innerHTML = `<h1>${value}</h1>`;
        } else {
            wrapper.innerHTML = `<h2>${key}</h2><p>${value}</p>`;
        }

        container.appendChild(wrapper);
    });
}                                                                                             