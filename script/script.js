let qtdCartasViradas = 0, qtdJogadas = 0, qtdPares = 0, tempo = 0, qtdCartas =0, carta1, carta2;
const divRelogio = document.querySelector('.relogio');
const divCartas = document.querySelector('.cartas');
let idTime;

jogo();

function jogo(){
    qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
    const parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
    parrots.sort(comparador);

    while(qtdCartas < 4 || qtdCartas > 14 || qtdCartas%2 !== 0){
        qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
    }

    let imgsSelecionadas = parrots.slice(0, qtdCartas/2);

    for (let index = 0; index < qtdCartas/2; index++) {
        imgsSelecionadas.push(imgsSelecionadas[index]); 
    }

    imgsSelecionadas.sort(comparador);

    for(j=0; j < imgsSelecionadas.length; j++){
        divCartas.innerHTML +=  `
            <div onclick="virar(this)" class="card">
                <div class="front-face face">
                <img src="./imgs/back.png" alt="">
                </div>
                <div class="back-face face">
                <img src="./imgs/${imgsSelecionadas[j]}.gif" alt="">
                </div>
            </div>`;
    }

    idTime = setInterval(updateRelogio, 1000);
}

function comparador(){
    return Math.random() - 0.5; 
}

function virar(card){
    qtdCartasViradas++;
    if(qtdCartasViradas === 1){
        card.children[0].classList.add('virada');
        card.children[1].classList.add('virada2');
        qtdJogadas++;
        carta1 = card;

    }else if(qtdCartasViradas ===2){
        card.children[0].classList.add('virada');
        card.children[1].classList.add('virada2');
        qtdJogadas++;
        carta2 = card;

        comparaCartas();

    }
}

function comparaCartas(){
   if(carta1.children[1].children[0].attributes[0].value === carta2.children[1].children[0].attributes[0].value && carta1 !== carta2){
        qtdCartasViradas = 0;
        carta1.removeAttribute('onclick');
        carta2.removeAttribute('onclick');

        qtdPares++;
        if(qtdCartas/2 === qtdPares){
            clearInterval(idTime);
            setTimeout(function(){
                alert(`Você ganhou em ${qtdJogadas} jogadas! A duração do jogo foi de ${tempo} segundos!`)
            }, 500);
            setTimeout(reiniciaJogo, 500);
        }
   }else{
        setTimeout(desvirar, 1000);
   }
}

function desvirar(){
    carta1.children[0].classList.toggle('virada');
    carta1.children[1].classList.toggle('virada2');
    carta2.children[0].classList.toggle('virada');
    carta2.children[1].classList.toggle('virada2');
    qtdCartasViradas = 0;
}

function updateRelogio(){
    tempo++;
    divRelogio.innerHTML = tempo;
}

function reiniciaJogo(){
    let resposta = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
    while(resposta !== "sim"){
        if(resposta === 'não'){
            break;
        }
        resposta = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
    }

    if(resposta === "sim"){
        divCartas.innerHTML = '';
        qtdCartasViradas = 0, qtdJogadas = 0, qtdPares = 0, tempo = 0, qtdCartas = 0;
        jogo();
    }
}