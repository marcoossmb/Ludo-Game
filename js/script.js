let bienvenida = document.getElementById("bienvenida")
let tablero = document.getElementById("tablero")
let bienvenida__button = document.getElementById("bienvenida__button")
let juego = document.getElementById("juego")
let dado1 = document.getElementById("dado1")
let dado2 = document.getElementById("dado2")
let dado__button = document.getElementById("dado__button") 

bienvenida__button.addEventListener("click",()=>{
    bienvenida.classList.add("ocultar")
    tablero.classList.add("mostrar")
    juego.classList.add("mostrardados")
})
