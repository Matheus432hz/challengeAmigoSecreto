// array/ lista de amigos
let amigos = [];

//funcao para agregar nomes
function adicionarAmigo() {
    let nome = document.querySelector('input').value
    if (nome === '') {
        alert('nao deve estar em branco');//
    } else {
        amigos.push(nome);
        limparCampo();
        console.log(amigos);
        listarAmigos();
    }
}

// funcao para limpar campo digitado, herado do jogo numero secreto
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    for (var i = 0; i < amigos.length; i++) {
        let novoLi = document.createElement('li');
        novoLi.textContent = amigos[i];
        listaAmigos.appendChild(novoLi);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) { //array vazio
        document.getElementById("resultado").innerHTML = "Não há amigos cadastrados."; // mostra uma mensgem
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);    
        let nomeSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "O amigo sorteado é: " + nomeSorteado;
    }
}


  