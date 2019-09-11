// NO TOCAR ESTAS FUNCIONES!!!
function habilitarBotones() {
  Array.prototype.slice
    .call(botiquinDiv.children)
    .forEach(el => el.removeAttribute("disabled"));
}

function filterMedicine(medicine) {
  for (var i = 0; i < botiquin.length; i++) {
    if (botiquin[i][0] == medicine) {
      return true;
    }
  }
  return false;
}

function filterQuantity(medicine) {
  for (var i = 0; i < botiquin.length; i++) {
    if (botiquin[i][0] == medicine) {
      return botiquin[i][1];
    }
  }
  return false;
}

function agregarPastillas(nombre, cantidad) {
  var nuevo = [nombre, cantidad];
  botiquin.push(nuevo);
  return;
}

function quitarMedicamento(nombre, cantidad) {
  for (var i = 0; i < botiquin.length; i++) {
    if (botiquin[i][0] == nombre) {
      botiquin[i][1] -= cantidad;
    }
  }
  return;
}

function imprimirMensaje(mensaje) {
  mensajeDiv.textContent = mensaje;
}

botiquinDiv.addEventListener("click", function(e) {
  if (e.target.nodeName === "BUTTON") {
    if (e.target.id == "agregar") {
      console.log("debemos agregar un medicamento");
      agregar();
    } else if (e.target.id == "consultar") {
      console.log("debemos consultar");
      consultar();
    } else if (e.target.id == "quitar") {
      console.log("debemos quitar un medicamento");
      quitar();
    }
  }
});

window.onload = function() {
  saludar();
};
