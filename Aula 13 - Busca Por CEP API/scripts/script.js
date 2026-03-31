

const campoCep = document.getElementById("cep");
const botaoBuscar = document.getElementById("botao-buscar");
const campoRua = document.getElementById("rua");
const campoBairro = document.getElementById("bairro");
const campoCidade = document.getElementById("cidade");
const campoEstado = document.getElementById("estado");


function preencherCampos(dados) {
    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;
}

function limparCampos() {
    campoRua.value = "";
    campoBairro.value = "";
    campoCidade.value = "";
    campoEstado.value = "";
}

function buscarCep() {
    const cep = campoCep.value.replace("-", "").trim();

    if(cep.length !== 8) {
        alert("CEP invalido!");
        limparCampos();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`; 

  // Faz a requisição HTTP para a URL da API
  fetch(url)
    // Converte a resposta para JSON
    .then((response) => response.json())
    //Verifica se a API retornou um erro (CEP não existe)
    .then((dados) => {
      if (dados.erro) {
        alert("CEP não encontrado");
        limparCampos();
        return;
      }
      preencherCampos(dados);
    })
    // Caso aconteça algum erro na requisição (ex. sem internet)
    .catch(() => {
      alert("Erro ao buscar o CEP");
    });
}

botaoBuscar.addEventListener("click", buscarCep);
