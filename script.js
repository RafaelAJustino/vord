let cantTruth = false;
let arregoIndex = 0;
let esquentaIndex = 0;
let quenteIndex = 0;
let verdadeIndex = 0;
let euNuncaIndex = 0;
let fazIndex = 0;
let tempArregoArr = [];
let tempEsquentaArr = [];
let tempQuenteArr = [];
let tempVerdadeArr = [];
let tempEuNuncaArr = [];
let tempFazArr = [];

const arrego = [
    [
        'tome um shot',
        'mostre a bunda',
        'mostre os peitos',
        'faça o próximo desafio junto com o próximo que escolher desafio',
        'fique sem camisa  até a sua próxima rodada',
        'fique apenas de roupa intima até a sua próxima rodada',
        'de um selinho no poximo que escolher desafio',
        'de um beijo no poximo que escolher desafio',
        'tire um desafio novamente <br><br>(não pode amarelar)',
        'todos tomam um shot',
        'deixe alguém te fazer um desafio <br><br>(não pode amarelar)'],
    [
        'take a drink',
        'take a drink',
        'take a drink',
        'take a drink',
        'take a drink',
        'show your butt',
        'do the next challenge together with the next person who chooses a challenge',
        'stay shirtless until the next round',
        'give a peck to the next person who chooses a challenge',
        'take a challenge again <br><br>(you can’t back out)',
        'everyone takes a drink',
        'let someone give you a challenge <br><br>(you can’t back out)'
    ]

]

const esquenta = [
    [
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
        'Faça uma massagem nos ombros da pessoa à sua direita.',
        'Faça um carinho nas pernas da pessoa à sua direita.',
        'Faça um carinho nas pernas da pessoa à sua esquerda.',
        'Dê um beijo suave na barriga da pessoa à sua direita.',
        'Dê um beijo suave na barriga da pessoa à sua esquerda.',
        'Deixe a pessoa à sua esquerda beijar seu pescoço.',
        'Beije suavemente o ombro da pessoa à sua esquerda.',
        'Beije suavemente o ombro da pessoa à sua direita.',
        'Deixe a pessoa à sua direita morder de leve seu ombro.',
        'Deixe a pessoa à sua esquerda morder de leve seu ombro.',
        'morda suavemente a orelha da pessoa a sua esquerda',
        'Dê um beijo suave na nuca da pessoa à sua esquerda.',
        'Dê 3 palmadas na pessoa a sua direita',
        'faça uma pose, o último que te imitar, tem que te dar um beijo',
        'escolha duas pessoas para se beijarem',
        'deixe a pessoa a sua esquerda pegar na sua bunda',
        'deixe a pessoa a sua direita pegar na sua bunda',
        'de um beijo na pessoa a sua direita inclinando-a para trás, como nos contos de fadas',
        'de um beijo no umbigo da pessoa a sua esquerda',
        'de um beijo no umbigo da pessoa a sua direita',
        'escolha duas pessoas para trocarem de camisa na frente de todos',
        'beba uma dose no umbigo de alguem',
        'pegue na bunda da pessoa a sua esquerda',
        'pegue na bunda da pessoa a sua direita',
        'morda suavemente os lábios da pessoa a sua esquerda',
        'morda suavemente os lábios da pessoa a sua direita',
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
        'o jogador a sua esquerda deve escolher uma parte do corpo do jogador a sua direita para voce dar um chupão <br><br>(quero ver a marquinha em)',
        'deixe alguém te dar um chupão <br><br>(quero ver a marquinha em)',
        'deixe alguém te fazer algum desafio',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
    ],
    [
        [
            "truth is no longer an option",
            "give a peck to the person on your right",
            "give a peck to the person on your left",
            "slowly kiss the neck of the person on your right",
            "slowly kiss the neck of the person on your left",
            "give a triple peck",
            "all the women switch places",
            "all the men switch places",
            "give a peck to everyone in the circle (no crying)",
            "make a challenge for the person on your left",
            "make a challenge for the person on your right",
            "choose someone; they can only choose a challenge",
            "you can only choose a challenge",
            "Give a shoulder massage to the person on your left.",
            "Stroke the thighs of the person on your right.",
            "Give a gentle kiss on the belly of the person on your right.",
            "Let the person on your left kiss your neck.",
            "Gently kiss the shoulder of the person on your left.",
            "Let the person on your right nibble lightly on your shoulder.",
            "gently nibble the ear of the person on your left",
            "Give a gentle kiss on the nape of the person on your left.",
            "Give 3 slaps to the person on your right",
            "strike a pose; the last one to mimic you has to kiss you",
            "choose two people to kiss each other",
            "let the person on your left grab your butt",
            "let the person on your right grab your butt",
            "give a staged peck to the person on your right, leaning them back like in fairy tales",
            "give a kiss on the belly button of the person on your left",
            "choose two people to swap shirts in front of everyone",
            "take a drink from someone’s belly button",
            "grab the butt of the person on your left",
            "grab the butt of the person on your right",
            "gently nibble the lips of the person on your left",
            "gently nibble the lips of the person on your right",
            "grab the butt of the most well-endowed person",
            "grab the breasts of the most well-endowed person",
            "kiss a player where they choose",
            "let the person on your right sign your butt",
            "let the person on your left sign your butt",
            "let the person on your right sign your breasts",
            "let the person on your left sign your breasts",
            "let someone bite your butt",
            "show your complete underwear",
            "try to unhook a girl's bra using only one hand",
            "the player on your left must choose a part of the cup of the player on your right for you to give a hickey <br><br>(I want to see the mark)",
            "let someone give you a hickey <br><br>(I want to see the mark)",
            "let someone give you a challenge"
        ]
    ]
]

const quente = [
    [
        'verdade agora não é uma opção',
        'beba uma dose no umbigo de alguem',
        'escolha alguém para tirar uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'tire uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'a pessoa à sua direita tira uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'a pessoa à sua esquerda tira uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'beije o pescoço da pessoa à sua direita <br><br>(10 segundos)',
        'beije o pescoço da pessoa à sua esquerda <br><br>(10 segundos)',
        'se você for mulher, fique sentada no colo de um homem; se você for homem, escolha uma mulher para ficar sentada no seu colo <br><br>(5 rodadas)',
        'dê um tapa na bunda da pessoa à sua esquerda',
        'dê um tapa na bunda da pessoa à sua direita',
        'mostre os seios para todos da roda',
        'beije a pessoa à sua direita <br><br>(10 segundos)',
        'beije a pessoa à sua esquerda <br><br>(10 segundos)',
        'dê um beijo triplo com as pessoas ao seu lado <br><br>(10 segundos)',
        'todas as mulheres da roda tiram uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'todos os homens da roda tiram uma peça de roupa <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
        'se você for mulher, rebole no colo de um homem; se você for homem, escolha uma mulher para rebolar no seu colo <br><br>(15 segundos)',
        'fique só de roupa íntima <br><br>(até a sua próxima rodada)',
        'escolha duas pessoas para se beijarem <br><br>(10 segundos)',
        'se você for mulher, escolha um homem (aleatório) para acariciar seus seios; se você for homem, acaricie os seios de alguma mulher <br><br>(10 segundos) <br><br>(por baixo da roupa)',
        'todas as mulheres trocam de lugar',
        'todos os homens trocam de lugar',
        'dê um chupão na pessoa à sua esquerda',
        'dê um chupão na pessoa à sua direita',
        'simule uma posição sexual com a pessoa à sua direita <br><br>(30 segundos)',
        'simule uma posição sexual com a pessoa à sua esquerda <br><br>(30 segundos)',
        'faça um desafio para a pessoa à sua esquerda',
        'faça um desafio para a pessoa à sua direita',
        'tire uma peça de roupa <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
        'escolha alguém para tirar uma peça de roupa <br><br>(essa não pode ser colocada novamente) <br><br>(calçados, meias ou acessórios não contam)',
        'todos te dão um tapa na bunda',
        'de um tapa na bunda de todos',
        'beije a parte íntima da pessoa à sua direita',
        'beije a parte íntima da pessoa à sua esquerda',
        'deixe a pessoa à sua esquerda tirar suas roupas e fique assim por <br><br>(até a sua próxima rodada)',
        'deixe a pessoa à sua direita tirar suas roupas e fique assim por <br><br>(até a sua próxima rodada)',
        'tire as roupas da pessoa à sua direita e fique assim por <br><br>(até a sua próxima rodada)',
        'venda seus olhos, todas as pessoas do sexo oposto te dão um beijo, adivinhe quem é quem',
        'filme as próximas 5 rodadas <br><br>(apenas desafio pode ser escolhido)',
        'se você for homem, tire o sutiã de uma mulher (aleatória); se for mulher, deixe um homem (aleatório) tirar seu sutiã <br><br>(apenas com a boca)',
        'você está com sorte: todos devem tirar uma peça de roupa menos você <br><br>(até a sua próxima rodada) <br><br>(calçados, meias ou acessórios não contam)',
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
        'finja que é um bebe e chupe o peito ou seio de alguém à sua escolha <br><br>(10 segundos)',
        'venda seus olhos e deixe alguém te beijar em qualquer parte do corpo <br><br>(20 segundos)',
        'faça uma massagem sensual na pessoa à sua frente <br><br>(1 minuto)',
        'dê uma mordida suave no lábio de alguém à sua escolha <br><br>(10 segundos)',
        'simule uma cena de sexo com o jogador à sua esquerda <br><br>(30 segundos)',
        'simule uma cena de sexo com o jogador à sua direita <br><br>(30 segundos)',
        'escolha duas pessoas para simular uma cena íntima com você <br><br>(30 segundos)',
        'as pessoas ao seu lado devem simular uma cena íntima com você <br><br>(30 segundos)',
        'deixe a pessoa à sua esquerda acariciar suas costas de maneira sensual <br><br>(30 segundos)',
        'deixe a pessoa à sua direita acariciar suas costas de maneira sensual <br><br>(30 segundos)',
        'escolha alguém para te beijar por cima da roupa em uma área íntima <br><br>(10 segundos)',
        'faça uma pose erótica com alguém à sua escolha <br><br>(30 segundos)',
        'faça uma dança sensual no colo da pessoa à sua direita <br><br>(1 minuto)',
        'faça uma dança sensual no colo da pessoa à sua esquerda <br><br>(1 minuto)',
        'lamba sensualmente o abdômen de alguém à sua escolha <br><br>(10 segundos)',
        'se você for mulher, deixe um homem tirar sua calcinha com os dentes <br><br>(se possível)',
        'faça uma dança provocativa para o grupo <br><br>(1 minuto)',
        'deixe alguém te beijar da cabeça aos pés <br><br>(exceto partes íntimas)',
        'simule uma posição sexual com uma pessoa à sua escolha <br><br>(30 segundos)',
        'coloque uma venda e deixe o grupo te tocar em três partes diferentes',
        'faça um gemido sensual no ouvido da pessoa à sua esquerda',
        'faça um gemido sensual no ouvido da pessoa à sua direita',
        'deixe alguém te tocar em uma área íntima <br><br>( ela escolhe se é por cima da roupa ou não) <br><br>(10 segundos)',
        'todos ficam sem roupa e tiram uma foto em grupo para guardar o momento',
        'faça um strip-tease para alguém específico <br><br>(até ficar sem roupa)',
        'escolha alguém para dar um beijo no seu pescoço e descer até a sua barriga <br><br>(20 segundos)',
        'simule um beijo apaixonado no pescoço de alguém por trás <br><br>(15 segundos)',
        'faça uma dança sensual para o grupo enquanto tira uma peça de roupa',
        'deixe a pessoa à sua frente passar a mão por baixo de sua roupa e te tocar onde desejar <br><br>(30 segundos)',
        'sussurre uma fantasia erótica no ouvido da pessoa à sua direita',
        'sussurre uma fantasia erótica no ouvido da pessoa à sua esquerda',
        'deixe uma pessoa à sua escolha te beijar onde ela quiser <br><br>(20 segundos)',
        'beije ou lamba os dedos da pessoa à sua frente <br><br>(15 segundos)',
        'deixe a pessoa à sua esquerda te despir até a roupa íntima <br><br>(se ainda estiver vestindo)',
        'dê uma mordidinha suave no bumbum da pessoa à sua escolha',
        'venda seus olhos e deixe alguém tocar seus lábios com uma parte do corpo; você tem que adivinhar qual parte (10 segundos)',
        'deixe alguém tirar sua roupa íntima e troque de lugar com essa pessoa',
        'escolha alguém para massagear suas partes íntimas por cima da roupa <br><br>(15 segundos)',
        'faça uma pose sexual com a pessoa a sua esquerda e deixe alguém do grupo fotografar <br><br>(utilizando as roupas que estão vestidos)',
        'faça uma pose sexual com a pessoa a sua direita e deixe alguém do grupo fotografar <br><br>(utilizando as roupas que estão vestidos)',
        'beije os pés de alguém <br><br>(10 segundos)',
        'imite sua posição sexual favorita com alguém do grupo <br><br>(30 segundos)',
        'deixe a pessoa à sua direita escolher uma parte do seu corpo para você expor <br><br>(10 segundos)',
        'deixe a pessoa à sua esquerda escolher uma parte do seu corpo para você expor <br><br>(10 segundos)',
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
        'beije a pessoa à sua esquerda em um lugar que você nunca beijou antes <br><br>(10 segundos)',
        'tire uma peça de roupa e faça uma pose sexy para o grupo <br><br>(não pode ser calçados, meias ou acessórios)',
        'simule a posição papai e mamãe com a pessoa a sua frente <br><br>(10 segundos)',
        'deite no colo da pessoa a sua esquerda e receba 5 palmadas na bunda',
        'deite no colo da pessoa a sua direita e receba 5 palmadas na bunda',
        'simule a posição 69 com uma pessoa aleatória',
        'todos da roda colocam a mão nas partes intimas da pessoa a sua dirieta <br><br>(até a sua próxima rodada)',
        'todas as meninas se beijam',
        'simule uma cena de gangbang com a garota com mais cara de inocente',
        'permita que a pessoa a sua direita dê um chupão em você, no lugar que a pessoa a sua esquerda escolher',
        'escolha: tire toda a parte de cima da pessoa a sua direita ou tire toda a parte de baixo da pessoa a sua esquerda',
        'passe um cubo de gelo pelo corpo da pessoa a sua direita',
        'passe a mão em todas as rolas da roda',
        'passe a mão em todas as bucetas da roda',
        'deixe a pessoa da sua esquerda escrever ou desenhar algo no seu Monte de Vênus <br><br>(pra cima da sua área íntima)',
        'deixe a pessoa da sua esquerda escrever ou desenhar algo no seu peito',
        'deixe a pessoa da sua esquerda escrever ou desenhar algo na sua bunda',
        'a pessoa mais velha tira uma peça de roupa <br><br>(até a sua próxima rodada)  <br><br>(calçados, meias ou acessórios não contam)',
        'a pessoa mais nova tira uma peça de roupa <br><br>(até a sua próxima rodada)  <br><br>(calçados, meias ou acessórios não contam)',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
        'faça um desafio para a pessoa a sua esquerda',
        'faça um desafio para a pessoa a sua direita',
        'faça um desafio para a pessoa a sua frente',
    ],
    [
        "truth is no longer an option",
        "choose someone to take off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "take off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "the person to your right takes off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "the person to your left takes off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "kiss the neck of the person to your right <br><br>(10 seconds)",
        "kiss the neck of the person to your left <br><br>(10 seconds)",
        "if you are a woman, sit on a man's lap; if you are a man, choose a woman to sit on your lap <br><br>(5 rounds)",
        "slap the butt of the person to your left",
        "show your breasts to everyone in the circle",
        "kiss the person to your right <br><br>(10 seconds)",
        "give a triple kiss with the people next to you <br><br>(10 seconds)",
        "all the women in the circle take off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "all the men in the circle take off a piece of clothing <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "if you are a woman, grind on a man's lap; if you are a man, choose a woman to grind on your lap <br><br>(15 seconds)",
        "be only in underwear <br><br>(3 rounds)",
        "choose two people to kiss <br><br>(10 seconds)",
        "if you are a woman, choose a random man to touch your breasts; if you are a man, touch a woman's breasts <br><br>(10 seconds) <br><br>(under the clothes)",
        "all the women switch places",
        "all the men switch places",
        "give a hickey to the person on your left",
        "simulate a sexual position with the person to your right <br><br>(30 seconds)",
        "make a challenge for the person on your left",
        "make a challenge for the person on your right",
        "take off a piece of clothing <br><br>(this cannot be put back on) <br><br>(shoes, socks, or accessories do not count)",
        "choose someone to take off a piece of clothing <br><br>(this cannot be put back on) <br><br>(shoes, socks, or accessories do not count)",
        "everyone gives you a slap on the butt",
        "kiss the intimate area of the person to your right",
        "let the person on your left take off your clothes and stay like this for <br><br>(3 rounds)",
        "take off the clothes of the person to your right and stay like this for <br><br>(3 rounds)",
        "blindfold yourself, everyone of the opposite sex gives you a kiss, guess who is who",
        "film the next 5 rounds <br><br>(only challenges can be chosen)",
        "if you are a man, take a woman's bra off (random); if you are a woman, let a man (random) take your bra off <br><br>(only with the mouth)",
        "you are lucky: everyone must take off a piece of clothing except you <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)",
        "start by kissing someone's neck of your choice and only stop when you reach the intimate parts",
        "you are a horse, choose someone to ride on you <br><br>(30 seconds)",
        "give a little bite on the butt of all women <br><br>(under the clothes)",
        "spin a bottle in the middle of the circle; whoever it points to takes off a piece of clothing <br><br>(this cannot be put back on) <br><br>(shoes, socks, or accessories do not count)",
        "choose a color: everyone must take off a piece of clothing according to the chosen color <br><br>(this cannot be put back on) <br><br>(shoes, socks, or accessories do not count)",
        "choose a person, they can only choose a challenge",
        "you can only choose a challenge",
        "gently run your tongue on the neck of someone of your choice <br><br>(10 seconds)",
        "do a strip tease for the group until you are in your underwear",
        "choose someone to give a long kiss on the mouth <br><br>(15 seconds)",
        "give a wet kiss on the chest or breast of someone of your choice <br><br>(10 seconds)",
        "blindfold yourself and let someone kiss you on any part of your body <br><br>(20 seconds)",
        "give a sensual massage to the person in front of you <br><br>(1 minute)",
        "give a gentle bite on the lip of someone of your choice <br><br>(10 seconds)",
        "simulate a sex scene with someone on your left <br><br>(30 seconds)",
        "choose two people to simulate an intimate scene with you <br><br>(30 seconds)",
        "let the person on your left caress your back sensually <br><br>(30 seconds)",
        "choose someone to kiss you over your clothes in an intimate area <br><br>(10 seconds)",
        "strike an erotic pose with someone of your choice and hold it <br><br>(30 seconds)",
        "do a sensual dance on the lap of the person to your right <br><br>(1 minute)",
        "give a lick on the abdomen of someone of your choice <br><br>(10 seconds)",
        "if you are a woman, let a man take off your panties with his teeth <br><br>(if possible)",
        "do a provocative dance for the group <br><br>(1 minute)",
        "let someone kiss you from head to toe <br><br>(except intimate parts)",
        "simulate a sexual position with someone of your choice <br><br>(30 seconds)",
        "put on a blindfold and let the group touch you in three different parts",
        "give a sensual moan in the ear of the person on your left",
        "let someone touch you in an intimate area <br><br>(they choose whether it is over the clothes or not) <br><br>(10 seconds)",
        "everyone gets undressed and takes a group photo to capture the moment",
        "do a strip tease for someone specific <br><br>(until you are naked)",
        "choose someone to kiss your neck and move down to your belly <br><br>(20 seconds)",
        "simulate a passionate kiss on the neck of someone from behind <br><br>(15 seconds)",
        "do a sensual dance for the group while taking off a piece of clothing",
        "let the person in front of you slide their hand under your clothes and touch you wherever they wish <br><br>(30 seconds)",
        "whisper an erotic fantasy in the ear of the person on your right",
        "let someone of your choice kiss you wherever they want <br><br>(20 seconds)",
        "kiss or lick the fingers of the person in front of you <br><br>(15 seconds)",
        "let the person on your left undress you down to your underwear <br><br>(if you are still dressed)",
        "give a gentle bite on the butt of the person of your choice",
        "blindfold yourself and let someone touch your lips with a part of their body; you have to guess which part (10 seconds)",
        "let someone take off your underwear and switch places with that person",
        "choose someone to massage your intimate parts over your clothes <br><br>(15 seconds)",
        "pose for a sexual photo with someone and let someone from the group take a picture <br><br>(using the clothes you are wearing)",
        "kiss someone's feet <br><br>(10 seconds)",
        "imitate your favorite sexual position with someone from the group <br><br>(30 seconds)",
        "let the person on your right choose a part of your body for you to expose <br><br>(10 seconds)",
        "sit on someone’s lap and tease <br><br>(1 minute)",
        "let someone kiss you over your clothes in the intimate parts <br><br>(15 seconds)",
        "choose someone to receive an 'erotic kiss' that goes from the neck to the belly button",
        "let two people from the group undress you until you are in your underwear",
        "do a provocative dance in front of someone and let them touch you lightly <br><br>(30 seconds)",
        "be tied up (lightly) and let someone touch you lightly <br><br>(30 seconds)",
        "send an explicit nude to everyone in the circle",
        "everyone in the circle sends you an explicit nude",
        "choose someone, you must come together and send an explicit nude to everyone in the circle",
        "kiss the person to your right in a place you have never kissed before <br><br>(10 seconds)",
        "take off a piece of clothing from the person to your left <br><br>(this cannot be put back on)",
        "if you are a man, let the woman to your right decide where you are going to touch her; if you are a woman, let the man to your right decide where you are going to touch him <br><br>(15 seconds)",
        "let the person on your left hold your hand while giving you a massage",
        "kiss the intimate area of the person on your right (above the clothes)",
        "remove the last piece of clothing from the person to your left <br><br>(this cannot be put back on)",
        "choose a person, you will give a sensual massage <br><br>(1 minute)",
        "kiss the intimate area of the person on your left (above the clothes)",
        "let someone suck on your neck for 10 seconds",
        "let someone kiss your intimate area <br><br>(above the clothes)",
        "sit in someone’s lap, face to face, and pretend to 'make love' <br><br>(30 seconds)",
        "kiss the person on your right and then kiss the person on your left <br><br>(10 seconds each)",
        "let the person on your left kiss your intimate area <br><br>(10 seconds)",
        "let the person on your right kiss your intimate area <br><br>(10 seconds)",
        "all the people from the opposite sex give you a kiss <br><br>(on the lips)",
        "you are free: everyone must take off a piece of clothing except you <br><br>(5 rounds) <br><br>(shoes, socks, or accessories do not count)"
    ]

];

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
    [
        'truth is no longer an option',
        'answer any question someone asks you',
        'everyone must choose a dare before they can choose truth again',
        'have you ever had anal sex?',
        'have you ever had a threesome?',
        'do you want to have a threesome?',
        'have you ever faked an orgasm for someone? Why?',
        'what’s the most unusual place you’ve had sex?',
        'ask anything to the person on your right',
        'have you ever climaxed or been climaxed inside?',
        'what’s your favorite sexual position?',
        'what sexual position do you dislike the most?',
        'you’re lucky, do nothing and the next person must choose a dare',
        'have you ever hooked up with someone of the same sex?',
        'have you ever had sex with someone of the same sex? (no threesomes allowed)',
        'have you ever had sex in a public place or open area?',
        'name a fetish',
        'have you ever used a sex toy? Which one?',
        'have you ever taken photos or videos during sex?',
        'have you ever sent nudes?',
        'have you ever had or received an erotic massage?',
        'have you ever slept with someone you barely knew?',
        'have you ever had a sexual experience while camping?',
        'have you ever had sex or oral sex at school?',
        'on a scale of 0 to 10, how straight are you?',
        'have you ever had sex with more than one person in the same day (not counting threesomes)?',
        'what do you think about swing parties?',
        'would you let your partner have sex with someone while you just watch?',
        'what’s your favorite type of porn?',
        'what would you like to try one day?',
        'what was your most embarrassing sexual experience?',
        'have you ever faked an orgasm? Why?',
        'which part of your body do you think is most attractive?',
        'what is your biggest sexual fantasy?',
        'have you ever watched porn with someone?',
        'what’s the most times you’ve had sex in one day?',
        'what’s the most public place you’ve had sex?',
        'have you ever done or received a striptease?',
        'what’s your biggest secret in bed?',
        'have you ever wanted to sleep with someone here?',
        'have you ever had sex in a car? What was it like?',
        'what’s your opinion on threesomes or more?',
        'what’s the strangest place you’ve had sex?',
        'what excites you the most in a partner?',
        'do you have any fetishes? If so, what?',
        'what’s the longest sexual experience you’ve ever had?',
        'have you ever had sex with someone just for physical attraction?',
        'have you ever been romantically or sexually involved with more than one person at the same time?',
        'what’s the time you regretted having sex with someone the most?',
        'do you prefer to be dominated or to dominate in bed?',
        'what’s the longest you’ve gone without sex?',
        'what’s the most partners you’ve had in one night?',
        'have you ever hooked up with someone who was in a relationship?',
        'what’s your biggest sexual taboo?',
        'have you ever had virtual sex? What was it like?',
        'have you ever wanted to sleep with a friend but didn’t have the courage?',
        'what’s the craziest thing you would do or have done for sex?',
        'which part of the opposite sex’s body do you find most exciting ? ',
        'have you ever had sex in exchange for something?',
        'have you ever had sex without wanting to, just to please your partner?',
        'have you ever been in a purely sexual relationship?',
        'what’s your opinion on sex toys?',
        'do you think size matters? Why?',
        'what’s the most embarrassing situation you’ve been in while having sex?',
        'have you ever gone skinny dipping?',
        'how many people have you had sex with in your life?',
        'lights on, dim lights, or off?',
        'have you ever been caught having sex or masturbating?',
        'do you like receiving oral sex?',
        'have you ever hooked up with someone who was in a relationship?',
        'have you ever experienced performance anxiety?',
        'what’s the strangest thing someone has asked of you during sex?',
        'what do you consider off-limits in sex?',
        'have you ever had sex in your parents’ bed?',
        'if you could only do one sexual position for the rest of your life, what would it be?',
        'have you ever used an anal plug? Would you?',
    ]
];

const euNunca = [
    [
        "eu nunca, broxei",
        "eu nunca, enviei uma foto íntima.",
        "eu nunca, usei brinquedos durante o sexo.",
        "eu nunca, fiz sexo em um lugar público.",
        "eu nunca, fui pego(a) no flagra enquanto fazia sexo.",
        "eu nunca, tive um sonho erótico com alguém do grupo.",
        "eu nunca, beijei mais de uma pessoa na mesma noite.",
        "eu nunca, pratiquei sexting.",
        "eu nunca, transei em uma festa.",
        "eu nunca, transei no carro.",
        "eu nunca, tive uma noite de sexo casual.",
        "eu nunca, fiz sexo sem estar sóbrio(a).",
        "eu nunca, participei de um ménage à trois.",
        "eu nunca, transei em uma piscina ou no mar.",
        "eu nunca, fiz sexo oral em alguém.",
        "eu nunca, dormi com alguém e me arrependi no dia seguinte.",
        "eu nunca, traí em um relacionamento.",
        "eu nunca, assisti a vídeos pornográficos.",
        "eu nunca, usei algemas ou vendas durante o sexo.",
        "eu nunca, tive um crush em alguém comprometido.",
        "eu nunca, transei com alguém que conheci online.",
        "eu nunca, menti sobre o número de parceiros sexuais que tive.",
        "eu nunca, fui a um clube de striptease.",
        "eu nunca, fiz sexo em um local de trabalho.",
        "eu nunca, enviei nudes para a pessoa errada.",
        "eu nunca, tive fantasias com alguém do mesmo sexo.",
        "eu nunca, fiquei com mais de uma pessoa no mesmo dia.",
        "eu nunca, dei ou recebi um tapa durante o sexo.",
        "eu nunca, fiz uma massagem sensual em alguém.",
        "eu nunca, recebi ou fiz um strip-tease.",
        "eu nunca, transei em uma varanda ou terraço.",
        "eu nunca, fiz sexo com alguém que acabei de conhecer.",
        "eu nunca, tive um sonho erótico com meu chefe ou colega de trabalho.",
        "eu nunca, transei em um banheiro público.",
        "eu nunca, tive uma experiência sexual em um avião.",
        "eu nunca, disse 'eu te amo' para conseguir sexo.",
        "eu nunca, assisti a um filme adulto com alguém.",
        "eu nunca, fiz sexo na casa de outra pessoa.",
        "eu nunca, experimentei uma posição sexual incomum.",
        "eu nunca, tive um encontro sexual com alguém mais velho.",
        "eu nunca, tive um encontro sexual com alguém mais jovem.",
        "eu nunca, usei uma fantasia erótica.",
        "eu nunca, tive uma relação de uma noite.",
        "eu nunca, enviei mensagens de teor sexual para a pessoa errada.",
        "eu nunca, fiz sexo no chuveiro.",
        "eu nunca, fiz sexo com alguém apenas pela aparência.",
        "eu nunca, fui para a cama com alguém só por causa do álcool.",
        "eu nunca, usei a desculpa de estar doente para não fazer sexo.",
        "eu nunca, pesquisei sobre fetiches na internet.",
        "eu nunca, assisti pornografia com meu parceiro(a).",
        "eu nunca, pensei em outra pessoa enquanto fazia sexo.",
        "eu nunca, usei óleos ou cremes durante o sexo.",
        "eu nunca, fiz sexo em frente a um espelho.",
        "eu nunca, fui a um clube de swing.",
        "eu nunca, fiz sexo sem preservativo com alguém que não conhecia bem.",
        "eu nunca, tirei fotos íntimas de outra pessoa.",
        "eu nunca, fiquei excitado(a) com uma cena de filme.",
        "eu nunca, beijei alguém do mesmo sexo.",
        "eu nunca, tive uma experiência de voyeurismo.",
        "eu nunca, transei em um hotel.",
        "eu nunca, usei comida durante o sexo.",
        "eu nunca, gritei o nome errado durante o sexo.",
        "eu nunca, tive um orgasmo fingido.",
        "eu nunca, fiz sexo com alguém comprometido.",
        "eu nunca, me apaixonei por alguém só por causa do sexo.",
        "eu nunca, tentei recriar uma cena de filme pornô.",
        "eu nunca, fiz sexo com luzes acesas.",
        "eu nunca, transei em um camping ou acampamento.",
        "eu nunca, tive uma conversa explícita no telefone.",
        "eu nunca, pesquisei novas posições sexuais para tentar.",
        "eu nunca, tive um parceiro(a) que usava lingerie especial.",
        "eu nunca, vi alguém nu(a) por acidente.",
        "eu nunca, tive uma fantasia com um(a) amigo(a) próximo(a).",
        "eu nunca, tive um desejo por alguém do grupo.",
        "eu nunca, fui convidado(a) para um ménage à trois.",
        "eu nunca, flertei com alguém comprometido.",
        "eu nunca, fiquei excitado(a) em um local inadequado.",
        "eu nunca, fiz sexo com um(a) ex.",
        "eu nunca, transei em uma festa de casamento.",
        "eu nunca, brinquei de verdade ou consequência com perguntas eróticas.",
        "eu nunca, enviei uma mensagem de teor sexual para um(a) ex.",
        "eu nunca, enviei flores ou presentes para alguém após uma noite juntos.",
        "eu nunca, fiz sexo sem estar completamente interessado(a).",
        "eu nunca, fiz sexo com mais de uma pessoa em uma semana.",
        "eu nunca, fiquei com alguém apenas por status.",
        "eu nunca, fui convidado(a) para um encontro através de aplicativos.",
        "eu nunca, enviei uma mensagem de teor sexual logo depois de conhecer alguém.",
        "eu nunca, fiquei com alguém que era casado(a).",
        "eu nunca, tive uma experiência sexual com alguém famoso(a).",
        "eu nunca, fui a uma festa só para tentar sexo com alguém.",
    ],
    [
        "I’ve never, gotten flaccid.",
        "I’ve never, sent a nude.",
        "I’ve never, used toys during sex.",
        "I’ve never, had sex in a public place.",
        "I’ve never, been caught in the act while having sex.",
        "I’ve never, had an erotic dream about someone in the group.",
        "I’ve never, kissed more than one person in the same night.",
        "I’ve never, practiced sexting.",
        "I’ve never, had sex at a party.",
        "I’ve never, had sex in a car.",
        "I’ve never, had a casual sex night.",
        "I’ve never, had sex while not sober.",
        "I’ve never, participated in a threesome.",
        "I’ve never, had sex in a pool or the sea.",
        "I’ve never, given oral sex to someone.",
        "I’ve never, slept with someone and regretted it the next day.",
        "I’ve never, cheated in a relationship.",
        "I’ve never, watched pornographic videos.",
        "I’ve never, used handcuffs or blindfolds during sex.",
        "I’ve never, had a crush on someone who was taken.",
        "I’ve never, had sex with someone I met online.",
        "I’ve never, lied about the number of sexual partners I've had.",
        "I’ve never, been to a strip club.",
        "I’ve never, had sex at a workplace.",
        "I’ve never, sent nudes to the wrong person.",
        "I’ve never, had fantasies about someone of the same sex.",
        "I’ve never, hooked up with more than one person in the same day.",
        "I’ve never, slapped or been slapped during sex.",
        "I’ve never, given someone a sensual massage.",
        "I’ve never, received or given a strip tease.",
        "I’ve never, had sex on a balcony or terrace.",
        "I’ve never, had sex with someone I just met.",
        "I’ve never, had an erotic dream about my boss or coworker.",
        "I’ve never, had sex in a public restroom.",
        "I’ve never, had a sexual experience on a plane.",
        "I’ve never, said 'I love you' to get sex.",
        "I’ve never, watched an adult movie with someone.",
        "I’ve never, had sex at someone else’s house.",
        "I’ve never, tried an unusual sex position.",
        "I’ve never, had a sexual encounter with someone older.",
        "I’ve never, had a sexual encounter with someone younger.",
        "I’ve never, worn an erotic costume.",
        "I’ve never, had a one-night stand.",
        "I’ve never, sent sexual messages to the wrong person.",
        "I’ve never, had sex in the shower.",
        "I’ve never, had sex with someone just for their looks.",
        "I’ve never, gone to bed with someone just because of alcohol.",
        "I’ve never, used being sick as an excuse to not have sex.",
        "I’ve never, looked up fetishes on the internet.",
        "I’ve never, watched porn with my partner.",
        "I’ve never, thought of someone else while having sex.",
        "I’ve never, used oils or lotions during sex.",
        "I’ve never, had sex in front of a mirror.",
        "I’ve never, been to a swing club.",
        "I’ve never, had unprotected sex with someone I didn’t know well.",
        "I’ve never, taken intimate photos of someone else.",
        "I’ve never, gotten turned on by a movie scene.",
        "I’ve never, kissed someone of the same sex.",
        "I’ve never, had a voyeuristic experience.",
        "I’ve never, had sex in a hotel.",
        "I’ve never, used food during sex.",
        "I’ve never, shouted the wrong name during sex.",
        "I’ve never, faked an orgasm.",
        "I’ve never, had sex with someone who was taken.",
        "I’ve never, fallen for someone just for sex.",
        "I’ve never, tried to recreate a scene from a porn movie.",
        "I’ve never, had sex with the lights on.",
        "I’ve never, had sex while camping.",
        "I’ve never, had an explicit conversation on the phone.",
        "I’ve never, looked up new sex positions to try.",
        "I’ve never, had a partner who wore special lingerie.",
        "I’ve never, accidentally seen someone naked.",
        "I’ve never, had a fantasy about a close friend.",
        "I’ve never, had a crush on someone in the group.",
        "I’ve never, been invited to a threesome.",
        "I’ve never, flirted with someone who was taken.",
        "I’ve never, gotten turned on in an inappropriate place.",
        "I’ve never, had sex with an ex.",
        "I’ve never, had sex at a wedding party.",
        "I’ve never, played truth or dare with erotic questions.",
        "I’ve never, sent a sexual message to an ex.",
        "I’ve never, sent flowers or gifts to someone after a night together.",
        "I’ve never, had sex without being completely interested.",
        "I’ve never, had sex with more than one person in a week.",
        "I’ve never, hooked up with someone just for their status.",
        "I’ve never, been invited to a date through apps.",
        "I’ve never, sent a sexual message right after meeting someone.",
        "I’ve never, hooked up with someone who was married.",
        "I’ve never, had a sexual experience with someone famous."
    ]
];

const faz = [
    [
        '',
    ],
    []
];

const languages = {
    pt: 0,
    en: 1,
}

let targetLanguage = 0

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

function getRandomElement(array) {
    if (array.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);

    const randomItem = array[randomIndex];

    if (randomItem == 'verdade agora não é uma opção' || randomItem == 'truth is no longer an option') {
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

    arregoIndex = 0;
    esquentaIndex = 0;
    quenteIndex = 0;
    verdadeIndex = 0;
    euNuncaIndex = 0;
    fazIndex = 0;
    tempArregoArr = shuffleArray(arrego[0]);
    tempEsquentaArr = shuffleArray(esquenta[0]);
    tempQuenteArr = shuffleArray(quente[0]);
    tempVerdadeArr = shuffleArray(verdades[0]);
    tempEuNuncaArr = shuffleArray(euNunca[0]);
    tempFazArr = shuffleArray(faz[0]);

    requestAnimationFrame(() => {
        setTimeout(() => {
            questions.classList.add('active');

            if (form.options.value == 'FAZ') {
                document.getElementById('divBtnsDoDrink').style.display = 'flex';
                document.getElementById('divBtnsNever').style.display = 'none';
                document.getElementById('divBtnsVord').style.display = 'none';
                document.querySelector('.headerTitle').innerHTML = 'faz ou bebe'
            } else if (form.options.value == 'NUNCA') {
                document.getElementById('divBtnsNever').style.display = 'flex';
                document.getElementById('divBtnsDoDrink').style.display = 'none';
                document.getElementById('divBtnsVord').style.display = 'none';
                document.querySelector('.headerTitle').innerHTML = 'eu nunca...'
            } else {
                document.getElementById('divBtnsVord').style.display = 'flex';
                document.getElementById('divBtnsDoDrink').style.display = 'none';
                document.getElementById('divBtnsNever').style.display = 'none';
                document.querySelector('.headerTitle').innerHTML = 'verdade ? ou desafio !'
            }
        }, 300);
    });
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

function onClickVerdade() {
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = verdadeIndex % tempVerdadeArr.length;

    questionsTxt.innerHTML = tempVerdadeArr[adjustedIndex];

    handleQuestion(verdades);
    verdadeIndex++;
}

function onClickArreguei() {
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = arregoIndex % tempArregoArr.length;

    questionsTxt.innerHTML = tempArregoArr[adjustedIndex];

    handleQuestion(arrego);
    arregoIndex++;
}

function onClickDesafio() {
    const form = document.getElementById('games');
    const questionsTxt = document.getElementById('questionsTxt');

    if (form.options.value == 'ESQUENTA') {

        const adjustedIndex = esquentaIndex % tempEsquentaArr.length;
    
        questionsTxt.innerHTML = tempEsquentaArr[adjustedIndex];

        handleQuestion(esquenta);
        esquentaIndex++;
    } else {

        const adjustedIndex = quenteIndex % tempQuenteArr.length;
    
        questionsTxt.innerHTML = tempQuenteArr[adjustedIndex];

        handleQuestion(quente);
        quenteIndex++
    }
}

function onClickEuNunca() {
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = euNuncaIndex % tempEuNuncaArr.length;

    questionsTxt.innerHTML = tempEuNuncaArr[adjustedIndex];

    handleQuestion(euNunca);
    euNuncaIndex++;
}

function onClickFazBebe() {
    const questionsTxt = document.getElementById('questionsTxt');

    const adjustedIndex = fazIndex % tempFazArr.length;

    questionsTxt.innerHTML = tempFazArr[adjustedIndex];

    handleQuestion(faz);
    fazIndex++;
}

function goHome() {
    document.querySelectorAll('.ctn').forEach((e) => {
        e.classList.remove('active');
    });

    const init = document.getElementById('init');

    requestAnimationFrame(() => {
        setTimeout(() => {
            init.classList.add('active');
        }, 300);
    });
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