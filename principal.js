let caja = document.querySelectorAll('.caja');
let start = document.querySelector("#start");
let jugador = "🍓";
let texto = document.querySelector('.msj');
let estado = 'juego'// el estado cambia con el gane, lo que hace que se impida seguir jugando

let conteoEstrella = 0;
let conteoFresa = 0;

for (let index = 0; index < caja.length; index++) {
  
  caja[index].addEventListener("click",function () {
    //IF es para hacer o realizar validaciones
    if (estado == 'juego') {
     if (caja[index].innerHTML != "⭐" && caja[index].innerHTML != "🍓") {
        jugador = cambiarJugador();
        caja[index].innerHTML= jugador
        ganes()// la funcion debe ir dentro de los event click para que funcione
      }
     console.log(caja[2].innerHTML);
    }
  });
};

function cambiarJugador() {

    if (jugador == "⭐") {//??????????
        jugador = "🍓";
        texto.innerHTML = 'turno de ⭐';
    }else{
      jugador = "⭐";
      texto.innerHTML = 'turno de 🍓'; //si jugdor es estrella se va a mostrar "turno fresa" dentro del texto
    }
    return jugador;
};

start.addEventListener("click", function () {
  for (let index = 0; index < caja.length; index++) {
    caja[index].innerHTML= "";//elimina todo en las cajas
    texto.innerHTML = 'comienza ⭐';
    estado = 'juego'
}
});

function ganes() {
  if (caja[0].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
   texto.innerHTML = '⭐ Gano';
   estado = 'gane'
  }else if (caja[0].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
    texto.innerHTML = '🍓 Gano';
   estado = 'gane';
  }
  if (caja[2].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[6].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    }else if (caja[2].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[6].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[0].innerHTML == "⭐" && caja[1].innerHTML == "⭐" && caja[2].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    }else if (caja[0].innerHTML == "🍓" && caja[1].innerHTML == "🍓" && caja[2].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[3].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[5].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    estado = 'gane'
    }else if (caja[3].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[5].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[6].innerHTML == "⭐" && caja[7].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    estado = 'gane'
    }else if (caja[6].innerHTML == "🍓" && caja[7].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[0].innerHTML == "⭐" && caja[3].innerHTML == "⭐" && caja[6].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    estado = 'gane'
    }else if (caja[2].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[7].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[1].innerHTML == "⭐" && caja[4].innerHTML == "⭐" && caja[7].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    estado = 'gane'
    }else if (caja[1].innerHTML == "🍓" && caja[4].innerHTML == "🍓" && caja[7].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }
  if (caja[2].innerHTML == "⭐" && caja[5].innerHTML == "⭐" && caja[8].innerHTML == "⭐") {
    texto.innerHTML = '⭐ Gano'
    estado = 'gane'
    }else if (caja[2].innerHTML == "🍓" && caja[5].innerHTML == "🍓" && caja[8].innerHTML == "🍓") {
      texto.innerHTML = '🍓 Gano';
      estado = 'gane'
  }if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[4].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[6].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[3].textContent == "🍓" && caja[4].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[4].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[4].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[4].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[4].textContent == "🍓" && caja[5].textContent == "🍓"  && caja[6].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[4].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[4].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[4].textContent == "⭐" && caja[5].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[4].textContent == "🍓" && caja[5].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[4].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[4].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[4].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[4].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[2].textContent == "⭐" && caja[5].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[2].textContent == "🍓" && caja[5].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[3].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[3].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[2].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[2].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[3].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[3].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[2].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[2].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐" && caja[7].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓" && caja[6].textContent == "🍓"  && caja[7].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[7].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓" && caja[7].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[0].textContent == "⭐" && caja[1].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[8].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[0].textContent == "🍓" && caja[1].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓"  && caja[8].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
  if (caja[1].textContent == "⭐" && caja[2].textContent == "⭐" && caja[3].textContent == "⭐" && caja[5].textContent == "⭐" && caja[6].textContent == "⭐") {
    texto.innerHTML = 'EMPATE'
    estado = 'gane'
  } else if (caja[1].textContent == "🍓" && caja[2].textContent == "🍓" && caja[3].textContent == "🍓" && caja[5].textContent == "🍓"  && caja[6].textContent == "🍓") {
    texto.innerHTML = 'EMPATE';
    estado = 'gane'
  }
};


alone.onclick = function (){

  alert ('modo solitario activado')  
}




