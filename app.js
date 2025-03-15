// Array donde se almacenan los amigos
let listaAmigos = [];

// agregarAmigo
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";

    actualizarLista();
}

// actualizarLista
function actualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
        listaElement.innerHTML = "";
        

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.classList.add("listaElement");
        li.textContent = listaAmigos[i];

        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btnEliminar");
        btnEliminar.onclick = function () {
            eliminarAmigo(i);
        };

        li.appendChild(btnEliminar);
        listaElement.appendChild(li);
    }
}

// eliminarAmigo
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

// sortearAmigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}
