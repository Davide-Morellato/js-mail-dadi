// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// CREO UNA VARIABILE PER PRENDERMI L'INPUT EMAIL (document.getElementById)

const email = document.getElementById('email') ;



// CREO UNA VARIABILE PER PRENDERMI L'INPUT BUTTON (document.getElementById)

const button = document.getElementById('button') ;



// AGGIUNGO L'EVENTO AL CLICK SUL BUTTON (button)

button.addEventListener('click', function(){

    
    // RICAVO IL VALORE DELL'EMAIL (.value)

    const emailElement = email.value ;

    // console.log(emailElement) ;// CONTROLLO SE STAMPA IL VALORE


    // CREO UNA VARIABILE DI CONTROLLO

    let emailInArray = false ;



    // CREO UN ARRAY PER VEDERE SE L'EMAIL INSERITA E' PRESENTE

    const arrayEmailList = ['davide@gmail.com', 'giovanni@gmail.com', 'pietro@gmail.com']

    for(let i = 0; i < arrayEmailList.length; i++){

        const emailList = arrayEmailList[i] ;

        if(emailElement === emailList){
            emailInArray = true ;
        }

    }


    if(emailInArray === true){
        console.log('email presente') ;
    } else {
        console.log('email assente')
    }




})




