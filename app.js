//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    let nomeInserido = document.getElementById('amigo').value;
    if (nomeInserido === ''){
        alert('Por favor, insira um nome!');
    } else {
        limparResultado();//limpa texto de resultado
        amigos.push(nomeInserido); //adiciona nome na lista
        mostraLista();
        limparCampo('#amigo'); 
    }
}

function mostraLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i< amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; //percorre itens da lista e mostra na tela
    }
}

function limparCampo(texto) {
    let limparCampo = document.querySelector(texto);
        limparCampo.value = '';
}

function limparResultado() {
    let res = document.getElementById('resultado');
    res.innerHTML = '';
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Sua lista de amigos está vazia!');
    } else {
        let escolhaAleatoria = Math.floor(Math.random()*amigos.length);
        let amigoEscolhido = amigos[escolhaAleatoria];
        let res = document.getElementById('resultado');
        res.innerHTML = `Amigo(a) sorteado(a): ${amigoEscolhido}`;
        amigos = []; // limpa a lista de amigos
        mostraLista(); // atualiza a exibição de lista 
    }

}