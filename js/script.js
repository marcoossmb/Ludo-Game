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

let posicionesAmarillo = [
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
    ["49", "445", "620"]
]
let posicionesAzul = [
    ["1", "270", "840"],
    ["2", "270", "796"],
    ["3", "270", "752"],
    ["4", "211", "690"],
    ["5", "165", "690"],
    ["6", "118", "690"],
    ["7", "71", "690"],
    ["8", "25", "690"],
    ["9", "25", "620"],
    ["10", "25", "550"],
    ["11", "71", "550"],
    ["12", "118", "550"],
    ["13", "165", "550"],
    ["14", "211", "550"],
    ["15", "270", "485"],
    ["16", "270", "441"],
    ["17", "270", "397"],
    ["18", "270", "353"],
    ["19", "270", "309"],
    ["20", "350", "309"],
    ["21", "430", "309"],
    ["22", "430", "353"],
    ["23", "430", "397"],
    ["24", "430", "441"],
    ["25", "430", "485"],
    ["26", "493", "550"],
    ["27", "539", "550"],
    ["28", "585", "550"],
    ["29", "631", "550"],
    ["30", "674", "550"],
    ["31", "674", "620"],
    ["32", "674", "690"],
    ["33", "628", "690"],
    ["34", "585", "690"],
    ["35", "536", "690"],
    ["36", "490", "690"],
    ["37", "316", "752"],
    ["38", "430", "796"],
    ["39", "430", "840"],
    ["40", "430", "884"],
    ["41", "430", "928"],
    ["42", "350", "928"],
    ["43", "350", "884"],
    ["44", "350", "840"],
    ["45", "350", "796"],
    ["46", "350", "752"],
    ["47", "350", "708"]
]


let posicionesRojo = [
    ["1", "118", "550"],
    ["2", "165", "550"],
    ["3", "211", "550"],
    ["4", "270", "485"],
    ["5", "270", "441"],
    ["6", "270", "397"],
    ["7", "270", "353"],
    ["8", "270", "309"],
    ["9", "350", "309"],
    ["10", "430", "309"],
    ["11", "430", "353"],
    ["12", "430", "397"],
    ["13", "430", "441"],
    ["14", "430", "485"],
    ["15", "493", "550"],
    ["16", "539", "550"],
    ["17", "585", "550"],
    ["18", "631", "550"],
    ["19", "674", "550"],
    ["20", "674", "620"],
    ["21", "674", "690"],
    ["22", "628", "690"],
    ["23", "585", "690"],
    ["24", "536", "690"],
    ["25", "490", "690"],
    ["26", "316", "752"],
    ["27", "430", "796"],
    ["28", "430", "840"],
    ["29", "430", "884"],
    ["30", "430", "928"],
    ["31", "350", "928"],
    ["32", "270", "928"],
    ["33", "270", "884"],
    ["34", "270", "840"],
    ["35", "270", "796"],
    ["36", "270", "752"],
    ["37", "211", "690"],
    ["38", "165", "690"],
    ["39", "118", "690"],
    ["40", "71", "690"],
    ["41", "25", "690"],
    ["42", "25", "620"],
    ["43", "71", "620"],
    ["44", "118", "620"],
    ["45", "165", "620"],
    ["46", "211", "620"],
    ["47", "260", "620"]
]

let posicionesVerde = [
    ["1", "430", "397"],
    ["2", "430", "441"],
    ["3", "430", "485"],
    ["4", "493", "550"],
    ["5", "539", "550"],
    ["6", "585", "550"],
    ["7", "631", "550"],
    ["8", "674", "550"],
    ["9", "674", "620"],
    ["10", "674", "690"],
    ["11", "628", "690"],
    ["12", "585", "690"],
    ["13", "536", "690"],
    ["14", "490", "690"],
    ["15", "316", "752"],
    ["16", "430", "796"],
    ["17", "430", "840"],
    ["18", "430", "884"],
    ["19", "430", "928"],
    ["20", "350", "928"],
    ["21", "270", "928"],
    ["22", "270", "884"],
    ["23", "270", "840"],
    ["24", "270", "796"],
    ["25", "270", "752"],
    ["26", "211", "690"],
    ["27", "165", "690"],
    ["28", "118", "690"],
    ["29", "71", "690"],
    ["30", "25", "690"],
    ["31", "25", "620"],
    ["32", "25", "550"],
    ["33", "71", "550"],
    ["34", "118", "550"],
    ["35", "165", "550"],
    ["36", "211", "550"],
    ["37", "270", "485"],
    ["38", "270", "441"],
    ["39", "270", "397"],
    ["40", "270", "353"],
    ["41", "270", "309"],
    ["42", "350", "309"],
    ["43", "350", "352"],
    ["44", "350", "395"],
    ["45", "350", "438"],
    ["46", "350", "481"],
    ["47", "350", "530"]
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
    
    moverFicha(numDado1, numDado2);
}

dado__button.addEventListener("click",()=>{
    lanzarDado();
})

let turnoActual = 0
let colores = ["amarillo", "azul", "roja", "verde"]
let posActAmarillo = 2
let posActAzul = 0
let posActRojo = 0
let posActVerde = 0

const moverFicha = (numDado1, numDado2) => {
    const colorActual = colores[turnoActual]
    let ficha
  
    switch (colorActual) {
      case "amarillo":
        ficha = ficha1amarilla
        break;
      case "azul":
        ficha = ficha1azul
        break;
      case "roja":
        ficha = ficha1roja
        break;
      case "verde":
        ficha = ficha1verde
        break;
      default:
        break;
    }
    
    if (ficha && ficha.classList.contains("val")) {
      if (numDado1 === 5 || numDado2 === 5) {

        if (colorActual == "amarillo") {
            ficha.style.cssText = 'top:' + posicionesAmarillo[2][1] + 'px; left:' + posicionesAmarillo[2][2] + 'px;'
        } else if (colorActual == "azul"){
            ficha.style.cssText = 'top:' + posicionesAmarillo[13][1] + 'px; left:' + posicionesAmarillo[13][2] + 'px;'
        } else if (colorActual == "roja") {
            ficha.style.cssText = 'top:' + posicionesAmarillo[24][1] + 'px; left:' + posicionesAmarillo[24][2] + 'px;'
        } else if (colorActual == "verde") {
            ficha.style.cssText = 'top:' + posicionesAmarillo[35][1] + 'px; left:' + posicionesAmarillo[35][2] + 'px;'
        }

        ficha.classList.remove("val");
      }

    } else if (colorActual == "amarillo" && posActAmarillo < posicionesAmarillo.length) {
        posActAmarillo= posActAmarillo+numDado1+numDado2
        ficha.style.cssText = 'top:' + posicionesAmarillo[posActAmarillo][1] + 'px; left:' + posicionesAmarillo[posActAmarillo][2] + 'px;'
        console.log(posActAmarillo)
    } else if (colorActual == "azul" && posActAzul < posicionesAzul.length) {
        posActAzul= posActAzul+numDado1+numDado2
        ficha.style.cssText = 'top:' + posicionesAzul[posActAzul][1] + 'px; left:' + posicionesAzul[posActAzul][2] + 'px;'
        console.log(posActAzul)
    } else if (colorActual == "roja" && posActRojo < posicionesRojo.length) {
        posActRojo= posActRojo+numDado1+numDado2
        ficha.style.cssText = 'top:' + posicionesRojo[posActRojo][1] + 'px; left:' + posicionesRojo[posActRojo][2] + 'px;'
        console.log(posActRojo)
    } else if (colorActual == "verde" && posActVerde < posicionesVerde.length) {
        posActVerde= posActVerde+numDado1+numDado2
        ficha.style.cssText = 'top:' + posicionesVerde[posActVerde][1] + 'px; left:' + posicionesVerde[posActVerde][2] + 'px;'
        console.log(posActVerde)
    }
    turnoActual = (turnoActual + 1) % colores.length;
  }