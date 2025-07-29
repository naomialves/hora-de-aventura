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
                texto: "Isso é maravilhoso!",
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
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
