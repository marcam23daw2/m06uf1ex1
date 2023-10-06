var victorias = 0;
var empates = 0;
var derrotas = 0;

function jugar() {
	var opciones = ["piedra", "papel", "tijeras"];
    var opcionJugador = document.querySelector('input[name="opcion"]:checked').value;
    var opcionOrdenador = opciones[Math.floor(Math.random() * 3)];

    var resultado = "";
    if (opcionJugador === opcionOrdenador) {
		resultado = "¡Empate!";
        empates++;
    } else if (
        (opcionJugador === "piedra" && opcionOrdenador === "tijeras") ||
        (opcionJugador === "papel" && opcionOrdenador === "piedra") ||
        (opcionJugador === "tijeras" && opcionOrdenador === "papel")
     ) {
        resultado = "¡Has ganado!";
        victorias++;
     } else {
        resultado = "¡Has perdido!";
        derrotas++;
     }

     document.getElementById("resultado").innerText = "Ordenador eligió " + opcionOrdenador + ". " + resultado;
     document.getElementById("victorias").innerText = victorias;
     document.getElementById("empates").innerText = empates;
     document.getElementById("derrotas").innerText = derrotas;
     }
        
function borrarSeleccion() {
     document.querySelector('input[name="opcion"]:checked').checked = false;
     }
        
function reiniciarMarcadores() {
     victorias = 0;
     empates = 0;
     derrotas = 0;
     actualitzarMarcadors();
     }
        
function actualitzarMarcadors() {
     document.getElementById("victorias").innerText = victorias;
     document.getElementById("empates").innerText = empates;
     document.getElementById("derrotas").innerText = derrotas;
     }
