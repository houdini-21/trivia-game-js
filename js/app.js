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
document.getElementById("comenzarQuiz").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("home").style.display = "none";
  document.getElementById("1pregunta").style.display = "block";
});

//primera pantalla
function respuesta1Pregunta1() {
  puntos = puntos + 2;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

function respuesta2Pregunta1() {
  puntos = puntos + 3;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

function respuesta3Pregunta1() {
  puntos = puntos + 3;
  document.getElementById("1pregunta").style.display = "none";
  document.getElementById("2pregunta").style.display = "block";
}

//segunda pantalla
function respuesta1Pregunta2() {
  puntos = puntos + 3;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

function respuesta2Pregunta2() {
  puntos = puntos + 2;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

function respuesta3Pregunta2() {
  puntos = puntos + 3;
  document.getElementById("2pregunta").style.display = "none";
  document.getElementById("3pregunta").style.display = "block";
}

// tercer pantalla

function respuesta1Pregunta3() {
  puntos = puntos + 3;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

function respuesta2Pregunta3() {
  puntos = puntos + 2;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

function respuesta3Pregunta3() {
  puntos = puntos + 3;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
}

//cuarta pantalla
function respuesta1Pregunta4() {
  puntos = puntos + 3;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}

function respuesta2Pregunta4() {
  puntos = puntos + 3;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}

function respuesta3Pregunta4() {
  puntos = puntos + 2;
  document.getElementById("3pregunta").style.display = "none";
  document.getElementById("4pregunta").style.display = "block";
  return validar();
}

function validar() {
  if (puntos === 8) {
    document.getElementById("4pregunta").style.display = "none";
    document.getElementById("ganaste").style.display = "block";
  } else if (puntos !== 8) {
    document.getElementById("4pregunta").style.display = "none";
    document.getElementById("perdiste").style.display = "block";
  }
}
