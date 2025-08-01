const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Reino Doce começa a sofrer com uma estranha decadência: as cores estão desbotando, os doces estão azedando, e ninguém sabe o motivo. A Princesa Jujuba descobre que isso está acontecendo porque o Coração de Cristal, uma joia mágica que mantém o equilíbrio emocional de todos os reinos, está rachando. O que você fará?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Ficou preocupado com o futuro do Reino Doce e o que a joia rachada pode causar."
            },
            {
                texto: "Hora da aventura!!",
                afirmacao:  "Acredita que a joia pode ser consertada e quer descobrir como ajudar a restaurar o equilíbrio."
            }
        ]
    },
    {
        enunciado:"O Reino Doce está à beira do caos! Finn descobriu que Jake, que antes era seu fiel companheiro, está sabotando o Coração de Cristal para controlar o poder da joia mágica. Agora, Finn precisa decidir o que fazer para salvar o Reino e recuperar a amizade de Jake. O que você faria?",
        alternativas: [
            {
                texto: "Enfrentar Jake e salvar o Reino Doce!",
                afirmacao:  "Finn está determinado a lutar contra Jake e proteger a joia, custe o que custar."
            },
            {
                texto: "Tentar entender por que Jake está fazendo isso.",
                afirmacao:  "Finn quer descobrir as motivações de Jake antes de enfrentá-lo, buscando uma solução pacífica."
            }
        ]
    },
    {
        enunciado:"Depois de descobrir que o Coração de Cristal está rachando, Finn percebe que Jake foi enfeitiçado por uma força misteriosa e está tentando destruir a joia para controlar o Reino Doce. Agora, Finn precisa decidir como agir para salvar seu amigo e o reino.",
        alternativas: [
            {
                texto: "Tentar quebrar o feitiço que domina Jake para trazê-lo de volta.",
                afirmacao: "Finn acredita que a amizade pode superar qualquer magia e está determinado a salvar Jake."
            },
            {
                texto: "Confrontar Jake e impedir que ele destrua o Coração de Cristal, mesmo que isso signifique lutar contra ele.",
                afirmacao:  "Finn sabe que proteger o reino é prioridade, mesmo que tenha que enfrentar seu amigo enfeitiçado."
            }
        ]
    },
    {
        enunciado: "Finn decide agir rápido para salvar o Reino Doce. Ele sente que precisa descobrir a origem do feitiço que controla Jake. Onde ele deve começar a busca?",
        alternativas: [
            {
                texto: "Investigar na Floresta Sombria, onde dizem que um antigo mago vive.",
                afirmacao:"Finn sabe que as respostas podem estar nas profundezas da Floresta Sombria, mesmo que seja perigoso."
            },
            {
                texto: "Buscar a ajuda da Princesa Jujuba, que conhece muitos segredos do reino.",
                afirmacao: "Finn confia no conhecimento e na sabedoria da Princesa para encontrar uma solução."
            }
        ]
    },
    {
        enunciado: "Após conseguir pistas, Finn encontra uma poção mágica capaz de quebrar feitiços, mas para usá-la ele precisa do ingrediente mais raro: a lágrima de um dragão doce. O que ele faz?",
        alternativas: [
            {
                texto: "Finn decide seguir as pistas até o dragão doce, acreditando que essa será a maneira mais rápida de obter a lágrima. Porém, ao longo da jornada, ele começa a sentir que talvez tenha escolhido o caminho errado, já que os desafios são maiores do que ele imaginava.",
                afirmacao: "Finn decide procurar o dragão doce para conseguir a lágrima, mas acaba se sentindo preso a uma jornada mais difícil do que imaginava, questionando se deveria ter escolhido outro caminho para quebrar o feitiço."
            },
            {
                texto:"Embora as pistas sejam úteis, Finn começa a se perguntar se deveria confiar apenas nelas para alcançar seu objetivo. Ele percebe que, para ter sucesso, precisará confiar também na sua própria intuição e sabedoria.",
               afirmacao: "Ao buscar a lágrima do dragão doce, Finn percebe que confiar apenas em pistas pode ser arriscado. Ele começa a entender que sua própria sabedoria e decisões são cruciais para alcançar seu objetivo, e que não pode depender apenas de atalhos mágicos."
            }
            ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
