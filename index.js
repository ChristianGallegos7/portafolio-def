let toggle = document.getElementById('toggle');

toggle.addEventListener('change', (e) => {
    let checked = e.target.checked
    document.header.classList.toggle('claro');

})