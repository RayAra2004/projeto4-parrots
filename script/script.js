let qtdCartas = Number(prompt('Digite a quantidade de cartas.'));
const divCartas = document.querySelector('.cartas');
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
        <div class="card">
            <div class="front-face face">
            <img src="./imgs/back.png" alt="">
            </div>
            <div class="back-face face">
            <img src="./imgs/${imgsSelecionadas[j]}.gif" alt="">
            </div>
        </div>`;
}



function comparador(){
    return Math.random() - 0.5; 
}