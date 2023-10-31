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
    ["1", "657", "385"],
    ["2", "610", "385"],
    ["3", "563", "385"],
    ["4", "517", "385"],
    ["5", "470", "385"],
    ["6", "405", "445"],
    ["7", "405", "489"],
    ["8", "405", "533"],
    ["9", "405", "577"],
    ["10", "405", "621"],
    ["11", "330", "621"],
    ["12", "250", "621"],
    ["13", "250", "577"],
    ["14", "250", "533"],
    ["15", "250", "489"],
    ["16", "250", "445"],
    ["17", "189", "385"],
    ["18", "142", "385"],
    ["19", "96", "385"],
    ["20", "49", "385"],
    ["21", "2", "385"],
    ["22", "2", "310"],
    ["23", "2", "240"],
    ["24", "49", "240"],
    ["25", "96", "240"],
    ["26", "142", "240"],   
    ["27", "189", "240"],
    ["28", "250", "177"],
    ["29", "250", "133"],
    ["30", "250", "89"],
    ["31", "250", "45"],
    ["32", "250", "1"],
    ["33", "330", "1"],
    ["34", "405", "1"],
    ["35", "405", "45"],
    ["36", "405", "89"],
    ["37", "405", "133"],
    ["38", "405", "177"],
    ["39", "470", "240"],
    ["40", "517", "240"],
    ["41", "563", "240"],
    ["42", "610", "240"],
    ["43", "657", "240"],
    ["44", "657", "310"],
    ["45", "610", "310"],
    ["46", "563", "310"],
    ["47", "517", "310"],
    ["48", "470", "310"],
    ["49", "420", "310"],
    ["50", "420", "310"],
    ["51", "420", "310"],
    ["52", "420", "310"],
    ["53", "420", "310"],
    ["54", "420", "310"],
    ["55", "420", "310"],
    ["56", "420", "310"],
    ["57", "420", "310"],
    ["58", "420", "310"],
    ["59", "420", "310"],
    ["60", "420", "310"]
]
let posicionesAzul = [
    ["14", "250", "533"],
    ["15", "250", "489"],
    ["16", "250", "445"],
    ["17", "189", "385"],
    ["18", "142", "385"],
    ["19", "96", "385"],
    ["20", "49", "385"],
    ["21", "2", "385"],
    ["22", "2", "310"],
    ["23", "2", "240"],
    ["24", "49", "240"],
    ["25", "96", "240"],
    ["26", "142", "240"],   
    ["27", "189", "240"],
    ["28", "250", "177"],
    ["29", "250", "133"],
    ["30", "250", "89"],
    ["31", "250", "45"],
    ["32", "250", "1"],
    ["33", "330", "1"],
    ["34", "405", "1"],
    ["35", "405", "45"],
    ["36", "405", "89"],
    ["37", "405", "133"],
    ["38", "405", "177"],
    ["39", "470", "240"],
    ["40", "517", "240"],
    ["41", "563", "240"],
    ["42", "610", "240"],
    ["43", "657", "240"],
    ["44", "657", "310"],
    ["1", "657", "385"],
    ["2", "610", "385"],
    ["3", "563", "385"],
    ["4", "517", "385"],
    ["5", "470", "385"],
    ["6", "405", "445"],
    ["7", "405", "489"],
    ["8", "405", "533"],
    ["9", "405", "577"],
    ["10", "405", "621"],
    ["11", "330", "621"],
    ["50", "330", "577"],
    ["51", "330", "533"],
    ["52", "330", "489"],
    ["53", "330", "445"],
    ["54", "330", "400"],
    ["55", "330", "400"],
    ["56", "330", "400"],
    ["57", "330", "400"],
    ["58", "330", "400"],
    ["59", "330", "400"],
    ["60", "330", "400"],
    ["61", "330", "400"],
    ["62", "330", "400"],
    ["63", "330", "400"],
    ["64", "330", "400"],
    ["65", "330", "400"]
]
let posicionesRojo = [
    ["25", "96", "240"],
    ["26", "142", "240"],   
    ["27", "189", "240"],
    ["28", "250", "177"],
    ["29", "250", "133"],
    ["30", "250", "89"],
    ["31", "250", "45"],
    ["32", "250", "1"],
    ["33", "330", "1"],
    ["34", "405", "1"],
    ["35", "405", "45"],
    ["36", "405", "89"],
    ["37", "405", "133"],
    ["38", "405", "177"],
    ["39", "470", "240"],
    ["40", "517", "240"],
    ["41", "563", "240"],
    ["42", "610", "240"],
    ["43", "657", "240"],
    ["44", "657", "310"],
    ["1", "657", "385"],
    ["2", "610", "385"],
    ["3", "563", "385"],
    ["4", "517", "385"],
    ["5", "470", "385"],
    ["6", "405", "445"],
    ["7", "405", "489"],
    ["8", "405", "533"],
    ["9", "405", "577"],
    ["10", "405", "621"],
    ["11", "330", "621"],
    ["12", "250", "621"],
    ["13", "250", "577"],
    ["14", "250", "533"],
    ["15", "250", "489"],
    ["16", "250", "445"],
    ["17", "189", "385"],
    ["18", "142", "385"],
    ["19", "96", "385"],
    ["20", "49", "385"],
    ["21", "2", "385"],
    ["22", "2", "310"],
    ["55", "49", "310"],
    ["56", "96", "310"],
    ["57", "142", "310"],
    ["58", "189", "310"],
    ["59", "239", "310"],
    ["60", "239", "310"],
    ["61", "239", "310"],
    ["62", "239", "310"],
    ["63", "239", "310"],
    ["64", "239", "310"],
    ["65", "239", "310"],
    ["66", "239", "310"],
    ["67", "239", "310"],
    ["68", "239", "310"],
    ["69", "239", "310"],
    ["70", "239", "310"]
]
let posicionesVerde = [
    ["36", "405", "89"],
    ["37", "405", "133"],
    ["38", "405", "177"],
    ["39", "470", "240"],
    ["40", "517", "240"],
    ["41", "563", "240"],
    ["42", "610", "240"],
    ["43", "657", "240"],
    ["44", "657", "310"],
    ["1", "657", "385"],
    ["2", "610", "385"],
    ["3", "563", "385"],
    ["4", "517", "385"],
    ["5", "470", "385"],
    ["6", "405", "445"],
    ["7", "405", "489"],
    ["8", "405", "533"],
    ["9", "405", "577"],
    ["10", "405", "621"],
    ["11", "330", "621"],
    ["12", "250", "621"],
    ["13", "250", "577"],
    ["14", "250", "533"],
    ["15", "250", "489"],
    ["16", "250", "445"],
    ["17", "189", "385"],
    ["18", "142", "385"],
    ["19", "96", "385"],
    ["20", "49", "385"],
    ["21", "2", "385"],
    ["22", "2", "310"],
    ["23", "2", "240"],
    ["24", "49", "240"],
    ["25", "96", "240"],
    ["26", "142", "240"],   
    ["27", "189", "240"],
    ["28", "250", "177"],
    ["29", "250", "133"],
    ["30", "250", "89"],
    ["31", "250", "45"],
    ["32", "250", "1"],
    ["33", "330", "1"],
    ["60", "330", "45"],
    ["61", "330", "89"],
    ["62", "330", "133"],
    ["63", "330", "177"],
    ["64", "330", "227"],
    ["65", "330", "227"],
    ["66", "330", "227"],
    ["67", "330", "227"],
    ["68", "330", "227"],
    ["69", "330", "227"],
    ["70", "330", "227"],
    ["71", "330", "227"],
    ["72", "330", "227"],
    ["73", "330", "227"],
    ["74", "330", "227"],
    ["75", "330", "227"]
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

    dado1.src="./assets/images/"+imagenesDado[random1]
    dado2.src="./assets/images/"+imagenesDado[random2]

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

    } else 
        if (colorActual == "amarillo") {
            
            if (posicionesAmarillo && posActAmarillo !== undefined) {
                let nuevaPosAmarillo = posActAmarillo+numDado1+numDado2
                
                if (nuevaPosAmarillo < posicionesAmarillo.length) {   
                    posActAmarillo = nuevaPosAmarillo
                    ficha.style.cssText = 'top:' + posicionesAmarillo[nuevaPosAmarillo][1] + 'px; left:' + posicionesAmarillo[nuevaPosAmarillo][2] + 'px;'
                } else {
                    turnoActual = (turnoActual + 1) % colores.length
                    let index = colores.indexOf("amarillo")

                    if (index !== -1) {
                        colores.splice(index, 1)
                    }
                }
            }
      
    } else
        if (colorActual == "azul") {
            
            if (posicionesAzul && posActAzul !== undefined) {
                let nuevaPosAzul = posActAzul+numDado1+numDado2
                
                if (nuevaPosAzul < posicionesAzul.length) {
                    posActAzul= nuevaPosAzul
                    ficha.style.cssText = 'top:' + posicionesAzul[nuevaPosAzul][1] + 'px; left:' + posicionesAzul[nuevaPosAzul][2] + 'px;'
                } else {
                    turnoActual = (turnoActual + 1) % colores.length
                    let index = colores.indexOf("azul")

                    if (index !== -1) {
                        colores.splice(index, 1)
                }
            }
        }            
    } else 
        if (colorActual == "roja") {
            
            if (posicionesRojo && posActRojo !== undefined) {
                let nuevaPosRojo = posActRojo+numDado1+numDado2
                
                if (nuevaPosRojo < posicionesRojo.length) {  
                    posActRojo= nuevaPosRojo
                    ficha.style.cssText = 'top:' + posicionesRojo[nuevaPosRojo][1] + 'px; left:' + posicionesRojo[nuevaPosRojo][2] + 'px;'
                } else {
                    turnoActual = (turnoActual + 1) % colores.length
                    let index = colores.indexOf("roja")

                    if (index !== -1) {
                        colores.splice(index, 1)
                }
            }           
        }
    } else 
        if (colorActual == "verde") {
            
            if (posicionesVerde && posActVerde !== undefined) {                
                let nuevaPosVerde = posActVerde + numDado1 + numDado2
                
                if (nuevaPosVerde < posicionesVerde.length) {
                    posActVerde = nuevaPosVerde
                    ficha.style.cssText = 'top:' + posicionesVerde[nuevaPosVerde][1] + 'px; left:' + posicionesVerde[nuevaPosVerde][2] + 'px;'
                } else {
                    turnoActual = (turnoActual + 1) % colores.length
                    let index = colores.indexOf("verde")

                    if (index !== -1) {
                        colores.splice(index, 1)
                }
            }
        }           
    }
    turnoActual = (turnoActual + 1) % colores.length;
}