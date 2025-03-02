// array/ lista de amigos
let amigos = [];

//funcao para agregar nomes
function adicionarAmigo() {
    let nome = document.querySelector('input').value
    if (nome.value = '') {
        alert('nao deve estar em branco');//
    } else {
        amigos.push(nome);
        limparCampo();
        console.log(amigos);
    }
}


function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}