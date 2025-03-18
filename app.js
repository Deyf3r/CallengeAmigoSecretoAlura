// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); // Campo de texto
    const nombreAmigo = inputAmigo.value.trim(); // Obtener y limpiar el valor del campo

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.'); // Validar entrada
        return;
    }

    listaAmigos.push(nombreAmigo); // Agregar nombre al array
    inputAmigo.value = ''; // Limpiar el campo de texto
    actualizarLista(); // Actualizar la lista visible
}

function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos'); // Elemento de la lista en el DOM
    listaElement.innerHTML = ''; // Limpiar contenido previo

    listaAmigos.forEach((amigo) => {
        const item = document.createElement('li'); // Crear un elemento de lista
        item.textContent = amigo; // Asignar el nombre
        listaElement.appendChild(item); // Agregarlo al DOM
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); // Índice aleatorio
    const amigoSecreto = listaAmigos[indiceAleatorio]; // Seleccionar el nombre
    alert(`El amigo secreto es: ${amigoSecreto}`); // Mostrar el resultado
}