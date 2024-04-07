let resultado = 0;

function sumar() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    if (!isNaN(numberInput)) {
        resultado += numberInput;
        actualizarResultado(resultado);
    }
}

function restar() {
    const numberInput = parseFloat(document.getElementById('numberInput').value);
    if (!isNaN(numberInput)) {
        resultado -= numberInput;
        actualizarResultado(resultado);
    }
}

function resetear() {
    resultado = 0;
    actualizarResultado(resultado);
    document.getElementById('numberInput').value = ''; // Limpiar el campo de entrada
}

function actualizarResultado(valor) {
    document.getElementById('resultValue').textContent = valor;
    document.getElementById('numberInput').value = ''; // Limpiar el campo de entrada después de la operación
}



function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hour").textContent = hour;
  document.getElementById("minute").textContent = minute;
  document.getElementById("second").textContent = second;
}

setInterval(updateClock, 1000);

updateClock();
