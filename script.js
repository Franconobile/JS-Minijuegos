const eleccionPcDisplay = document.getElementById('eleccion-pc');
const eleccionUsuarioDisplay = document.getElementById('eleccion-usuario');
const resultadoDisplay = document.getElementById('resultado-id');

let eleccionUsuario;
let eleccionPc;
let resultado;

const posiblesElecciones = document.querySelectorAll('button');

posiblesElecciones.forEach(posiblesElecciones => posiblesElecciones.addEventListener('click', (e) => {
    eleccionUsuario = e.target.id;
    eleccionUsuarioDisplay.innerHTML = eleccionUsuario;
    generarPcEleccion()
    obtenerResultado()
}))

function generarPcEleccion() {
    const randomNumero = Math.floor(Math.random() * 3) + 1;

    if(randomNumero === 1) {
        eleccionPc = 'Piedra';
    }

    if(randomNumero === 2) {
        eleccionPc = 'Papel';
    }

    if(randomNumero === 3) {
        eleccionPc = 'Tijera';
    }

    eleccionPcDisplay.innerHTML = eleccionPc;
}

function obtenerResultado() {
    if (eleccionPc === eleccionUsuario) {
        resultado = 'Es un empate :0';
        document.getElementById('resultado-id').style.color = "blue";
    }

    if (eleccionPc === 'Piedra' && eleccionUsuario === 'Papel') {
        resultado = 'Ganaste <3';
        document.getElementById('resultado-id').style.color = "green";
    }

    if (eleccionPc === 'Piedra' && eleccionUsuario === 'Tijera') {
        resultado = 'Perdiste :(';
        document.getElementById('resultado-id').style.color = "red";
    }

    if (eleccionPc === 'Papel' && eleccionUsuario === 'Tijera') {
        resultado = 'Ganaste <3';
        document.getElementById('resultado-id').style.color = "green";
    }

    if (eleccionPc === 'Papel' && eleccionUsuario === 'Piedra') {
        resultado = 'Perdiste :(';
        document.getElementById('resultado-id').style.color = "red";
    }

    if (eleccionPc === 'Tijera' && eleccionUsuario === 'Rock') {
        resultado = 'Ganaste <3';
        document.getElementById('resultado-id').style.color = "green";
    }

    if (eleccionPc === 'Tijera' && eleccionUsuario === 'Papel') {   
        resultado = 'Perdiste :(';
        document.getElementById('resultado-id').style.color = "red";
    }

    resultadoDisplay.innerHTML = resultado;
}

