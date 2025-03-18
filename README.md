# 🎨 Desafío: Amigo Secreto

Bienvenido al **Desafío del Amigo Secreto**, donde pondrás a prueba tus habilidades en lógica de programación desarrollando una aplicación sencilla pero divertida.

## 🎉 Objetivo
Crear una aplicación web que permita a los usuarios agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién es el **"amigo secreto"**.

---

## 🔧 Funcionalidades
- 👤 **Agregar nombres:** Los usuarios pueden ingresar nombres en un campo de texto y agregarlos a una lista visible.
- ⚠️ **Validación de entrada:** Si el campo está vacío, se mostrará un mensaje de advertencia.
- 📝 **Visualización de la lista:** Los nombres ingresados aparecerán en una lista en pantalla.
- 🎡 **Sorteo aleatorio:** Al hacer clic en el botón "Sortear Amigo", se seleccionará un nombre al azar y se mostrará en pantalla.

---

## 📝 Código Principal
```javascript
let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    listaAmigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarLista();
}

function actualizarLista() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';

    listaAmigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        listaElement.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('La lista está vacía. Agrega nombres antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    alert(`El amigo secreto es: ${amigoSecreto}`);
}
```

## 🛠️ Tecnologías Utilizadas
* HTML
* CSS
* JavaScript

## 📖 Instrucciones de Uso
1. **Clona el repositorio**:

```sh
git clone https://github.com/tu-usuario/amigo-secreto.git
```

2. **Abre el archivo** `index.html` en tu navegador.
3. **Ingresa nombres** y haz clic en "Adicionar".
4. **Realiza el sorteo** y descubre quién es el amigo secreto.

## 🌟 Autor
**Deivi Cristopher Aquino Pérez - Deyf3r** 
