const textos = ["QA Automatizador", "Python developer"]; // Textos a escribir
let contTexto = 0; // Contador del texto actual
let indice = 0; // Índice de la letra actual
let textoActual = ''; // Texto actual que se está escribiendo
let borrando = false; // Indica si se está borrando el texto

const velocidadEscritura = 50; // Velocidad con la que se escribe
const velocidadBorrado = 50; // Velocidad de borrado
const tiempoEspera = 700; // Tiempo de espera antes de empezar a borrar

function typeWriter() {
  const elemento = document.getElementById("textoDinamicoInicioH1");
  const textoCompleto = textos[contTexto];

  if (borrando) {
    // Borrar letra
    textoActual = textoCompleto.substring(0, textoActual.length - 1);
  } else {
    // Escribir letra
    textoActual = textoCompleto.substring(0, indice + 1);
  }

  elemento.innerHTML = textoActual;
  indice += borrando ? -1 : 1;

  if (!borrando && textoActual === textoCompleto) {
    // Si terminó de escribir, pausa antes de empezar a borrar
    setTimeout(() => { borrando = true; }, tiempoEspera);
  } else if (borrando && textoActual === '') {
    // Si terminó de borrar, cambia al siguiente texto
    borrando = false;
    contTexto = (contTexto + 1) % textos.length; // Vuelve al inicio si llega al final
    indice = 0;
  }

  setTimeout(typeWriter, borrando ? velocidadBorrado : velocidadEscritura);
}

// Iniciar la máquina de escribir cuando la página cargue
document.addEventListener("DOMContentLoaded", typeWriter);

//SUBMARINO --------------

document.addEventListener('DOMContentLoaded', function() {
  var barco = document.getElementById('barco');
  var delay = 200; // Ajusta el tiempo de retraso en milisegundos
  var offsetX = 50; // Ajusta el desplazamiento horizontal del barco
  var offsetY = 50; // Ajusta el desplazamiento vertical del barco

  document.addEventListener('mousemove', function(e) {
      var mouseX = e.clientX + window.pageXOffset;
      var mouseY = e.clientY + window.pageYOffset;

      // Calcula la nueva posición del barco con un retraso y un desplazamiento
      setTimeout(function() {
          barco.style.left = (mouseX - offsetX) + 'px';
          barco.style.top = (mouseY - offsetY) + 'px';
          barco.style.display = 'block'; // Muestra el barco
      }, delay);
  });
});


//Boton que me hace ir pa abajo

function scrollDown() {
  var scrollStep = 500; // Cantidad de desplazamiento por paso
  var scrollInterval = setInterval(function() {
      if (window.scrollY === 0) {
          clearInterval(scrollInterval);
      }
      window.scrollBy(0, scrollStep); // Realiza el desplazamiento
  }, 3); // Intervalo de tiempo entre pasos (más bajo es más rápido)
}

