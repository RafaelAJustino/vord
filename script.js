const desafios = [
    'verdade agora não é uma opção',
    'escolha alguém para tirar uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'tire uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'a pessoa à sua direita tira uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'a pessoa à sua esquerda tira uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'beije o pescoço da pessoa à sua direita (10 segundos)',
    'beije o pescoço da pessoa à sua esquerda (10 segundos)',
    'se você for mulher, fique sentada no colo de um homem; se você for homem, escolha uma mulher ficar sentada no seu colo (5 rodadas)',
    'dê um tapa na bunda da pessoa à sua esquerda',
    'mostre os seios para todos da roda',
    'beije a pessoa à sua direita (10 segundos)',
    'dê um beijo triplo com as pessoas ao seu lado (10 segundos)',
    'todas as mulheres da roda tiram uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'todos os homens da roda tiram uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'se você for mulher, rebole no colo de um homem; se você for homem, escolha uma mulher para rebolar no seu colo (15 segundos)',
    'fique só de roupa íntima (3 rodadas)',
    'escolha duas pessoas para se beijarem (10 segundos)',
    'se você for mulher, escolha um homem (aleatório) para acariciar seus seios; se você for homem, acaricie os seios de alguma mulher (10 segundos) (por baixo da roupa)',
    'todas as mulheres trocam de lugar',
    'todos os homens trocam de lugar',
    'dê um chupão na pessoa à sua esquerda',
    'dê um selinho em todos da roda (sem choro)',
    'simule uma posição sexual com a pessoa à sua direita (30 segundos)',
    'faça um desafio para a pessoa à sua esquerda',
    'faça um desafio para a pessoa à sua direita',
    'tire uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha alguém para tirar uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'todos te dão um tapa na bunda',
    'beije a parte íntima da pessoa à sua direita',
    'deixe a pessoa à sua esquerda tirar suas roupas e fique assim por (3 rodadas)',
    'tire as roupas da pessoa à sua direita e fique assim por (3 rodadas)',
    'venda seus olhos, todas as pessoas do sexo oposto te dão um beijo, adivinhe quem é quem',
    'filme as próximas 5 rodadas (apenas desafio pode ser escolhido)',
    'se você for homem, tire o sutiã de uma mulher (aleatória); se for mulher, deixe um homem (aleatório) tirar seu sutiã (apenas com a boca)',
    'você está com sorte: todos devem tirar uma peça de roupa menos você (5 rodadas) (calçados, meias ou acessórios não contam)',
    'comece beijando o pescoço de alguém da sua escolha e só pare quando chegar às partes íntimas',
    'você é um cavalo, escolha alguém para cavalgar em você (30 segundos)',
    'dê uma mordidinha na bunda de todas as mulheres (por baixo da roupa)',
    'gire uma garrafa no meio da roda; quem estiver apontado tira uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha uma cor: todos devem tirar uma peça de roupa de acordo com a cor escolhida (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha uma pessoa, ela somente pode escolher desafio',
    'você somente pode escolher desafio',
    'passe a língua suavemente no pescoço de alguém à sua escolha (10 segundos)',
    // Desafios novos
    'faça um strip-tease para o grupo até ficar de roupa íntima',
    'escolha alguém para dar um beijo longo na boca (15 segundos)',
    'dê um beijo molhado no peito ou seio de alguém à sua escolha (10 segundos)',
    'venda seus olhos e deixe alguém te beijar em qualquer parte do corpo (20 segundos)',
    'faça uma massagem sensual na pessoa à sua frente (1 minuto)',
    'dê uma mordida suave no lábio de alguém à sua escolha (10 segundos)',
    'simule uma cena de sexo com alguém à sua esquerda (30 segundos)',
    'escolha duas pessoas para simular uma cena íntima com você (30 segundos)',
    'troque uma peça de roupa íntima com alguém do grupo (se possível)',
    'dê um tapa erótico na bunda da pessoa à sua frente',
    'deixe a pessoa à sua esquerda acariciar suas costas de maneira sensual (30 segundos)',
    'escolha alguém para te beijar por cima da roupa em uma área íntima (10 segundos)',
    'faça uma pose erótica com alguém à sua escolha e segure por 30 segundos',
    'faça uma dança sensual no colo da pessoa à sua direita (1 minuto)',
    'dê uma lambida no abdômen de alguém à sua escolha (10 segundos)',
    'se você for mulher, deixe um homem tirar sua calcinha com os dentes (se possível)',
    'faça uma dança provocativa para o grupo (1 minuto)',
    'deixe alguém te beijar da cabeça aos pés (exceto partes íntimas)',
    'simule uma posição sexual com uma pessoa à sua escolha (30 segundos)',
    'coloque uma venda e deixe o grupo te tocar em três partes diferentes',
    'faça um gemido sensual no ouvido da pessoa à sua esquerda',
    'deixe alguém te tocar em uma área íntima ( ela escolhe se é por cima da roupa ou não) (10 segundos)',
    'todos ficam sem roupa e tiram uma foto em grupo para guardar o momento',
    'faça um strip-tease para alguém específico (até sem roupa)',
    'escolha alguém para dar um beijo no seu pescoço e descer até a sua barriga (20 segundos)',
    'simule um beijo apaixonado no pescoço de alguém por trás (15 segundos)',
    'faça uma dança sensual para o grupo enquanto tira uma peça de roupa',
    'deixe a pessoa à sua frente passar a mão por baixo de sua roupa e te tocar onde desejar (30 segundos)',
    'sussurre uma fantasia erótica no ouvido da pessoa à sua direita',
    'deixe uma pessoa à sua escolha te beijar onde ela quiser (20 segundos)',
    'beije ou lamba os dedos da pessoa à sua frente (15 segundos)',
    'deixe a pessoa à sua esquerda te despir até a roupa íntima (se ainda estiver vestindo)',
    'dê uma mordidinha suave no bumbum da pessoa à sua escolha',
    'venda seus olhos e deixe alguém tocar seus lábios com uma parte do corpo; você tem que adivinhar qual parte (10 segundos)',
    'deixe alguém tirar sua roupa íntima e troque de lugar com essa pessoa',
    'escolha alguém para massagear suas partes íntimas por cima da roupa (15 segundos)',
    'faça uma pose sexual em dupla e deixe alguém do grupo fotografar (utilizando as roupas que estão vestidos)',
    'beije os pés de alguém (10 segundos)',
    'imite sua posição sexual favorita com alguém do grupo (30 segundos)',
    'deixe a pessoa à sua direita escolher uma parte do seu corpo para você expor (10 segundos)',
    'sente no colo de alguém e provoque (1 minuto)',
    'deixe alguém te beijar por cima da roupa nas partes íntimas (15 segundos)',
    'escolha alguém para receber um "beijo erótico" que percorre do pescoço até o umbigo',
    'deixe duas pessoas do grupo tirarem sua roupa até ficar de roupa íntima',
    'faça uma dança provocativa em frente a alguém e deixe-o te tocar levemente (30 segundos)',
    'seja amarrado(a) (de leve) e deixe uma pessoa te tocar levemente (30 segundos)',
    'mande um nude explícito para todos da roda',
    'todos da roda te mandam um nude explícito',
    'escolha alguém, vocês devem se juntar e mandar um nude explícito para todos da roda',
    'beije a pessoa à sua direita em um lugar que você nunca beijou antes (10 segundos)',
    'tire uma peça de roupa e faça uma pose sexy para o grupo (não pode ser calçados, meias ou acessórios)',
];


let desafioAtivo = '';

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
    'já teve um creampie?',
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
];

let verdadeAtivo = '';

const getText = () => {
    return document.getElementById('text')
}

const getDivBtns = () => {
    return document.getElementById('divBtns')
}

const getBtnD = () => {
    return document.getElementById('desafio')
}

const getBtnV = () => {
    return document.getElementById('verdade')
}

function getRandomElement(array) {
    if (array.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const onClickDesafio = (button) => {
    const tempText = getRandomElement(desafios);

    if (tempText == desafioAtivo) {
        desafioAtivo = tempText;
        getText().innerHTML = desafioAtivo;
    } else {
        desafioAtivo = getRandomElement(desafios);
        getText().innerHTML = desafioAtivo;
    }

    if (desafioAtivo == 'verdade agora não é uma opção') {
        getBtnV().setAttribute("disabled", "");
    }

    getText().classList.add('active');
    button.classList.add('active');

    setTimeout(() => {
        button.classList.remove('active');
        getText().classList.remove('active');
    }, 200);
}

const onClickVerdade = (button) => {
    const tempV = getRandomElement(verdades);
    getText().innerHTML = tempV;

    if (tempV == 'verdade agora não é uma opção') {
        getBtnV().setAttribute("disabled", "");
    }

    getText().classList.add('active');
    button.classList.add('active');

    setTimeout(() => {
        button.classList.remove('active');
        getText().classList.remove('active');
    }, 200);
}
