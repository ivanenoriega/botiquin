var botiquinDiv = document.querySelector("#botiquin");
var mensajeDiv = document.querySelector("#message");
var autorizado = false;
var botiquin = [
  ["Aspirina", 21],
  ["Ibuprofeno", 5],
  ["Amoxicilina", 12],
  ["Ácido Clavulánico", 0],
  ["Buscapina", 30],
  ["Ranitidina", 12],
  ["Sertal", 0],
  ["Omeprazol", 3],
  ["Paracetamol", 34]
];

//////////
// DESDE aquí son las funciones que tienen que hacer los alumnes.
function saludar() {}

function agregar() {
  // DEBEMOS CONSULTAR AL USUARIO EL NOMBRE DE LA MEDICACIÓN A AGREGAR.
  // DEBEMOS CONSULTAR AL USUARIO LA CANTIDAD DE PASTILLAS A AGREGAR.
  // NO OLVIDEMOS QUE EL PROMPT NOS DEVUELVE UNA STRING. ¿CÓMO LA PASAMOS A NUMBER?.
  // SI EL USUARIO HA CONTESTADO CORRECTAMENTE LAS DOS PREGUNTAS ANTERIORES Y LOS DATOS SON VÁLIDOS.
  // ejecutar la función agregarPastillas(nombreMedicacion, cantidadPastillas); recibe dos parámetros por un lado la el nombre del medicamento y la cantidad de pastillas
  // SI EL USUARIO HA CONTESTADO MAL LAS DOS PREGUNTAS ANTERIORES
  // alertar al usuario que algo ha salido mal.
}

function quitar() {
  // DEBEMOS CONSULTAR AL USUARIO EL NOMBRE DE LA MEDICACIÓN A AGREGAR.
  // DEBEMOS CONSULTAR AL USUARIO LA CANTIDAD DE PASTILLAS A AGREGAR.
  // NO OLVIDEMOS QUE EL PROMPT NOS DEVUELVE UNA STRING. ¿CÓMO LA PASAMOS A NUMBER?.
  // SI EL USUARIO HA CONTESTADO CORRECTAMENTE LAS DOS PREGUNTAS ANTERIORES Y LOS DATOS SON VÁLIDOS.
  // ejecutar la función agregarPastillas(nombreMedicacion, cantidadPastillas); recibe dos parámetros por un lado la el nombre del medicamento y la cantidad de pastillas
  // imprimir un mensaje de confirmación de la toma de la pastilla.
  // SI EL USUARIO HA CONTESTADO MAL LAS DOS PREGUNTAS ANTERIORES
  // alertar al usuario que algo ha salido mal.
  // guardamos la cantidad inicial de pastillas que había para ese medicamento.
  // ejecutamos la función para tomar la medicación.
  // guardamos la cantidad actual.
  // imprimimos el mensaje.
}

function consultar() {
  // DEBEMOS CONSULTAR AL USUARIO SOBRE LA MEDICACIÓN QUE DESEA, EL NOMBRE DEL MEDICAMENTO
  // DEBEMOS CONSULTAR LA CANTIDAD POR DÍA QUE TIENE QUE TOMAR.
  // DEBEMOS CONSULTAR LA CANTIDAD DE DÍAS QUE DURA EL TRATAMIENTO.
  // GUARDAR TODAS ESTAS PREGUNTAS EN VARIABLES.
  // una vez que tenemos la medicación que necesitamos, debemos:
  // ejecutar la siguiente funcion para consulutar en el botiquin si disponemos de la misma.
  // ejecutar filterMedicine(medicamento); recibe como parámetro el nombre del medicamento a consultar.
  // A- SÍ TENEMOS LA MEDICACIÓN, debemos consultar qué cantidad de pastillas tenemos:
  // ejecutar la función filterQuantity(medicamento); recibe como parámetro el nombre del medicamento a consultar.
  // A-1 SI TENEMOS PASTILLAS, debemos ver si son suficientes para la duración del tratamiento.
  // debemos completar la función existencias().
  // luego debemos utilizar esta función para controlar la existencia y si son suficientes, vamos a imprimir un mensaje al usuario:
  // luego de que tengamos el mensaje guardado, ejecutamos la siguiente función:
  // ejecutar imprimirMensaje(mensaje); recibe como parámetro el mensaje que queremos mostrar.
  // A-2 SI NO TENEMOS PASTILLAS, debemos mostrar un mensaje al usuario adviertiéndole que no tenemos pastillas, aunque tenemos una caja vacía guardada en el botiquín!.
  // luego de que tengamos el mensaje guardado, ejecutamos la siguiente función:
  // ejecutar imprimirMensaje(mensaje); recibe como parámetro el mensaje que queremos mostrar.
  // B- SI NO TENEMOS LA MEDICACIÓN
  // Vamos a crear un mensaje para el usuario adviertiéndole que no tenemos el medicamento que busca.
  // luego de que tengamos el mensaje guardado, ejecutamos la siguiente función:
  // ejecutar imprimirMensaje(mensaje); recibe como parámetro el mensaje que queremos mostrar.
  // aquí hacemos el cálculo para devolver por cuanto tiempo
  // tenemos existencias.
}

function existencias(existencias, necesidad, duracion) {
  // esta función necesita de tres datos:
  // la cantidad de medicamentos actual que obtuvimos cuando ejecutamos la función filterQuantity(medicamento);
  // la cantidad de pastillas que toma por día el usuario.
  // la duración del tratamiento.
  // luego con esta información deberá calcular:
  // la cantidad de pastillas totales que necesita el usuario.
  // la cantidad de pastillas que tiene
  // controlar si efectivamente tenemos suficientes pastillas para el tratamiento.
  // SI TENEMOS SUFICIENTES PASTILLAS.
  // Imprimir un mensaje en la pantalla, debe decir:
  // 'Tenemos <<cantidad de pastillas>> pastillas, suficientes para la duración de << cantidad de días del tratamiento>> <<días o día>> de tratamiento.
  // SI NO TENEMOOS SUFICIENTES PASTILLAS.
  // calcular cuantas pastillas nos faltan en días y en cantidad de pastillas.
  // crear un mensaje que diga:
  // 'No tenemos suficientes pastillas en nuestro botiquin. Se necesitan para completar el tratamiento <<necisidad total de pastillas >> pastillas. '
  // ++++ 'Tenemos para << cantidad de pastillas para cuantos días >> días. ';
  // ++++ 'Faltan <<cantidad de pastillas que faltan >> pastillas para << cantidad de días que faltan>> días.';
  // ESTA FUNCIÓN DEBE DEVOLVER EL MENSAJE.
  // si tengo más pastillas de las que necesito:
}