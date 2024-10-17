function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('resultado').innerText = '';

    document.getElementById('resultado').innerText = 'JO';

    setTimeout(function () {
        document.getElementById('resultado').innerText = 'KEN';
    }, 1500);

    setTimeout(function () {
        document.getElementById('resultado').innerText = 'POO!!';
    }, 2500);

    setTimeout(function () {
        let resultado = '';
        if (escolhaJogador === escolhaComputador) {
            resultado = 'Empate!';
        } else if (
            (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
            (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
            (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
        ) {
            resultado = 'Você ganhou!';
        } else {
            resultado = 'Você perdeu!';
        }

        document.getElementById('resultado').innerHTML = `<p>Você escolheu ${escolhaJogador}, o computador escolheu ${escolhaComputador}.<br><span>${resultado}</span></p>`;

        exibirImagem('playerChoice', escolhaJogador);
        exibirImagem('computerChoice', escolhaComputador);
    }, 3500);
}

function exibirImagem(elementId, escolha) {
    const imageMap = {
        'pedra': './Img/Cópia de Doc. dos Arquivos 1.png',
        'papel': './Img/Cópia de Doc. dos Arquivos 3.png',
        'tesoura': './Img/Cópia de Doc. dos Arquivos 2.png'
    };

    const container = document.getElementById(elementId);
    container.innerHTML = `<img src="${imageMap[escolha]}" alt="${escolha}">`;
}
