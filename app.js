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
