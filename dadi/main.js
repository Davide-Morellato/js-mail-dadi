// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// CREO UNA VARIABILE PER PRENDERMI L'INPUT ROLL (document.getElementById)

const roll = document.getElementById('roll')


// AGGIUNGO L'EVENTO AL CLICK SUL BUTTON (button)

roll.addEventListener('click', function(){

    // CREO UN ARRAY PER GENERARE NUMERI CASUALI PER L'UTENTE

    const numberUser = []


    // CREO UN ARRAY PER GENERARE NUMERI CASUALI PER IL PC

    const numberPc = []


    // CREO UNA VARIABILE CHE MI GENERI NUMERI CASUALI PER L'UTENTE

    const randomNumUser = Math.floor(Math.random()*6)+1 ;
    numberUser.push(randomNumUser) ;


    // CREO UNA VARIABILE CHE MI GENERI NUMERI CASUALI PER IL PC

    const randomNumPc = Math.floor(Math.random()*6)+1 ;
    numberPc.push(randomNumPc) ;

    // STAMPO IN CONSOLE L'ESITO

    console.log('Lancio Giocatore: ' + numberUser , 'Lancio PC: ' + numberPc)


    // 1. SE IL NUMERO DELL'UTENTE numberUser E' MAGGIORE DEL NUMERO DEL PC numberPc -> STAMPA 'HAI VINTO!, Sei Contento?'
    // 2. ALTRIMENTI SE IL NUMERO DELL'UTENTE numberUser E' STRETTAMENTE UGUALE (===) DEL NUMERO DEL PC numberPc -> 'RIPROVIAMO!'
    // 3. ALTRIMENTI -> STAMPA 'HAI PERSO!, Sfigato!'
    if(numberUser > numberPc){
        console.log('HAI VINTO!, Sei Contento?')
    } else if(numberUser === numberPc){ 
        console.log('FACCIAMO UN GIOCHINO?')
    } else{
        console.log('HAI PERSO!, Sfigato!')
    }

})


