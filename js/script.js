let bienvenida = document.getElementById("bienvenida")
let tablero = document.getElementById("tablero")
let bienvenida__button = document.getElementById("bienvenida__button")
let juego = document.getElementById("juego")
let dado1 = document.getElementById("dado1")
let dado2 = document.getElementById("dado2")
let dado__button = document.getElementById("dado__button") 
let ganador = document.getElementById("ganador")
let ganador__text = document.getElementById("ganador__text")
let ganador__button = document.getElementById("ganador__button")
let ganador__h2 = document.getElementById("ganador__h2")

let ficha1roja = document.getElementById("ficha1roja")
let ficha1azul = document.getElementById("ficha1azul")
let ficha1verde = document.getElementById("ficha1verde")
let ficha1amarilla = document.getElementById("ficha1amarilla")

let circulo__rojo = document.getElementById("circulo__rojo")
let circulo__azul = document.getElementById("circulo__azul")
let circulo__verde = document.getElementById("circulo__verde")
let circulo__amarillo = document.getElementById("circulo__amarillo")

// Creo un array para las posiciones de cada ficha 
// ya que las fichas amarillas no entran en las casillas 
// de color azul ni rojo ni verde y viceversa
let posicionesAmarillo = [
    ["1", "657", "385"], ["2", "610", "385"], ["3", "563", "385"], ["4", "517", "385"], ["5", "470", "385"],
    ["6", "405", "445"], ["7", "405", "489"], ["8", "405", "533"], ["9", "405", "577"], ["10", "405", "621"],
    ["11", "330", "621"], ["12", "250", "621"], ["13", "250", "577"], ["14", "250", "533"], ["15", "250", "489"],
    ["16", "250", "445"], ["17", "189", "385"], ["18", "142", "385"], ["19", "96", "385"], ["20", "49", "385"],
    ["21", "2", "385"], ["22", "2", "310"], ["23", "2", "240"], ["24", "49", "240"], ["25", "96", "240"],
    ["26", "142", "240"], ["27", "189", "240"], ["28", "250", "177"], ["29", "250", "133"], ["30", "250", "89"],
    ["31", "250", "45"], ["32", "250", "1"], ["33", "330", "1"], ["34", "405", "1"], ["35", "405", "45"],
    ["36", "405", "89"], ["37", "405", "133"], ["38", "405", "177"], ["39", "470", "240"], ["40", "517", "240"],
    ["41", "563", "240"], ["42", "610", "240"], ["43", "657", "240"], ["44", "657", "310"], ["45", "610", "310"],
    ["46", "563", "310"], ["47", "517", "310"], ["48", "470", "310"], ["49", "420", "310"], ["50", "420", "310"],
    ["51", "420", "310"], ["52", "420", "310"], ["53", "420", "310"], ["54", "420", "310"], ["55", "420", "310"],
    ["56", "420", "310"], ["57", "420", "310"], ["58", "420", "310"], ["59", "420", "310"], ["60", "420", "310"]
]
let posicionesAzul = [
    ["14", "250", "533"], ["15", "250", "489"], ["16", "250", "445"], ["17", "189", "385"], ["18", "142", "385"],
    ["19", "96", "385"], ["20", "49", "385"], ["21", "2", "385"], ["22", "2", "310"], ["23", "2", "240"],
    ["24", "49", "240"], ["25", "96", "240"], ["26", "142", "240"], ["27", "189", "240"], ["28", "250", "177"],
    ["29", "250", "133"], ["30", "250", "89"], ["31", "250", "45"], ["32", "250", "1"], ["33", "330", "1"],
    ["34", "405", "1"], ["35", "405", "45"], ["36", "405", "89"], ["37", "405", "133"], ["38", "405", "177"],
    ["39", "470", "240"], ["40", "517", "240"], ["41", "563", "240"], ["42", "610", "240"], ["43", "657", "240"],
    ["44", "657", "310"], ["1", "657", "385"], ["2", "610", "385"], ["3", "563", "385"], ["4", "517", "385"],
    ["5", "470", "385"], ["6", "405", "445"], ["7", "405", "489"], ["8", "405", "533"], ["9", "405", "577"],
    ["10", "405", "621"], ["11", "330", "621"], ["50", "330", "577"], ["51", "330", "533"], ["52", "330", "489"],
    ["53", "330", "445"], ["54", "330", "400"], ["55", "330", "400"], ["56", "330", "400"], ["57", "330", "400"],
    ["58", "330", "400"], ["59", "330", "400"], ["60", "330", "400"], ["61", "330", "400"], ["62", "330", "400"],
    ["63", "330", "400"], ["64", "330", "400"], ["65", "330", "400"]
]
let posicionesRojo = [
    ["25", "96", "240"], ["26", "142", "240"], ["27", "189", "240"], ["28", "250", "177"], ["29", "250", "133"],
    ["30", "250", "89"], ["31", "250", "45"], ["32", "250", "1"], ["33", "330", "1"], ["34", "405", "1"],
    ["35", "405", "45"], ["36", "405", "89"], ["37", "405", "133"], ["38", "405", "177"], ["39", "470", "240"],
    ["40", "517", "240"], ["41", "563", "240"], ["42", "610", "240"], ["43", "657", "240"], ["44", "657", "310"],
    ["1", "657", "385"], ["2", "610", "385"], ["3", "563", "385"], ["4", "517", "385"], ["5", "470", "385"],
    ["6", "405", "445"], ["7", "405", "489"], ["8", "405", "533"], ["9", "405", "577"], ["10", "405", "621"],
    ["11", "330", "621"], ["12", "250", "621"], ["13", "250", "577"], ["14", "250", "533"], ["15", "250", "489"],
    ["16", "250", "445"], ["17", "189", "385"], ["18", "142", "385"], ["19", "96", "385"], ["20", "49", "385"],
    ["21", "2", "385"], ["22", "2", "310"], ["55", "49", "310"], ["56", "96", "310"], ["57", "142", "310"],
    ["58", "189", "310"], ["59", "239", "310"], ["60", "239", "310"], ["61", "239", "310"], ["62", "239", "310"],
    ["63", "239", "310"], ["64", "239", "310"], ["65", "239", "310"], ["66", "239", "310"], ["67", "239", "310"],
    ["68", "239", "310"], ["69", "239", "310"], ["70", "239", "310"]
]
let posicionesVerde = [
    ["36", "405", "89"], ["37", "405", "133"], ["38", "405", "177"], ["39", "470", "240"], ["40", "517", "240"],
    ["41", "563", "240"], ["42", "610", "240"], ["43", "657", "240"], ["44", "657", "310"], ["1", "657", "385"],
    ["2", "610", "385"], ["3", "563", "385"], ["4", "517", "385"], ["5", "470", "385"], ["6", "405", "445"],
    ["7", "405", "489"], ["8", "405", "533"], ["9", "405", "577"], ["10", "405", "621"], ["11", "330", "621"],
    ["12", "250", "621"], ["13", "250", "577"], ["14", "250", "533"], ["15", "250", "489"], ["16", "250", "445"],
    ["17", "189", "385"], ["18", "142", "385"], ["19", "96", "385"], ["20", "49", "385"], ["21", "2", "385"],
    ["22", "2", "310"], ["23", "2", "240"], ["24", "49", "240"], ["25", "96", "240"], ["26", "142", "240"],
    ["27", "189", "240"], ["28", "250", "177"], ["29", "250", "133"], ["30", "250", "89"], ["31", "250", "45"],
    ["32", "250", "1"], ["33", "330", "1"], ["60", "330", "45"], ["61", "330", "89"], ["62", "330", "133"],
    ["63", "330", "177"], ["64", "330", "227"], ["65", "330", "227"], ["66", "330", "227"], ["67", "330", "227"],
    ["68", "330", "227"], ["69", "330", "227"], ["70", "330", "227"], ["71", "330", "227"], ["72", "330", "227"],
    ["73", "330", "227"], ["74", "330", "227"], ["75", "330", "227"]
]

let imagenesDado =["1dado.PNG","2dado.PNG","3dado.PNG","4dado.PNG","5dado.PNG","6dado.PNG",]

// Oculto el menú de bienvenida y muestro el tablero y el juego
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

let numDado1 = 0
let numDado2 = 0

let contTirada = 0

// Función que cuando le das click al botón "lanzar"
// genera numeros random para sacar dos dados aleatorios
const lanzarDado = () => {
    let random1 = Math.floor(Math.random() * imagenesDado.length)
    let random2 = Math.floor(Math.random() * imagenesDado.length)

    dado1.src="./assets/images/"+imagenesDado[random1]
    dado2.src="./assets/images/"+imagenesDado[random2]

    numDado1 = parseInt(imagenesDado[random1].substring(0,1))
    numDado2 = parseInt(imagenesDado[random2].substring(0,1))
    
    moverFicha(numDado1, numDado2);
}

let turnoActual = 0
let colores = ["amarillo", "azul", "roja", "verde"]
let posActAmarillo = 2
let posActAzul = 0
let posActRojo = 0
let posActVerde = 0

// Función que utilizo para saber en que turno estamos y
// dependiendo de eso hacer una cosa u otra
const moverFicha = (numDado1, numDado2) => {
    const colorActual = colores[turnoActual]    
    let ficha
  
    switch (colorActual) {
      case "amarillo":
        ficha = ficha1amarilla
        //val es una clase css que utilizo en todas las fichas
        //para saber si sigue en la celda o ya esta en juego
        if (ficha && ficha.classList.contains("val")) {
            sacarAmarillo(ficha);

        } else {
            moverAmarillo(ficha);
        }
        // deshabilito el botón para que no haya bugs
        dado__button.disabled = true;
        // pasar de turno
        turnoActual = (turnoActual + 1) % colores.length
        // llamo a la funcion lanzarDado con 1 seg de retraso
        // para que juegue la máquina
        setTimeout(lanzarDado, 1000);  
        break;

      case "azul":
        dado__button.disabled = true;
        ficha = ficha1azul
        if (ficha && ficha.classList.contains("val")) {
            sacarAzul(ficha);
            
        } else {
            moverAzul(ficha);
        }
        turnoActual = (turnoActual + 1) % colores.length
        setTimeout(lanzarDado, 1000);  
        break;

      case "roja":
        dado__button.disabled = true;
        ficha = ficha1roja
        if (ficha && ficha.classList.contains("val")) {
            sacarRoja(ficha);
            
        } else {
            moverRoja(ficha);
        }
        turnoActual = (turnoActual + 1) % colores.length
        setTimeout(lanzarDado, 1000);  
        break;

      case "verde":
        dado__button.disabled = true;
        ficha = ficha1verde
        if (ficha && ficha.classList.contains("val")) {
            sacarVerde(ficha);
        } else {
            moverVerde(ficha);
        }
        // vuelvo a habilitar el dado para tener que volver a darle 
        // para que se mueva el jugador amarillo
        dado__button.disabled = false;
        turnoActual = (turnoActual + 1) % colores.length
        // si la ficha amarilla esta en la casilla final hago
        // que se lance los dados y mueva el color azul y deshabilito el botón
        if (!ficha1amarilla.classList.contains("aux")) {
            dado__button.disabled = true;
            setTimeout(lanzarDado, 1000); 
        }
        break;
      default:
        break;
    } 
    pantallaGanador();
}

// esta es la misma lógica para todas las fichas
// hago que se cambie el color del circulo de atrás para
// para saber que es su turno y si alguno de los dos dados
// es 5 la muevo si no paso al siguiente turno
const sacarAmarillo = (ficha) => {
    circulo__amarillo.classList.add("fichaamarillaback")
    circulo__verde.classList.remove("fichaverdeback");circulo__azul.classList.remove("fichaazulback");circulo__rojo.classList.remove("ficharojaback")
    if (numDado1 === 5 || numDado2 === 5) {
        ficha.style.cssText = 'top:' + posicionesAmarillo[2][1] + 'px; left:' + posicionesAmarillo[2][2] + 'px;'
        verificarColision(ficha, [ficha1azul, ficha1roja, ficha1verde]);
        ficha.classList.remove("val");
    }
}
//si no tiene la calse auxiliar val los números que salgan en los dados
//son los que se va a mover
const moverAmarillo = (ficha) => {
    circulo__amarillo.classList.add("fichaamarillaback")
    circulo__verde.classList.remove("fichaverdeback");circulo__azul.classList.remove("fichaazulback");circulo__rojo.classList.remove("ficharojaback")
    if (posicionesAmarillo && posActAmarillo !== undefined) {
        let nuevaPosAmarillo = posActAmarillo+numDado1+numDado2
        
        if (nuevaPosAmarillo < posicionesAmarillo.length) {   
            posActAmarillo = nuevaPosAmarillo
            ficha.style.cssText = 'top:' + posicionesAmarillo[nuevaPosAmarillo][1] + 'px; left:' + posicionesAmarillo[nuevaPosAmarillo][2] + 'px;'
            verificarColision(ficha, [ficha1azul, ficha1roja, ficha1verde]);

        } else {
            circulo__amarillo.classList.remove("fichaamarillaback")
            let index = colores.indexOf("amarillo")
            colores.splice(index, 1)
            ficha.classList.remove("aux");
            sacarGanador(ficha);
        }
    }    
}

const sacarAzul = (ficha) => {
    circulo__azul.classList.add("fichaazulback")
    circulo__amarillo.classList.remove("fichaamarillaback");circulo__rojo.classList.remove("ficharojaback");circulo__verde.classList.remove("fichaverdeback")
    if (numDado1 === 5 || numDado2 === 5) {
        ficha.style.cssText = 'top:' + posicionesAmarillo[13][1] + 'px; left:' + posicionesAmarillo[13][2] + 'px;'
        verificarColision(ficha, [ficha1amarilla, ficha1roja, ficha1verde]);
        ficha.classList.remove("val");
    }

}

const moverAzul = (ficha) => {
    circulo__azul.classList.add("fichaazulback")
    circulo__amarillo.classList.remove("fichaamarillaback");circulo__rojo.classList.remove("ficharojaback");circulo__verde.classList.remove("fichaverdeback")
    if (posicionesAzul && posActAzul !== undefined) {
        let nuevaPosAzul = posActAzul+numDado1+numDado2
        
        if (nuevaPosAzul < posicionesAzul.length) {
            posActAzul= nuevaPosAzul
            ficha.style.cssText = 'top:' + posicionesAzul[nuevaPosAzul][1] + 'px; left:' + posicionesAzul[nuevaPosAzul][2] + 'px;'
            verificarColision(ficha, [ficha1amarilla, ficha1roja, ficha1verde]);
        } else {
            circulo__azul.classList.remove("fichaazulback")
            let index = colores.indexOf("azul")
            colores.splice(index, 1)
            ficha.classList.remove("aux");
            sacarGanador(ficha);
        }
    }
    
}

const sacarRoja = (ficha) => {
    circulo__rojo.classList.add("ficharojaback")
    circulo__azul.classList.remove("fichaazulback");circulo__amarillo.classList.remove("fichaamarillaback");circulo__verde.classList.remove("fichaverdeback")
    if (numDado1 === 5 || numDado2 === 5) {
        ficha.style.cssText = 'top:' + posicionesAmarillo[24][1] + 'px; left:' + posicionesAmarillo[24][2] + 'px;'
        verificarColision(ficha, [ficha1azul, ficha1amarilla, ficha1verde]);
        ficha.classList.remove("val");
    }
}
const moverRoja = (ficha) => {
    circulo__rojo.classList.add("ficharojaback")
    circulo__azul.classList.remove("fichaazulback");circulo__amarillo.classList.remove("fichaamarillaback");circulo__verde.classList.remove("fichaverdeback")
    if (posicionesRojo && posActRojo !== undefined) {
        let nuevaPosRojo = posActRojo+numDado1+numDado2
        
        if (nuevaPosRojo < posicionesRojo.length) {  
            posActRojo= nuevaPosRojo
            ficha.style.cssText = 'top:' + posicionesRojo[nuevaPosRojo][1] + 'px; left:' + posicionesRojo[nuevaPosRojo][2] + 'px;'
            verificarColision(ficha, [ficha1azul, ficha1amarilla, ficha1verde]);
        } else {
            circulo__rojo.classList.remove("ficharojaback")
            let index = colores.indexOf("roja")
            colores.splice(index, 1)
            ficha.classList.remove("aux");
            sacarGanador(ficha);
        }           
    }
}

const sacarVerde = (ficha) => {
    circulo__verde.classList.add("fichaverdeback")
    circulo__rojo.classList.remove("ficharojaback");circulo__amarillo.classList.remove("fichaamarillaback");circulo__azul.classList.remove("fichaazulback")
    if (numDado1 === 5 || numDado2 === 5) {
        ficha.style.cssText = 'top:' + posicionesAmarillo[35][1] + 'px; left:' + posicionesAmarillo[35][2] + 'px;'
        verificarColision(ficha, [ficha1azul, ficha1roja, ficha1amarilla]);
        ficha.classList.remove("val");
    }
}
const moverVerde = (ficha) => {
    circulo__verde.classList.add("fichaverdeback")
    circulo__rojo.classList.remove("ficharojaback");circulo__amarillo.classList.remove("fichaamarillaback");circulo__azul.classList.remove("fichaazulback")
    if (posicionesVerde && posActVerde !== undefined) {                
        let nuevaPosVerde = posActVerde + numDado1 + numDado2
        
        if (nuevaPosVerde < posicionesVerde.length) {
            posActVerde = nuevaPosVerde
            ficha.style.cssText = 'top:' + posicionesVerde[nuevaPosVerde][1] + 'px; left:' + posicionesVerde[nuevaPosVerde][2] + 'px;'
            verificarColision(ficha, [ficha1azul, ficha1roja, ficha1amarilla]);
        } else {
            circulo__verde.classList.remove("fichaverdeback")
            let index = colores.indexOf("verde")
            colores.splice(index, 1)
            ficha.classList.remove("aux");
            sacarGanador(ficha);
        }
    }
}

// Función que comprueba si dos fichas tienen la misma poscición
// la última ficha se come a la primera y la manda a su posición
// inicial y le añade la clase val (utilizo el getBoundingClientRect()
// para coger el top y el left de las fichas)
const verificarColision = (fichaActual, otrasFichas) => {
    let primeraPos = fichaActual.getBoundingClientRect()
    
    for (const otraFicha of otrasFichas) {  
      if (fichaActual !== otraFicha) {

        let otraPos = otraFicha.getBoundingClientRect()

        if (primeraPos.top === otraPos.top && primeraPos.left === otraPos.left) {

            if (otraFicha.id == "ficha1amarilla") {
                otraFicha.style.cssText = 'top:563px; left:530px;'
                ficha1amarilla.classList.add("val")
                posActAmarillo = 0
            }  
            if (otraFicha.id == "ficha1azul") {
                otraFicha.style.cssText = 'top:96px; left:530px;'
                ficha1azul.classList.add("val")
                posActAzul = 0
            }
            if (otraFicha.id == "ficha1roja") {
                otraFicha.style.cssText = 'top:96px; left:90px;'
                ficha1roja.classList.add("val")
                posActRojo = 0
            }
            if (otraFicha.id == "ficha1verde") {
                otraFicha.style.cssText = 'top:563px; left:90px;'
                ficha1verde.classList.add("val")
                posActVerde = 0
            }
        }
      }
    }
}

// aux es una clase css que utilizo para saber si ah llegado
// la ficha a su casilla final
let auxPuestos = 0
const sacarGanador = (ficha) => {
    if (ficha.classList.contains("aux")) {
        
    } else {
        auxPuestos++
    }
    if (auxPuestos==1) {
        ficha.classList.add("fichaganador")
    }
}

// si ninguna de las fichas contiene aux significa que todas
// han llegado a su posición final entonces oculto el tablero
// y muestro la pantalla del ganador 
const pantallaGanador = () => {
    if (!ficha1amarilla.classList.contains("aux") &&
        !ficha1azul.classList.contains("aux") &&
        !ficha1roja.classList.contains("aux") &&
        !ficha1verde.classList.contains("aux")) 
        {
        
            tablero.classList.add("ocultar__tablero")
            juego.classList.add("ocultar__datos")

            ganador.classList.add("mostrar__ganador")
            
            if (ficha1amarilla.classList.contains("fichaganador")) {
                ganador__text.textContent = "Ha ganado el jugador"
                ganador__text.style.color = "yellow"
            } else if (ficha1azul.classList.contains("fichaganador")) {
                ganador__h2.textContent = "Game Over"
                ganador__text.textContent = "Ha ganado la ficha azul"
                ganador__text.style.color = "#00F0FF"
            } else if (ficha1roja.classList.contains("fichaganador")) {
                ganador__h2.textContent = "Game Over"
                ganador__text.textContent = "Ha ganado la ficha roja"
                ganador__text.style.color = "#FE170D";
            } else if (ficha1verde.classList.contains("fichaganador")) {
                ganador__h2.textContent = "Game Over"
                ganador__text.textContent = "Ha ganado la ficha verde"
                ganador__text.style.color = "#00FE0A";
            }
    }
}

const volveraJugar = () => {
    location.reload();
}

ganador__button.addEventListener("click",volveraJugar)

dado__button.addEventListener("click", lanzarDado)