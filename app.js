const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

const textoRojo = document.getElementById('t-rojo')
const textoVerde = document.getElementById('t-verde')
const textoAzul = document.getElementById('t-azul')

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor (rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', (e) =>{
    let rojo = e.target.value;
    textoRojo.innerText = rojo
    actualizarColor(rojo, verde, azul);
})