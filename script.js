let tela = document.getElementById("tela-resultado");
let expressao = 0;

tela.value = 0;

function adicionar(valor){
    expressao += valor;
    tela.value = expressao;
}

function limpar(){
    expressao = "";
    tela.value = 0;
}

function calcular(){
    try{
        expressao = eval(expressao);
        tela.value = expressao;
    } catch {
        tela.value = "Erro";
        expressao = "";
    }
}

function apagar(){
    expressao = expressao.slice(0, -1);
    tela.value = expressao;
}
    