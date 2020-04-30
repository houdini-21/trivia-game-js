let nombreUser = "";
let puntos = 0;



document
  .getElementById("guardarNombre")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;

    if (nombre === "") {
      alert("Debes de ingresar un nombre");
    } else {
      nombreUserfinal = nombre;
      document.getElementById("home").style.display = "none";
      document.getElementById("bienvenida").style.display = "block";
      document.getElementById("nombreUsuario").innerHTML =
        "Hola " + nombreUserfinal;
    }
  });
document.getElementById("comenzarQuizA").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("1pregunta").style.display = "block";
});
document.getElementById("comenzarQuizB").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("1Bpregunta").style.display = "block";
});

//primera pantalla
function respuesta1Pregunta1() {
  puntos = puntos + 1;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

function respuesta2Pregunta1() {
  puntos = puntos + 0;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

function respuesta3Pregunta1() {
  puntos = puntos + 0;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

//segunda pantalla
function respuesta1Pregunta2() {
  puntos = puntos + 0;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

function respuesta2Pregunta2() {
  puntos = puntos + 1;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

function respuesta3Pregunta2() {
  puntos = puntos + 0;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

// tercer pantalla

function respuesta1Pregunta3() {
  puntos = puntos + 0;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

function respuesta2Pregunta3() {
  puntos = puntos + 1;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

function respuesta3Pregunta3() {
  puntos = puntos + 0;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

//cuarta pantalla
function respuesta1Pregunta4() {
  puntos = puntos + 0;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}

function respuesta2Pregunta4() {
  puntos = puntos + 0;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}

function respuesta3Pregunta4() {
  puntos = puntos + 1;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}


//preguntas prueba B
function respuesta1Pregunta1B() {
  puntos = puntos + 1;
  document.getElementById("1Bpregunta").style.display = "none";
  document.getElementById("2Bpregunta").style.display = "block";
}

function respuesta2Pregunta1B() {
  puntos = puntos + 0;
  document.getElementById("1Bpregunta").style.display = "none";
  document.getElementById("2Bpregunta").style.display = "block";
}

function respuesta3Pregunta1B() {
  puntos = puntos + 0;
  document.getElementById("1Bpregunta").style.display = "none";
  document.getElementById("2Bpregunta").style.display = "block";
}

//segunda pantalla B
function respuesta1Pregunta2B() {
  puntos = puntos + 1;
  document.getElementById("2Bpregunta").style.display = "none";
  document.getElementById("3Bpregunta").style.display = "block";
}

function respuesta2Pregunta2B() {
  puntos = puntos + 0;
  document.getElementById("2Bpregunta").style.display = "none";
  document.getElementById("3Bpregunta").style.display = "block";
}

function respuesta3Pregunta2B() {
  puntos = puntos + 0;
  document.getElementById("2Bpregunta").style.display = "none";
  document.getElementById("3Bpregunta").style.display = "block";
}

// tercer pantalla B

function respuesta1Pregunta3B() {
  puntos = puntos + 0;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
}

function respuesta2Pregunta3B() {
  puntos = puntos + 1;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
}

function respuesta3Pregunta3B() {
  puntos = puntos + 0;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
}

//cuarta pantalla B
function respuesta1Pregunta4B() {
  puntos = puntos + 1;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
  return validar();
}

function respuesta2Pregunta4B() {
  puntos = puntos + 0;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
  return validar();
}

function respuesta3Pregunta4B() {
  puntos = puntos + 0;
  document.getElementById("3Bpregunta").style.display = "none";
  document.getElementById("4Bpregunta").style.display = "block";
  return validar();
}


//validaciones
function validar() {
  if (puntos === 4) {
    document.getElementById("4pregunta").style.display = "none";
    document.getElementById("4Bpregunta").style.display = "none";

    document.getElementById("ganaste").style.display = "block";
    document.getElementById("nombreUser").innerHTML =
      "Eso es " + nombreUserfinal + "!!!";
    document.getElementById("puntuacion").innerHTML = puntos + "/4";
  } else if (puntos <= 4) {
    document.getElementById("4pregunta").style.display = "none";
    document.getElementById("4Bpregunta").style.display = "none";
    document.getElementById("perdiste").style.display = "block";
    document.getElementById("nombreUser2").innerHTML =
      "Lo siento " + nombreUserfinal;
    document.getElementById("puntuacion2").innerHTML = puntos + "/4";
  }
}

function reiniciarpruebaA() {
  document.getElementById("perdiste").style.display = "none";
  document.getElementById("ganaste").style.display = "none";
  document.getElementById("1pregunta").style.display = "block";
  puntos = 0;
}

function reiniciarpruebaB(){
  document.getElementById("perdiste").style.display = "none";
  document.getElementById("ganaste").style.display = "none";
  document.getElementById("1Bpregunta").style.display = "block";
  puntos = 0;

}