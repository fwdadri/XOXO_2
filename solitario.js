let caja = document.querySelectorAll('.caja');
let start = document.querySelector("#start");
let texto = document.querySelector('.msj');
let conteoEstrella = 0;
let conteoFresa = 0;
let estado = 'juego';//el estado juego puede cambiar a bot y a gane, si  cambia a gane para
let jugador = "✨";
let mensaje = document.getElementById("mensaje");
let puntosD = document.getElementById("puntosD");
let puntosV = document.getElementById("puntosV");
//variables Globales son las que esatan fuera de las funciones
//DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML
let victoriasEst = 0;
let victoriasFre = 0;

for (let index = 0; index < caja.length; index++) {//Conteo de cajas 

  caja[index].addEventListener("click", function juego() {//si alguna caja se le hace click, empieza el juego

    if (estado == 'juego') {//el estado juego permite seguir el juego

      if (caja[index].innerHTML != "✨" && caja[index].innerHTML != "💖") {//si estan vacias

        caja[index].innerHTML = jugador//turno del jugador estrella
        mensaje.innerHTML = "Turno de 💖";
        ganes();// ganes()// la funcion debe ir dentro de los event click para que funcione

        if (estado == "juego") {// aqui queda el estado gane y no pasa dentro del if
          juegoIA();
        }
      }
    }
  });
};

function ganes() {
  if (caja[0].textContent == "✨" && caja[4].textContent == "✨" && caja[8].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano';
    estado = 'gane'//los estados ganes no estan funcionando, no se porque...

  } else if (caja[0].textContent == "💖" && caja[4].textContent == "💖" && caja[8].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane';
  }
  if (caja[2].textContent == "✨" && caja[4].textContent == "✨" && caja[6].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane';

  } else if (caja[2].textContent == "💖" && caja[4].textContent == "💖" && caja[6].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane';
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[2].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane';

  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[2].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane'

  }
  if (caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[5].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano';
    estado = 'gane'

  } else if (caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[5].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane'

  }
  if (caja[6].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane'

  } else if (caja[6].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane'

  }
  if (caja[0].textContent == "✨" && caja[3].textContent == "✨" && caja[6].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane';

  } else if (caja[0].textContent == "💖" && caja[3].textContent == "💖" && caja[6].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane'

  }
  if (caja[1].textContent == "✨" && caja[4].textContent == "✨" && caja[7].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane';

  } else if (caja[1].textContent == "💖" && caja[4].textContent == "💖" && caja[7].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane';

  }
  if (caja[2].textContent == "✨" && caja[5].textContent == "✨" && caja[8].textContent == "✨") {
    victoriasEst++
    puntosV.textContent = "puntos de estrella ✨ " + victoriasEst;
    texto.innerHTML = '✨ Gano'
    estado = 'gane'

  } else if (caja[2].textContent == "💖" && caja[5].textContent == "" && caja[8].textContent == "💖") {
    victoriasFre++
    puntosD.textContent = "puntos de fresa 💖" + victoriasFre;
    texto.innerHTML = '💖 Gano';
    estado = 'gane'

  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[6].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[6].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[4].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[4].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[4].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[4].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[4].textContent == "✨" && caja[5].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[4].textContent == "💖" && caja[5].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[4].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[4].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[4].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[4].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[2].textContent == "✨" && caja[5].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[2].textContent == "💖" && caja[5].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[3].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[3].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[2].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[2].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[3].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[3].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[2].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[2].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨" && caja[7].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖" && caja[7].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[7].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[7].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "✨" && caja[1].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[8].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "💖" && caja[1].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[8].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "✨" && caja[2].textContent == "✨" && caja[3].textContent == "✨" && caja[5].textContent == "✨" && caja[6].textContent == "✨") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "💖" && caja[2].textContent == "💖" && caja[3].textContent == "💖" && caja[5].textContent == "💖" && caja[6].textContent == "💖") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
};

function juegoIA() {
  let cajitasVacias = []; //array vacio para guardar las cajas vacias contadas por el for

  for (let indice = 0; indice < caja.length; indice++) {//cuenta todas las cajas

    if (caja[indice].innerHTML == "") {

      cajitasVacias.push(caja[indice]);// se añade/push a al array la caja vacia
    }
  }
  let random = Math.floor((Math.random() * cajitasVacias.length));// funcion para seleccionar al azar

  estado = 'bot';

  setTimeout(() => {
    mensaje.innerHTML = "Turno de ✨"
    cajitasVacias[random].innerHTML = "💖";//aqui se llama al array de cajas vacias y a la funcion ramdo para seleccionar al azar un caja vacia

    estado = "juego";// si se escribe el estado juego despues de ganes, se podria seguir jugando aun depues de un gane
    ganes();//llama a la funcion gane para identificar ganes y empates

  }, 1000);
};


start.addEventListener("click", function vaciarYmostrar() {

  for (let index = 0; index < caja.length; index++) {

    caja[index].innerHTML = "";//elimina los emojis dentro de las cajas
    texto.innerHTML = 'comienza ✨';
    estado = 'juego'
  }
});

alone.onclick = function cambiarModo() {
  alert('modo compañia activado')
}


//function guardarScore(){
 // localStorage.setItem("score", JSON.stringify(scores))
//}

//function obtenerScore(){
  //const scoreString = localStorage.getItem('scores');
  //return scoreString ? JSON.stringify(scoreString): null;
//}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//function cambiarJugador() {////no funcionaaaaa

  //if (jugador == "✨") {//??????????
    //jugador = "💖";
   // jugador = "✨"; //si jugdor es estrella se va a mostrar "turno fresa" dentro del texto
  //}
  //return jugador;
//};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7