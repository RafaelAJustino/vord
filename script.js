const desafios = [
    'verdade agora não é uma opção',
    'escolha alguém para tirar uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'tire uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'a pessoa da sua direita tira uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'a pessoa da sua esquerda tira uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'beije o pescoço da pessoa a sua direita (10 segundos)',
    'beije o pescoço da pessoa a sua esquerda (10 segundos)',
    'se você for mulher, sente no colo da pessoa a sua direita, se você for homem, a pessoa da sua esquerda senta no seu colo (5 rodadas)',
    'de um tapa na bunda da pessoa a sua esquerda',
    'mostre os peitos para todos da roda',
    'beije a pessoa a sua direita (10 segundos)',
    'de um beijo triplo com as pessoas do seu lado (10 segundos)',
    'todos as mulheres da roda tiram uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'todos os homens da roda tiram uma peça de roupa (5 rodadas) (calçados, meias ou acessórios não contam)',
    'se você for mulher, rebole no colo da pessoa a sua direita, se você for homem, a pessoa da sua esquerda rebola no seu colo (15 segundos)',
    'fique só de roupa íntima (3 rodadas)',
    'escolha duas pessoas para se beijarem (10 segundos)',
    'se você for mulher, deixe a pessoa da sua esquerda acariciar seus peitos, se você for homem, acaricie os peitos da pessoa da sua direita (10 segundos) (por baixo da roupa em)',
    'todas as mulheres trocam de lugar',
    'todos os homens trocam de lugar',
    'dê um chupão na pessoa da sua esquerda',
    'dê um selinho em todos da roda (sem choro em)',
    'simule uma posição sexual com a pessoa da sua direita (30 segundos)',
    'faça um desafio para a pessoa da sua esquerda',
    'faça um desafio para a pessoa da sua direita',
    'tire uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha alguém para tirar uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'todos te dão um tapa na bunda',
    'beije a parte íntima da pessoa a sua direita',
    'deixe a pessoa da sua esquerda tirar suas roupas, fique assim por (3 rodadas)',
    'tire as roupas da pessoa da sua direita, fique assim por (3 rodadas)',
    'masturbe a pessoa da sua direita (20 segundos) (escondido ou na roda vocês escolhem)',
    'deixe a pessoa da sua esquerda te masturbar (20 segundos) (escondido ou na roda vocês escolhem)',
    'vende seus olhos, todas as pessoa do sexo oposto te da um beijo, adivinhe quem é quem?',
    'filme as proximas 5 rodadas (apenas desafio pode ser escolhido)',
    'se você for homem, tire o sutiã da pessoa da sua direita, se for mulher, deixe a pessoa da sua esquerda tirar seu sutiã (apenas com a boca)',
    'você esta com sorte, todos devem ficar sem roupa menos você (5 rodadas)',
    'comece beijando o pescoço de alguem da sua escolha e só pare quando chegar nas partes íntimas',
    'você é um cavalo, escolha alguem para cavalgar em você (30 segundos)',
    'de uma mordidinha na bunda de todas as mulheres (por baixo da roupa em)',
    'gire uma garrafa no meio da roda, para quem estiver apontado tire uma peça de roupa (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha uma cor, todos devem tirar uma peça de roupa de acordo com a cor escolhida (essa não pode ser colocada novamente) (calçados, meias ou acessórios não contam)',
    'escolha uma pessoa, ele somente pode escolher desafio',
    'você somente pode escolher desafio',
]

let desafioAtivo = '';

const verdades = [
    'verdade agora não é uma opção',
    'todos devem escolher desafio antes de escolherem verdade novamente',
    'ja fez sexo anal?',
    'ja fez ménage?',
    'tem vontade de fazer ménage?',
    'ja mentiu orgasmo para algúem? por que?',
    'qual o lugar mais inusitado que você ja transou?',
    'pergunte qualquer coisa para a pessoa da sua direita',
    'ja teve um creampie?',
    'qual sua posição sexual preferida?',
    'qual posição sexual você mais detesta?',
    'deu sorte, não faça nada e a proxima pessoa deve escolher desafio',
    'ja ficou com alguém do mesmo sexo?',
    'ja transou com alguém do mesmo sexo? (não vale menage)',
    'ja fez sexo em um local público ou area aberta?',
    'diga um fetiche',
    'você já utilizou algum brinquedo sexual? qual?',
    'ja fez fotos ou videos durante o sexo?',
    'ja mandou nudes?',
    'já fez ou recebeu uma sessão de massagem erótica?',
    'ja transou com alguem que você mal conhecia?',
    'já teve uma experiência de sexo em um acampamento?',
    'ja fez sexo ou sexo oral na escola?',
    'em uma escola de 0 a 10 o quão hetero você é?',
    'ja transou com mais de uma pessoa no mesmo dia (sem ser em ménage)',
    'o que acha de casa de swing',
    'você deixaria seu parceiro fazer sexo com alguém enquanto você so assiste?',
    'qual seu tipo de pornô favorito?',
    'o que gostaria de experimentar um dia?',
]
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