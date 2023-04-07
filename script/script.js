let qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
const divCartas = document.querySelector('.cartas');
const parrots = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']

while(qtdCartas < 4 || qtdCartas > 14 || qtdCartas%2 !== 0){
    qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
}

for(i=0; qtdCartas/2 > i; i++){
    for(j=0; j < 2; j++){
        divCartas.innerHTML +=  `
            <div class="card">
                <div class="front-face face">
                <img src="./imgs/back.png" alt="">
                </div>
                <div class="back-face face">
                ${i}
                </div>
            </div>`;
    }
}
