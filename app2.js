// Agregar amigos
let listaAmigos = [];

function agregarAmigo() {
    // Obtener el valor del input
    let nombreAmigo = document.querySelector("#amigo").value.trim();

    // Agregar el nombre a la lista usando el método push
    if (nombreAmigo === '') {
        alert('Ingresa un nombre');
        return;
    }

    listaAmigos.push(nombreAmigo);

    // Crear un nuevo elemento <li> 
    let lista = document.querySelector("#listaAmigos");
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombreAmigo;
    lista.appendChild(nuevoAmigo);

    // Limpiar el campo de entrada para el próximo nombre
    document.querySelector("#amigo").value = "";
}

function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    // Sorteo
    document.getElementById('listaAmigos').innerHTML = '';
    let sortearAmigo = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[sortearAmigo];
    document.getElementById("resultado").innerHTML = `<span style="color: black;">El amigo secreto es:</span> ${amigoSecreto}`;
}
