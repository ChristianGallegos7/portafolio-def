document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('area').value;

        if (name === '' || email === '' || message === '') {
            alert('Todos los campos son obligatorios');
            return false;
        } else {
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('area').value = '';
        }

    });
});



let cadena = 'gato';
let cadenaReversa = cadena.split('').reverse().join();

console.log(cadenaReversa)
