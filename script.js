//Array para adicionar os nomes dos amigos
let nomes = [];
    document.addEventListener("DOMContentLoaded", function () {
     });

// funcao add amigos
function adicionarAmigo() {
    var nomeAmigo = document.getElementById("amigo").value;
    var nomeInput = document.getElementById("amigo");
    //validar o nome que esta em duplicidade
    if(nomes.includes(nomeAmigo)){
        alert( `nome ${nomeAmigo} ja consta na lista atual`);
        return;
    }

    //add nomes de amigos na array
    nomes.push(nomeAmigo);//add nomes de amigos na array
    nomeInput.value = "";     //limpar campo de entrada
    console.log("amigos",nomes)
    atualizarLista(); //atualizar lista em HTML
}

//funcao de atualizar lista de interface
function atualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}

 //array com um clique
 for(let i = 0; i < nomes.length; i++){
     const li = document.createElement("li");
     li.textContent = nomes[i]
     lista.appendChild(li);
 }
 
//funcao selecionar amigo aleatorio
function sortearAmigos(){
    //validar os amigos disponiveis
    if (nomes.length < 2) {
        alert('Adicione ao menos dois nomes antes de sortear!');
        return;
    }
    
    //gerar sorteio
    const sorteados = Math.floor(Math.random() * amigos.length);
    embaralhar(sorteados);

    let resultadoHTML = '<h2>Resultado do Sorteio:</h2><ul>';
    //Enquanto a variavel de controle nesse caso 'i' for menor 
    // que a quantidade de nomes
    for(let i = 0;i < nomes.length;i++){
        const amigo = sorteados[i];
        resultadoHTML += `<li>${nomes[1]} -> ${amigo}</li>`;
    }

    resultadoHTML += '</ul>';
    document.getElementById('resultado').innerHTML = resultadoHTML;
}

function nada(){
    var  vazio = "uma função , apenas um grupo de código ,um vazio no espaço sem rumo ";
}
