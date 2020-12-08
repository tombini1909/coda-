
var nome = "Lucas Tombini";
var cargo = "CTO - Growdev"
var nomeHtml = document.getElementById("nome-no-html");
var CargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1")
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome){
nomeHtml.innerHTML = nome;   
}

function colocarCargoNoHtml(cargo){
    CargoHtml.innerHTML = cargo;
}

function logarNome(){
    console.log(nome);
}

function clickNoProjetos(){
    console.log("Clicou no botão projetos");
    texto2.style.display = "block"
    texto1.style.display = "none"
}

function clickNoSobre(){
    console.log("Cliclou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
