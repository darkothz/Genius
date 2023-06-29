// Referências do DOM HTML

const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('amarelo');
const azul = document.getElementById('azul');

const start = document.getElementById('start');
const verificar = document.getElementById('verificar');

// Lógica do jogo

let vetjogador=[], vetmaq=[];

jogar();

vermelho.onclick = ()=>{
    setTimeout(()=>{
        vermelho.style.backgroundColor='#ff6666';
     },500);
    vermelho.style.backgroundColor='#ce5252';
     vetjogador.push(1);
     console.log('Jogador ' + vetjogador);
}
verde.onclick = ()=>{
    
    setTimeout(()=>{
        verde.style.backgroundColor='#61b861'
     },500);
     verde.style.backgroundColor='#458245'
     vetjogador.push(2);
     console.log('Jogador ' + vetjogador);
}

amarelo.onclick = ()=>{
    
    setTimeout(()=>{
        amarelo.style.backgroundColor='#ffe96a'
     },500);
     amarelo.style.backgroundColor='#c6b453'
     vetjogador.push(3);
     console.log('Jogador ' + vetjogador);
}

azul.onclick = ()=>{
    
    setTimeout(()=>{
        azul.style.backgroundColor='#4d84fc'
     },500);
     azul.style.backgroundColor='#355eb6';
     vetjogador.push(4);
     console.log('Jogador ' + vetjogador);
}



start.onclick = ()=>{
    jogar();
    vetjogador=[];
};

function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina '+ vetmaq);
}

////////////////////// solução 1 /////////////////
function verifygame(){
    const resp = vetmaq.map( function(elemento, indice, array){
        //console.log(indice);
        //console.log(array);
        if(vetjogador[indice]== elemento){
            return 1;
        }else{
            vetmaq=[];
            return 0;

        }
    });
    console.log('Teste de acerto = ' + resp);

}

////////////////////// solução 2 /////////////////
function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp=0;
           vetmaq=[];
           break;
        }else{
            resp=1;
        }
        i += 1;
     }
     console.log('Teste de acerto = ' + resp);
     vetjogador=[];
     
}

verificar.onclick=()=>{
    verifygame();
};