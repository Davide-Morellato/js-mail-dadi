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


    // CREO UNA VARIABILE DI CONTROLLO [fuori dal ciclo perchè così lo scope è globale e non relegata al ciclo]

    let emailInArray = false ; // USO false PERCHE' NON SO SE L'UTENTE DIGITERA' UNA EMAIL PRESENTE NELL'ARRAY (PARTO DAL PRESUPPOSTO CHE NON CI SIA)



    // CREO UN ARRAY PER VEDERE SE L'EMAIL INSERITA E' PRESENTE

    const arrayEmailList = ['davide@gmail.com', 'giovanni@gmail.com', 'pietro@gmail.com']



    // PER PRENDERE TUTTI GLI ELEMENTI DELL'ARRAY arrayEmailList UTILIZZO IL CICLO for

    for(let i = 0; i < arrayEmailList.length; i++){

        const emailList = arrayEmailList[i] ; // CREO UNA VARIABILE CHE IDENTIFICHI OGNI ELEMENTO NELL'ARRAY arrayEmailList


        // VERIFICO SE NELL'ARRAY arrayEmailList E' PRESENTE IL VALORE INSERITO DALL'UTENTE emailElement
        // USO LA VARIABILE emailList CHE RAPPRESENTA OGNI ELEMENTO NELL'ARRAY

        if(emailElement === emailList){     
            emailInArray = true ; // UTILIZZO LA VARIABILE DI CONTROLLO emailInArray DICHIARANDO CHE SIA VERO L'ESITO (true)
                                  // QUALORA L'EMAIL INSERITA DALL'UTENTE SIA PRESENTE NELL'ARRAY
        }

    }


    
    // SE L'EMAIL INSERITA E' PRESENTE
        //STAMPO IL MESSAGGIO 'email presente'
    // ALTRIMENTI
        // STAMPO MESSAGGIO 'email assente'

    if(emailInArray === true){
        console.log('email presente') ;
    } else {
        console.log('email assente')
    }




})




