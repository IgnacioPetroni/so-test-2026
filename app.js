// Usamos este evento para asegurarnos de que el HTML cargó por completo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Creamos el botón
    const btnTema = document.createElement('button');
    btnTema.textContent = '🌙 Modo Oscuro';
    btnTema.classList.add('btn-toggle'); // Le damos una clase por si querés darle estilo

    // 2. Lo metemos al final del body
    document.body.appendChild(btnTema);

    // 3. La lógica del click
    btnTema.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Cambiamos el texto según el modo
        if (document.body.classList.contains('dark-mode')) {
            btnTema.textContent = '☀️ Modo Claro';
        } else {
            btnTema.textContent = '🌙 Modo Oscuro';
        }
    });
});