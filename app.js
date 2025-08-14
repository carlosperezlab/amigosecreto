let amigos= [];


function agregarAmigo(){
    let ingresarAmigo= document.getElementById("amigo").value.trim();
    if (ingresarAmigo === "") {        
        alert("Por favor, ingresa un nombre válido.");
        return;
    } else {
        amigos.push(ingresarAmigo);
    }  
    
    mostrarListaAmigos();
    
    document.getElementById("amigo").value = "";

    console.log(amigos);
}

function mostrarListaAmigos(){


    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
}}

function sortearAmigo() {
if (amigos.length === 0){
    alert("Primero debes ingresar amigos para sortear.");  
    return;
}


let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indiceAleatorio];

console.log(indiceAleatorio)
console.log(amigoSorteado)

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<li> El amigo secreto es: ${amigoSorteado}</li>`;
 document.getElementById("listaAmigos").style.display = "none";

amigos.splice(indiceAleatorio, 1); // Elimina el amigo sorteado de la lista

 // Verifica si ya no quedan amigos después del sorteo
    if (amigos.length === 0) {
        alert("¡Ya no quedan amigos para sortear!");
    }

}


