let qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
let cont = 0;

const divCartas = document.querySelector('.cartas');

while(qtdCartas < 3 && qtdCartas > 14 && qtdCartas%2 !== 0){
    qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
}

if(qtdCartas > 3 && qtdCartas <= 14 && qtdCartas%2 === 0){
    for(i=0; qtdCartas > i; i++){
        divCartas.innerHTML +=  `
        <div class="card">
            <div class="front-face face">
            <img src="./imgs/back.png" alt="">
            </div>
            <div class="back-face face">
            Verso
            </div>
        </div>`;
    }
}
