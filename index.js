const response = document.querySelector("#response");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "Talvez.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]


function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Digite sua pergunta")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)
    
    const pergunta = "<div>" + inputPergunta.value + "</div>"
    
    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)


    response.innerHTML =  pergunta + respostas[numeroAleatorio]
    response.style.opacity = 1;
   
    inputPergunta.value = " ";
    inputPergunta.focus();


    setTimeout(function(){
        response.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000)   
}
    