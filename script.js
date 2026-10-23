const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O carro em que você e seus amigos estavam quebra no meio de uma estrada deserta cercada por uma floresta escura. O sinal do celular sumiu. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Sugerir que todos fiquem juntos dentro do carro até o amanhecer.",
                afirmacao: "Você agiu com prudência e preferiu a segurança do grupo."
            },
            {
                texto: "Pegar uma lanterna e ir sozinho procurar ajuda na floresta.",
                afirmacao: "Sua coragem — ou imprudência — o levou direto para o perigo."
            }
        ]
    },
    {
        enunciado: "Enquanto decidem o que fazer, vocês ouvem um barulho estranho vindo de uma cabana abandonada a poucos metros da estrada. Qual a sua reação?",
        alternativas: [
            {
                texto: "Ignorar o barulho e trancar as portas do veículo.",
                afirmacao: "Manteve a cabeça fria e evitou investigar o desconhecido."
            },
            {
                texto: "Caminhar até a cabana para ver se há alguém que possa ajudar.",
                afirmacao: "Sua curiosidade falou mais alto do que o seu instinto de sobrevivência."
            }
        ]
    },
    {
        enunciado: "Na cabana, uma porta se tranca sozinha e as luzes começam a piscar. Uma figura mascarada surge no fim do corredor. Como você se posiciona?",
        alternativas: [
            {
                texto: "Procura imediatamente algo afiado para se defender e encara a ameaça.",
                afirmacao: "Decidiu lutar com todas as forças pela sua vida."
            },
            {
                texto: "Corre para a janela mais próxima e pula sem olhar para trás.",
                afirmacao: "Priorizou a fuga rápida para garantir sua integridade."
            }
        ]
    },
    {
        enunciado: "Ao escapar para o pátio, você encontra uma chave no chão perto de uma caminhonete antiga. O que você faz?",
        alternativas: [
            {
                texto: "Tenta ligar a caminhonete rapidamente para fugir daquele lugar.",
                afirmacao: "Apostou tudo em um veículo antigo para uma fuga rápida."
            },
            {
                texto: "Esconde-se nos arbustos até ter certeza de que o caminho está livre.",
                afirmacao: "Preferiu o sigilo e a paciência para analisar a situação."
            }
        ]
    },
    {
        enunciado: "Um dos seus amigos tropeça e pede ajuda enquanto a figura sombria se aproxima. Qual é a sua decisão final?",
        alternativas: [
            {
                texto: "Volta para resgatar seu amigo, arriscando a própria vida.",
                afirmacao: "Mostrou lealdade inabalável ao resgatar seu companheiro."
            },
            {
                texto: "Continua correndo para salvar a si mesmo antes que seja tarde.",
                afirmacao: "Colocou sua própria sobrevivência em primeiro lugar."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O Amanhecer...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
