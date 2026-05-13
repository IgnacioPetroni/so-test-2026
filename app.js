document.addEventListener('DOMContentLoaded', () => {
    // 1. Crear el botón de modo oscuro
    const btnTema = document.createElement('button');
    btnTema.textContent = '🌙 Modo Oscuro';
    btnTema.classList.add('btn-toggle');
    
    // Lo insertamos al principio del body
    document.body.prepend(btnTema);

    // 2. Evento Click para cambiar el modo
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            btnTema.textContent = '☀️ Modo Claro';
        } else {
            btnTema.textContent = '🌙 Modo Oscuro';
        }
    });

    // 3. Manejo del formulario (opcional, para que no recargue la página)
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Intento de login enviado!');
    });
});