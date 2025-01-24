let arregoIndex = 0;
let verdadeIndex = 0;
let tempArregoArr = [];
let tempVerdadeArr = [];

const corpo = [
    [
        'a boca',
        'a orelha',
        'o pescoço',
        'a mão',
        'o pé',
        'a barriga',
        'as costas',
        'a coxa',
        'a bunda',
        'o peito',
        'a nuca',
        'o umbigo',
        'avirilha',
    ],
];

const acao = [
    [
        'beije',
        'morda',
        'lamba',
        'chupe',
        'acaricie',
        'massageie',
    ],
];

const quem = [
    [
        'direita',
        'esquerda',
    ],
];



const arrego = [
    [
        'tome um shot',
        'mostre a bunda',
        'mostre os peitos',
        'faça o próximo desafio junto com o próximo que escolher desafio',
        'fique sem camisa  até a sua próxima rodada',
        'fique apenas de roupa intima até a sua próxima rodada',
        'de um selinho no poximo que escolher desafio',
        'de um selinho em todos da roda',
        'role um dado erótico',
        'de um beijo no poximo que escolher desafio',
        'tire um desafio novamente <br><br>(não pode amarelar)',
        'todos tomam um shot',
        'cumpra todos os desafios que as pessoas tirarem até a sua próxima rodada',
        'deixe alguém te fazer um desafio <br><br>(não pode amarelar)',
    ],
]

const verdades = [
    [
        'verdade agora não é uma opção',
        'responda qualquer pergunta que alguem te fizer',
        'todos devem escolher desafio antes de escolherem verdade novamente',
        'já fez sexo anal?',
        'já fez ménage?',
        'tem vontade de fazer ménage?',
        'já mentiu orgasmo para alguém? Por quê?',
        'qual o lugar mais inusitado que você já transou?',
        'pergunte qualquer coisa para a pessoa à sua direita',
        'já gozou/foi gozado dentro?',
        'qual sua posição sexual preferida?',
        'qual posição sexual você mais detesta?',
        'deu sorte, não faça nada e a próxima pessoa deve escolher desafio',
        'já ficou com alguém do mesmo sexo?',
        'já transou com alguém do mesmo sexo? (não vale ménage)',
        'já fez sexo em um local público ou área aberta?',
        'diga um fetiche',
        'você já utilizou algum brinquedo sexual? Qual?',
        'já fez fotos ou vídeos durante o sexo?',
        'já mandou nudes?',
        'já fez ou recebeu uma sessão de massagem erótica?',
        'já transou com alguém que você mal conhecia?',
        'já teve uma experiência de sexo em um acampamento?',
        'já fez sexo ou sexo oral na escola?',
        'em uma escala de 0 a 10, o quão hétero você é?',
        'já transou com mais de uma pessoa no mesmo dia (sem ser em ménage)?',
        'o que acha de casa de swing?',
        'você deixaria seu parceiro fazer sexo com alguém enquanto você só assiste?',
        'qual seu tipo de pornô favorito?',
        'o que gostaria de experimentar um dia?',
        'qual foi a sua experiência sexual mais constrangedora?',
        'já fingiu um orgasmo? Por quê?',
        'qual parte do seu corpo você acha mais atraente?',
        'qual a sua maior fantasia sexual?',
        'alguma vez já assistiu pornografia com alguém?',
        'qual foi o maior número de vezes que você fez sexo em um único dia?',
        'qual foi o lugar mais público onde você já transou?',
        'já fez ou recebeu um strip-tease?',
        'qual é o seu maior segredo na cama?',
        'alguma vez já teve vontade de transar com alguém aqui?',
        'já fez sexo em um carro? Como foi?',
        'qual a sua opinião sobre sexo a três ou mais?',
        'qual foi o lugar mais estranho onde você já fez sexo?',
        'o que mais te excita em um parceiro?',
        'você tem algum fetiche? Se sim, qual?',
        'qual foi a experiência sexual mais longa que já teve?',
        'já transou com alguém apenas por atração física?',
        'alguma vez já se envolveu romanticamente ou sexualmente com mais de uma pessoa ao mesmo tempo?',
        'qual foi a vez que você mais se arrependeu de ter transado com alguém?',
        'você prefere ser dominado(a) ou dominar na cama?',
        'qual foi o maior período que já ficou sem sexo?',
        'qual foi a maior quantidade de parceiros que já teve em uma única noite?',
        'já ficou com alguém comprometido?',
        'qual é o maior tabu sexual que você tem?',
        'já fez sexo virtual? Como foi?',
        'alguma vez já quis transar com um(a) amigo(a) mas não teve coragem?',
        'qual é a coisa mais louca que você faria ou fez por sexo?',
        'qual parte do corpo do sexo oposto você acha mais excitante?',
        'já fez sexo em troca de algo?',
        'já transou sem estar com vontade apenas para agradar o parceiro?',
        'alguma vez já se envolveu em um relacionamento puramente sexual?',
        'qual a sua opinião sobre brinquedos sexuais?',
        'você acha que tamanho importa? Por quê?',
        'qual foi a situação mais embaraçosa que já passou enquanto fazia sexo?',
        'Já nadou pelado?',
        'Com quantas pessoas você já fez sexo na vida?',
        'Luzes acesas, meia luz ou apagadas?',
        'Já foi pego no flagra transando ou se masturbando?',
        'Você gosta de receber sexo oral?',
        'Já ficou com alguém comprometido?', ~
        'Já broxou?',
        'Qual a coisa mais estranha que já te pediram na hora H?',
        'O que para você é proibido no sexo?',
        'Já transou na cama dos seus pais?',
        'se tivesse que fazer apenas uma posição sexual na sua vida, qual seria?',
        'ja usou plug anal? usaria?',
    ],
];

const desafio = [
    [
        'beije',
        'morda',
        'lamba',
        'chupe',
        'acaricie',
        'massageie',
    ],
];

const jogadores = [
    {
        nome: "a",
        sexo: "a",
        preferencia: "a",
    },
    {
        nome: "b",
        sexo: "b",
        preferencia: "b",
    },
    {
        nome: "c",
        sexo: "c",
        preferencia: "c",
    }
];
let activePlayer = 0;

function verifyDice(text) {
    const dice = document.getElementById('dado');

    if (text == 'role um dado erótico') {
        dice.style.display = 'block';
    } else {
        dice.style.display = 'none';
    }
}

function shuffleArray(array) {
    // Faz uma cópia para não modificar o array original
    const shuffled = array.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
        // Gera um índice aleatório entre 0 e i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Troca os elementos na posição i e randomIndex
        [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
    }

    return shuffled;
}

function handleQuestion(arr) {
    const questionsTxt = document.getElementById('questionsTxt');

    // questionsTxt.innerHTML = getRandomElement(arr[targetLanguage]);
    // questionsTxt.innerHTML = getRandomElement(arr);

    requestAnimationFrame(() => {
        questionsTxt.classList.add('rotate');

        setTimeout(() => {
            questionsTxt.classList.remove('rotate');
        }, 200);
    });
}

function nextPlayer() {
    const player = document.getElementById('activePlayer');

    const randomPlayer = Math.floor(Math.random() * jogadores.length);
    const randomPlayerItem = jogadores[randomPlayer];

    console.log(randomPlayer, randomPlayerItem)

    const adjustedPlayer = activePlayer % jogadores.length;

    if (jogadores.length > 0) {
        player.innerHTML = randomPlayerItem.nome;
    }
}

function openModalJogadores() {
    document.getElementById('modal').classList.add('active');
}

function closeModalJogadores() {
    document.getElementById('modal').classList.remove('active');
}

function addJogador() {
    const form = document.getElementById('form-jogadores');

    const jogador = {
        nome: form.nome.value,
        sexo: form.sexo.value,
        preferencia: form.preferencia.value
    }

    jogadores.push(jogador);

    form.reset();
}


function handleInit() {
    const init = document.getElementById('init');
    const questions = document.getElementById('questions');

    arregoIndex = 0;
    verdadeIndex = 0;
    fazIndex = 0;
    tempArregoArr = shuffleArray(arrego[0]);
    tempVerdadeArr = shuffleArray(verdades[0]);

    requestAnimationFrame(() => {
        setTimeout(() => {
            init.classList.remove('active');
        }, 200);

        setTimeout(() => {
            questions.classList.add('active');
        }, 300);
    });
}

function goInit() {
    const questions = document.getElementById('questions');
    const init = document.getElementById('init');

    requestAnimationFrame(() => {
        setTimeout(() => {
            questions.classList.remove('active');
        }, 200);

        setTimeout(() => {
            init.classList.add('active');
        }, 300);
    });
}

function onClickVerdade() {
    nextPlayer();
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = verdadeIndex % tempVerdadeArr.length;

    console.log(verdadeIndex, tempVerdadeArr.length);

    questionsTxt.innerHTML = tempVerdadeArr[adjustedIndex];

    handleQuestion(verdades);
    verdadeIndex++;
}

function onClickArreguei() {
    nextPlayer();
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = arregoIndex % tempArregoArr.length;

    console.log(arregoIndex, tempArregoArr.length);

    questionsTxt.innerHTML = tempArregoArr[adjustedIndex];

    verifyDice(tempArregoArr[adjustedIndex]);

    handleQuestion(arrego);
    arregoIndex++;
}

function onClickDesafio() {
    nextPlayer();
    const questionsTxt = document.getElementById('questionsTxt');

    handleQuestion(arrego);
}

function onClickDado() {
    const questionsTxt = document.getElementById('questionsTxt');

    const randomAcao = Math.floor(Math.random() * acao[0].length);
    const randomAcaoItem = acao[0][randomAcao];

    const randomCorpo = Math.floor(Math.random() * corpo[0].length);
    const randomCorpoItem = corpo[0][randomCorpo];

    const randomQuem = Math.floor(Math.random() * quem[0].length);
    const randomQuemItem = quem[0][randomQuem];

    questionsTxt.innerHTML = `${randomAcaoItem} ${randomCorpoItem} da pessoa a sua ${randomQuemItem}`;

    handleQuestion(arrego);
}


function onClickArreguei() {
    nextPlayer();
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = arregoIndex % tempArregoArr.length;

    questionsTxt.innerHTML = tempArregoArr[adjustedIndex];

    verifyDice(tempArregoArr[adjustedIndex]);

    handleQuestion(arrego);
    arregoIndex++;
}