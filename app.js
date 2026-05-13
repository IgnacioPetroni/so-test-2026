'use strict';

const contenedor = document.querySelector('#div');

const btnTema = document.createElement('button');
btnTema.textContent = '🌒';

contenedor.appendChild(btnTema);

btnTema.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        btnTema.textContent = '🔦';
    } else {
        btnTema.textContent = '🌒';
    }
});