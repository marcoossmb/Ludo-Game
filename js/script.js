let bienvenida = document.getElementById("bienvenida")
let tablero = document.getElementById("tablero")
let bienvenida__button = document.getElementById("bienvenida__button")
let juego = document.getElementById("juego")
let dado1 = document.getElementById("dado1")
let dado2 = document.getElementById("dado2")
let dado__button = document.getElementById("dado__button") 
let fichasrojas = document.getElementById("fichasrojas") 
let fichasazules = document.getElementById("fichasazules") 
let fichasverdes = document.getElementById("fichasverdes") 
let fichasamarillas = document.getElementById("fichasamarillas") 
let algo = document.getElementById("algo")

let ficha1roja = document.getElementById("ficha1roja")
let ficha1azul = document.getElementById("ficha1azul")
let ficha1verde = document.getElementById("ficha1verde")
let ficha1amarilla = document.getElementById("ficha1amarilla")

let posiciones = [
    ["1", "674", "690"],
    ["2", "628", "690"],
    ["3", "585", "690"],
    ["4", "536", "690"],
    ["5", "490", "690"],
    ["6", "316", "752"],
    ["7", "430", "796"],
    ["8", "430", "840"],
    ["9", "430", "884"],
    ["10", "430", "928"],
    ["11", "350", "928"],
    ["12", "270", "928"],
    ["13", "270", "884"],
    ["14", "270", "840"],
    ["15", "270", "796"],
    ["16", "270", "752"],
    ["17", "211", "690"],
    ["18", "165", "690"],
    ["19", "118", "690"],
    ["20", "71", "690"],
    ["21", "25", "690"],
    ["22", "25", "620"],
    ["23", "25", "550"],
    ["24", "71", "550"],
    ["25", "118", "550"],
    ["26", "165", "550"],
    ["27", "211", "550"],
    ["28", "270", "485"],
    ["29", "270", "441"],
    ["30", "270", "397"],
    ["31", "270", "353"],
    ["32", "270", "309"],
    ["33", "350", "309"],
    ["34", "430", "309"],
    ["35", "430", "353"],
    ["36", "430", "397"],
    ["37", "430", "441"],
    ["38", "430", "485"],
    ["39", "493", "550"],
    ["40", "539", "550"],
    ["41", "585", "550"],
    ["42", "631", "550"],
    ["43", "674", "550"],
    ["44", "674", "620"],
    ["45", "631", "620"],
    ["46", "585", "620"],
    ["47", "539", "620"],
    ["48", "493", "620"],
    ["49", "445", "620"],
    ["50", "350", "884"],
    ["51", "350", "840"],
    ["52", "350", "796"],
    ["53", "350", "752"],
    ["54", "350", "708"],
    ["55", "71", "620"],
    ["56", "118", "620"],
    ["57", "165", "620"],
    ["58", "211", "620"],
    ["59", "260", "620"],
    ["60", "350", "884"],
    ["61", "350", "840"],
    ["62", "350", "796"],
    ["63", "350", "752"],
    ["64", "350", "708"]
]

let imagenesDado =["1dado.PNG","2dado.PNG","3dado.PNG","4dado.PNG","5dado.PNG","6dado.PNG",]

bienvenida__button.addEventListener("click",()=>{
    bienvenida.classList.add("ocultar")
    tablero.classList.add("mostrar")
    juego.classList.add("mostrardados")
    ficha1roja.classList.add("mostrarfichas")
    ficha1azul.classList.add("mostrarfichas")
    ficha1verde.classList.add("mostrarfichas")
    ficha1amarilla.classList.add("mostrarfichas")

    ficha1roja.classList.add("ficha1roja")
    ficha1azul.classList.add("ficha1azul")
    ficha1verde.classList.add("ficha1verde")
    ficha1amarilla.classList.add("ficha1amarilla")
})

let numDado1
let numDado2

let contTirada = 0

const lanzarDado = () => {
    let random1 = Math.floor(Math.random() * imagenesDado.length)
    let random2 = Math.floor(Math.random() * imagenesDado.length)

    dado1.src="/assets/images/"+imagenesDado[random1]
    dado2.src="/assets/images/"+imagenesDado[random2]

    numDado1 = parseInt(dado1.src.substring(36, 37))
    numDado2 = parseInt(dado2.src.substring(36, 37))
    
    sacarFichaCelda();
}

dado__button.addEventListener("click",()=>{
    lanzarDado();
})

let turnoActual = 0
let colores = ["amarillo", "azul", "rojo", "verde"]

const sacarFichaCelda = () => {
    let colorActual = colores[turnoActual]
    
    if (colorActual === "amarillo") {
        if (ficha1amarilla.classList.contains("val")) {
            if (numDado1 == 5 || numDado2 == 5) {
                ficha1amarilla.style.cssText = 'top:' + posiciones[2][1] + 'px; left:' + posiciones[2][2] + 'px;'
                ficha1amarilla.classList.remove("val")
            }
        }
    } else if (colorActual === "azul") {
        if (ficha1azul.classList.contains("val")) {
            if (numDado1 == 5 || numDado2 == 5) {
                ficha1azul.style.cssText = 'top:' + posiciones[13][1] + 'px; left:' + posiciones[13][2] + 'px;'
                ficha1azul.classList.remove("val")
            }
        }
    } else if (colorActual === "rojo") {
        if (ficha1roja.classList.contains("val")) {
            if (numDado1 == 5 || numDado2 == 5) {
                ficha1roja.style.cssText = 'top:' + posiciones[24][1] + 'px; left:' + posiciones[24][2] + 'px;'
                ficha1roja.classList.remove("val")
            }
        }
    } else if (colorActual === "verde") {
        if (ficha1verde.classList.contains("val")) {
            if (numDado1 == 5 || numDado2 == 5) {
                ficha1verde.style.cssText = 'top:' + posiciones[35][1] + 'px; left:' + posiciones[35][2] + 'px;'
                ficha1verde.classList.remove("val")
            }
        }
    }
    turnoActual = (turnoActual + 1) % colores.length
}