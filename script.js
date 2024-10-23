let cantTruth = false;

const arrego = [
    'tome um shot',
    'tome um shot',
    'tome um shot',
    'tome um shot',
    'tome um shot',
    'mostre a bunda',
    'faça o próximo desafio junto com o próximo que escolher desafio',
    'fique sem camisa até a próxima rodada',
    'de um selinho no poximo que escolher desafio',
    'tire um desafio novamente <br><br>(não pode amarelar)',
    'todos tomam um shot',
    'deixe algeum te fazer um desafio <br><br>(não pode amarelar)'
]

const esquenta = [
    'verdade agora não é uma opção',
    'de um seleinho na pessoa da sua direita',
    'de um seleinho na pessoa da sua esquerda',
    'beije lentamente o pescoço da pessoa à sua direita',
    'beije lentamente o pescoço da pessoa à sua esquerda',
    'de um selinho triplo',
    'todas as mulheres trocam de lugar',
    'todos os homens trocam de lugar',
    'dê um selinho em todos da roda (sem choro)',
    'faça um desafio para a pessoa à sua esquerda',
    'faça um desafio para a pessoa à sua direita',
    'escolha uma pessoa, ela somente pode escolher desafio',
    'você somente pode escolher desafio',
    'Faça uma massagem nos ombros da pessoa à sua esquerda.',
    'Faça um carinho nas pernas da pessoa à sua direita.',
    'Dê um beijo suave na barriga da pessoa à sua direita.',
    'Deixe a pessoa à sua esquerda beijar seu pescoço.',
    'Beije suavemente o ombro da pessoa à sua esquerda.',
    'Deixe a pessoa à sua direita morder de leve seu ombro.',
    'morda suavemente a orelha da pessoa a sua esquerda',
    'Dê um beijo suave na nuca da pessoa à sua esquerda.',
    'Dê 3 palmadas na pessoa a sua direita',
    'faça uma pose, o último que te imitar, tem que te dar um beijo',
    'escolha duas pessoas para se beijarem',
    'deixe a pessoa a sua esquerda pegar na sua bunda',
    'deixe a pessoa a sua direita pegar na sua bunda',
    'de um selinho encenado na pessoa a sua direita inclinando-a para trás, como nos contos de fadas',
    'de um beijo no umbigo da pessoa a sua esquerda',
    'escolha duas pessoas para trocarem de camisa na frente de todos',
    'beba uma dose no umbigo de alguem',
    'pegue na bunda da pessoa a sua esquerda',
    'pegue na bunda da pessoa a sua direita',
    'moda suavemente os lábios da pessoa a sua esquerda',
    'moda suavemente os lábios da pessoa a sua direita',
    'pegue na bunda da pessoa mais avantajada',
    'pegue nos seios da pessoa mais avantajada',
    'beije um jogador no lugar que ele escolher',
    'deixe a pessoa a sua direita autografar sua bunda',
    'deixe a pessoa a sua esquerda autografor sua bunda',
    'deixe a pessoa a sua direita autografar seus seios',
    'deixe a pessoa a sua esquerda autografor seus seios',
    'deixe alguem morder a sua bunda',
    'mostre sua roupa intima completa',
    'tente tirar o sutiã de uma garota, usando apenas uma mão',
    'o jogador a sua esquerda deve escolher uma parte do copo do jogador a sua direita para voce dar um chupão <br><br>(quero ver a marquinha em)',
    'deixe alguém te dar um chupão <br><br>(quero ver a marquinha em)',
    'deixe alguém te fazer algum desafio'
]

const quente = [
    'verdade agora não é uma opção',
    'escolha alguém para tirar uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'tire uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'a pessoa à sua direita tira uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'a pessoa à sua esquerda tira uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'beije o pescoço da pessoa à sua direita <br><br>(10 segundos)',
    'beije o pescoço da pessoa à sua esquerda <br><br>(10 segundos)',
    'se você for mulher, fique sentada no colo de um homem; se você for homem, escolha uma mulher para ficar sentada no seu colo <br><br>(5 rodadas)',
    'dê um tapa na bunda da pessoa à sua esquerda',
    'mostre os seios para todos da roda',
    'beije a pessoa à sua direita <br><br>(10 segundos)',
    'dê um beijo triplo com as pessoas ao seu lado <br><br>(10 segundos)',
    'todas as mulheres da roda tiram uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'todos os homens da roda tiram uma peça de roupa <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'se você for mulher, rebole no colo de um homem; se você for homem, escolha uma mulher para rebolar no seu colo <br><br>(15 segundos)',
    'fique só de roupa íntima <br><br>(3 rodadas)',
    'escolha duas pessoas para se beijarem <br><br>(10 segundos)',
    'se você for mulher, escolha um homem (aleatório) para acariciar seus seios; se você for homem, acaricie os seios de alguma mulher <br><br>(10 segundos) <br><br>(por baixo da roupa)',
    'todas as mulheres trocam de lugar',
    'todos os homens trocam de lugar',
    'dê um chupão na pessoa à sua esquerda',
    'simule uma posição sexual com a pessoa à sua direita <br><br>(30 segundos)',
    'faça um desafio para a pessoa à sua esquerda',
    'faça um desafio para a pessoa à sua direita',
    'tire uma peça de roupa <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
    'escolha alguém para tirar uma peça de roupa <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
    'todos te dão um tapa na bunda',
    'beije a parte íntima da pessoa à sua direita',
    'deixe a pessoa à sua esquerda tirar suas roupas e fique assim por <br><br>(3 rodadas)',
    'tire as roupas da pessoa à sua direita e fique assim por <br><br>(3 rodadas)',
    'venda seus olhos, todas as pessoas do sexo oposto te dão um beijo, adivinhe quem é quem',
    'filme as próximas 5 rodadas <br><br>(apenas desafio pode ser escolhido)',
    'se você for homem, tire o sutiã de uma mulher (aleatória); se for mulher, deixe um homem (aleatório) tirar seu sutiã <br><br>(apenas com a boca)',
    'você está com sorte: todos devem tirar uma peça de roupa menos você <br><br>(5 rodadas) <br><br>(calçados, meias ou acessórios não contam)',
    'comece beijando o pescoço de alguém da sua escolha e só pare quando chegar às partes íntimas',
    'você é um cavalo, escolha alguém para cavalgar em você <br><br>(30 segundos)',
    'dê uma mordidinha na bunda de todas as mulheres <br><br>(por baixo da roupa)',
    'gire uma garrafa no meio da roda; quem estiver apontado tira uma peça de roupa <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
    'escolha uma cor: todos devem tirar uma peça de roupa de acordo com a cor escolhida <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
    'escolha uma pessoa, ela somente pode escolher desafio',
    'você somente pode escolher desafio',
    'passe a língua suavemente no pescoço de alguém à sua escolha <br><br>(10 segundos)',
    'faça um strip-tease para o grupo até ficar de roupa íntima',
    'escolha alguém para dar um beijo longo na boca <br><br>(15 segundos)',
    'dê um beijo molhado no peito ou seio de alguém à sua escolha <br><br>(10 segundos)',
    'venda seus olhos e deixe alguém te beijar em qualquer parte do corpo <br><br>(20 segundos)',
    'faça uma massagem sensual na pessoa à sua frente <br><br>(1 minuto)',
    'dê uma mordida suave no lábio de alguém à sua escolha <br><br>(10 segundos)',
    'simule uma cena de sexo com alguém à sua esquerda <br><br>(30 segundos)',
    'escolha duas pessoas para simular uma cena íntima com você <br><br>(30 segundos)',
    'troque uma peça de roupa íntima com alguém do grupo <br><br>(se possível)',
    'deixe a pessoa à sua esquerda acariciar suas costas de maneira sensual <br><br>(30 segundos)',
    'escolha alguém para te beijar por cima da roupa em uma área íntima <br><br>(10 segundos)',
    'faça uma pose erótica com alguém à sua escolha e segure <br><br>(30 segundos)',
    'faça uma dança sensual no colo da pessoa à sua direita <br><br>(1 minuto)',
    'dê uma lambida no abdômen de alguém à sua escolha <br><br>(10 segundos)',
    'se você for mulher, deixe um homem tirar sua calcinha com os dentes <br><br>(se possível)',
    'faça uma dança provocativa para o grupo <br><br>(1 minuto)',
    'deixe alguém te beijar da cabeça aos pés <br><br>(exceto partes íntimas)',
    'simule uma posição sexual com uma pessoa à sua escolha <br><br>(30 segundos)',
    'coloque uma venda e deixe o grupo te tocar em três partes diferentes',
    'faça um gemido sensual no ouvido da pessoa à sua esquerda',
    'deixe alguém te tocar em uma área íntima <br><br>( ela escolhe se é por cima da roupa ou não) <br><br>(10 segundos)',
    'todos ficam sem roupa e tiram uma foto em grupo para guardar o momento',
    'faça um strip-tease para alguém específico <br><br>(até ficar sem roupa)',
    'escolha alguém para dar um beijo no seu pescoço e descer até a sua barriga <br><br>(20 segundos)',
    'simule um beijo apaixonado no pescoço de alguém por trás <br><br>(15 segundos)',
    'faça uma dança sensual para o grupo enquanto tira uma peça de roupa',
    'deixe a pessoa à sua frente passar a mão por baixo de sua roupa e te tocar onde desejar <br><br>(30 segundos)',
    'sussurre uma fantasia erótica no ouvido da pessoa à sua direita',
    'deixe uma pessoa à sua escolha te beijar onde ela quiser <br><br>(20 segundos)',
    'beije ou lamba os dedos da pessoa à sua frente <br><br>(15 segundos)',
    'deixe a pessoa à sua esquerda te despir até a roupa íntima <br><br>(se ainda estiver vestindo)',
    'dê uma mordidinha suave no bumbum da pessoa à sua escolha',
    'venda seus olhos e deixe alguém tocar seus lábios com uma parte do corpo; você tem que adivinhar qual parte (10 segundos)',
    'deixe alguém tirar sua roupa íntima e troque de lugar com essa pessoa',
    'escolha alguém para massagear suas partes íntimas por cima da roupa <br><br>(15 segundos)',
    'faça uma pose sexual em dupla e deixe alguém do grupo fotografar <br><br>(utilizando as roupas que estão vestidos)',
    'beije os pés de alguém <br><br>(10 segundos)',
    'imite sua posição sexual favorita com alguém do grupo <br><br>(30 segundos)',
    'deixe a pessoa à sua direita escolher uma parte do seu corpo para você expor <br><br>(10 segundos)',
    'sente no colo de alguém e provoque <br><br>(1 minuto)',
    'deixe alguém te beijar por cima da roupa nas partes íntimas <br><br>(15 segundos)',
    'escolha alguém para receber um "beijo erótico" que percorre do pescoço até o umbigo',
    'deixe duas pessoas do grupo tirarem sua roupa até ficar de roupa íntima',
    'faça uma dança provocativa em frente a alguém e deixe-o te tocar levemente <br><br>(30 segundos)',
    'seja amarrado(a) (de leve) e deixe uma pessoa te tocar levemente <br><br>(30 segundos)',
    'mande um nudes explícito para todos da roda',
    'todos da roda te mandam um nudes explícito',
    'escolha alguém, vocês devem se juntar e mandar um nudes explícito para todos da roda',
    'beije a pessoa à sua direita em um lugar que você nunca beijou antes <br><br>(10 segundos)',
    'tire uma peça de roupa e faça uma pose sexy para o grupo <br><br>(não pode ser calçados, meias ou acessórios)',
    'simule a posição papai e mamãe com a pessoa a sua frente <br><br>(10 segundos)',
    'deite no colo da pessoa a sua esquerda e receba 5 palmadas na bunda',
    'deite no colo da pessoa a sua direita e receba 5 palmadas na bunda',
    'simule a posição 69 com uma pessoa aleatória',
    'todos da roda colocam a mão nas partes intimas da pessoa a sua dirieta <br><br>(3 rodadas)',
    'todas as meninas se beijam',
    'simule uma cena de gangbang com a garota com mais cara de inocente',
    'permita que a pessoa a sua direita dê um chupão em você, no lugar que a pessoa a sua esquerda escolher',
    'escolha: tire toda a parte de cima da pessoa a sua direita ou tire toda a parte de baixo da pessoa a sua esquerda',
    'passe um cubo de gelo pelo corpo da pessoa a sua direita',
    'passe a mão em todas as rolas da roda',
    'passe a mão em todas as bucetas da roda',
    'deixe a pessoa da sua esquerda escrever ou desenhar algo no seu Monte de Vênus <br><br>(pra cima da sua área íntima)'
];

const verdades = [
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
];

const euNunca = [
    "broxei",
    "enviei uma foto íntima.",
    "usei brinquedos durante o sexo.",
    "fiz sexo em um lugar público.",
    "fui pego(a) no flagra enquanto fazia sexo.",
    "tive um sonho erótico com alguém do grupo.",
    "beijei mais de uma pessoa na mesma noite.",
    "pratiquei sexting.",
    "transei em uma festa.",
    "transei no carro.",
    "tive uma noite de sexo casual.",
    "fiz sexo sem estar sóbrio(a).",
    "participei de um ménage à trois.",
    "transei em uma piscina ou no mar.",
    "fiz sexo oral em alguém.",
    "dormi com alguém e me arrependi no dia seguinte.",
    "traí em um relacionamento.",
    "assisti a vídeos pornográficos.",
    "usei algemas ou vendas durante o sexo.",
    "tive um crush em alguém comprometido.",
    "transei com alguém que conheci online.",
    "menti sobre o número de parceiros sexuais que tive.",
    "fui a um clube de striptease.",
    "fiz sexo em um local de trabalho.",
    "enviei nudes para a pessoa errada.",
    "tive fantasias com alguém do mesmo sexo.",
    "fiquei com mais de uma pessoa no mesmo dia.",
    "dei ou recebi um tapa durante o sexo.",
    "fiz uma massagem sensual em alguém.",
    "recebi ou fiz um strip-tease.",
    "transei em uma varanda ou terraço.",
    "fiz sexo com alguém que acabei de conhecer.",
    "tive um sonho erótico com meu chefe ou colega de trabalho.",
    "transei em um banheiro público.",
    "tive uma experiência sexual em um avião.",
    "disse 'eu te amo' para conseguir sexo.",
    "assisti a um filme adulto com alguém.",
    "fiz sexo na casa de outra pessoa.",
    "experimentei uma posição sexual incomum.",
    "tive um encontro sexual com alguém mais velho.",
    "tive um encontro sexual com alguém mais jovem.",
    "usei uma fantasia erótica.",
    "tive uma relação de uma noite.",
    "enviei mensagens de teor sexual para a pessoa errada.",
    "fiz sexo no chuveiro.",
    "fiz sexo com alguém apenas pela aparência.",
    "fui para a cama com alguém só por causa do álcool.",
    "usei a desculpa de estar doente para não fazer sexo.",
    "pesquisei sobre fetiches na internet.",
    "assisti pornografia com meu parceiro(a).",
    "pensei em outra pessoa enquanto fazia sexo.",
    "usei óleos ou cremes durante o sexo.",
    "fiz sexo em frente a um espelho.",
    "fui a um clube de swing.",
    "fiz sexo sem preservativo com alguém que não conhecia bem.",
    "tirei fotos íntimas de outra pessoa.",
    "fiquei excitado(a) com uma cena de filme.",
    "beijei alguém do mesmo sexo.",
    "tive uma experiência de voyeurismo.",
    "transei em um hotel.",
    "usei comida durante o sexo.",
    "gritei o nome errado durante o sexo.",
    "tive um orgasmo fingido.",
    "fiz sexo com alguém comprometido.",
    "me apaixonei por alguém só por causa do sexo.",
    "tentei recriar uma cena de filme pornô.",
    "fiz sexo com luzes acesas.",
    "transei em um camping ou acampamento.",
    "tive uma conversa explícita no telefone.",
    "pesquisei novas posições sexuais para tentar.",
    "tive um parceiro(a) que usava lingerie especial.",
    "vi alguém nu(a) por acidente.",
    "tive uma fantasia com um(a) amigo(a) próximo(a).",
    "tive um desejo por alguém do grupo.",
    "fui convidado(a) para um ménage à trois.",
    "flertei com alguém comprometido.",
    "fiquei excitado(a) em um local inadequado.",
    "fiz sexo com um(a) ex.",
    "transei em uma festa de casamento.",
    "brinquei de verdade ou consequência com perguntas eróticas.",
    "enviei uma mensagem de teor sexual para um(a) ex.",
    "enviei flores ou presentes para alguém após uma noite juntos.",
    "fiz sexo sem estar completamente interessado(a).",
    "fiz sexo com mais de uma pessoa em uma semana.",
    "fiquei com alguém apenas por status.",
    "fui convidado(a) para um encontro através de aplicativos.",
    "enviei uma mensagem de teor sexual logo depois de conhecer alguém.",
    "fiquei com alguém que era casado(a).",
    "tive uma experiência sexual com alguém famoso(a).",
    "fui a uma festa só para tentar sexo com alguém.",
];

function getRandomElement(array) {
    if (array.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);

    const randomItem = array[randomIndex];

    if (randomItem == 'verdade agora não é uma opção') {
        cantTruth = true;

        const truthBtn = document.getElementById('verdadeVord')
        truthBtn.setAttribute('disabled', cantTruth);
    }

    return randomItem;
}

function handleClickEffect(element) {
    element.classList.add('clicked');

    requestAnimationFrame(() => {
        setTimeout(() => {
            element.classList.remove('clicked');
        }, 100);
    });
}

document.querySelectorAll('.clickable').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        handleClickEffect(element);
    });
});

function handlePlay() {
    const init = document.getElementById('init');
    const games = document.getElementById('games');

    requestAnimationFrame(() => {
        setTimeout(() => {
            init.classList.remove('active');
        }, 200);

        setTimeout(() => {
            games.classList.add('active');
        }, 300);
    });
}

function handleChange(e) {
    const initBtn = document.getElementById('initBtn');

    if (!!e.options.value) {
        initBtn.classList.add('show')
    }
}

function handleInit() {
    document.querySelectorAll('.ctn').forEach((e) => {
        e.classList.remove('active');
    });

    const questionsTxt = document.getElementById('questionsTxt');
    questionsTxt.innerHTML = "";

    const questions = document.getElementById('questions');
    const form = document.getElementById('games');

    requestAnimationFrame(() => {
        setTimeout(() => {
            questions.classList.add('active');

            if (form.options.value == 'NUNCA') {
                document.getElementById('divBtnsNever').style.display = 'flex';
                document.getElementById('divBtnsVord').style.display = 'none';
                document.querySelector('.headerTitle').innerHTML = 'eu nunca...'
            } else {
                document.getElementById('divBtnsVord').style.display = 'flex';
                document.getElementById('divBtnsNever').style.display = 'none';
                document.querySelector('.headerTitle').innerHTML = 'verdade ? ou desafio !'
            }
        }, 300);
    });
}

function handleQuestion(arr) {
    const questionsTxt = document.getElementById('questionsTxt');

    questionsTxt.innerHTML = getRandomElement(arr)

    requestAnimationFrame(() => {
        questionsTxt.classList.add('rotate');

        setTimeout(() => {
            questionsTxt.classList.remove('rotate');
        }, 200);
    });
}

function onClickVerdade() {
    handleQuestion(verdades)
}

function onClickArreguei() {
    handleQuestion(arrego)
}

function onClickDesafio() {
    const form = document.getElementById('games');

    if (form.options.value == 'ESQUENTA') {
        handleQuestion(esquenta)
    } else {
        handleQuestion(quente)
    }
}

function onClickEuNunca() {
    handleQuestion(euNunca)
}

function goGames() {
    document.querySelectorAll('.ctn').forEach((e) => {
        e.classList.remove('active');
    });

    const games = document.getElementById('games');

    requestAnimationFrame(() => {
        setTimeout(() => {
            games.classList.add('active');
        }, 300);
    });
}

function openModalApoie() {
    document.getElementById('modelApoie').classList.add('active');
}

function closeModalApoie() {
    document.getElementById('modelApoie').classList.remove('active');
}

function copyPix() {
    const valuePix = `00020126750014br.gov.bcb.pix01369a684781-85af-4f73-842f-6583bcbfdeb60213Apoio
            ao APP!5204000053039865802BR5921Rafael Angelo
            Justino6008Brasilia62090505epfnl63045A5F`

    document.getElementById('modelApoie').classList.remove('active');

    navigator.clipboard.writeText(valuePix)
        .then(() => {
            alert('Código copiado!');
        })
        .catch(err => {
            console.error('Erro ao copiar: ', err);
        });
}