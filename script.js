document.addEventListener('DOMContentLoaded', () => {
    // Generar corazones flotantes
    for(let i = 0; i < 50; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'corazon-flotante';
        corazon.style.left = Math.random() * 100 + '%';
        corazon.style.top = Math.random() * 100 + '%';
        corazon.innerHTML = ['💖', '💝', '💞'][Math.floor(Math.random() * 3)];
        document.body.appendChild(corazon);
    }

    // Configurar contador de tiempo
    const fechaInicio = new Date('2025-04-30');
    
    function actualizarContador() {
        const ahora = new Date();
        const diferencia = ahora - fechaInicio;
        
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('contador').innerHTML = 
            `${dias} días, ${horas} horas, ${minutos} minutos`;
    }

    setInterval(actualizarContador, 1000);
    actualizarContador();
});

// Función para mensajes secretos
function mostrarMensajeSecreto() {
    const mensajes = [
        "Eres mi persona favorita en el mundo entero 🌍",
        "Me haces más feliz que salir de fiesta 🎉",
        "Quiero despertar contigo todos mis días ☀️",
        "Eres la mejor persona que eh podido conocer 💖",
    ];
    
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    alert(mensajeAleatorio);
}