let caja = document.querySelectorAll('.caja');
let start = document.querySelector("#start");
let jugador = "💖";
let texto = document.querySelector('.msj');
let estado = 'juego'// el estado cambia con el gane, lo que hace que se impida seguir jugando

let mensaje = document.getElementById("mensaje");
let victoriasEst = 0;
let victoriasFre = 0;
let puntosD = document.getElementById("puntosD");
let score = document.querySelector(".score");

for (let index = 0; index < caja.length; index++) {
  
  caja[index].addEventListener("click",function () {

    if (estado == 'juego') {
     if (caja[index].innerHTML != "✨" && caja[index].innerHTML != "💖") {
        jugador = cambiarJugador();
        caja[index].innerHTML= jugador
        ganes()
      }
     console.log(caja[2].innerHTML);
    }
  });
};

function cambiarJugador() {

    if (jugador == "✨") {
        jugador = "💖";
        texto.innerHTML = 'turno de ✨';
    }else{
      jugador = "✨";
      texto.innerHTML = 'turno de 💖'; //si jugdor es estrella se va a mostrar "turno fresa" dentro del texto
    }
    return jugador;
};

start.addEventListener("click", function () {
  for (let index = 0; index < caja.length; index++) {
    caja[index].innerHTML= "";//elimina todo en las cajas
    texto.innerHTML = 'comienza ✨';
    estado = 'juego'
}
});

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

alone.onclick = function (){
  alert ('modo solitario activado')  
}

score.onclick = function eliminarScore() {
  alert('✨Puntuaje Eliminado✨')
  location.reload();
}
