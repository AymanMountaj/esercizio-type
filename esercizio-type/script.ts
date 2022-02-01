
let risultato  = $('#risultato');
let verifica = $('#verifica');
let reset = $('#reset')

verifica.on('click', function() {

    let giocatore1: number = Number($('#giocatore1').val());
    let giocatore2: number = Number($('#giocatore2').val());

    if (!giocatore1 || !giocatore2) {
        risultato.text(`Entrambi i giocatori devono inserire un numero!!`);
    } 
    let numeroRandom = Math.floor(Math.random() * 101);
    let punteggio1= Math.abs(numeroRandom - giocatore1);
    let punteggio2 = Math.abs(numeroRandom - giocatore2);

    if (numeroRandom == giocatore1) {

        risultato.text(`Il numero estratto è: ${numeroRandom} Congratulazioni Giocatore 1 hai vinto`);
    }
    else if (numeroRandom == giocatore2) {
        
        risultato.text(`Il numero estratto è: ${numeroRandom} Congratulazioni Giocatore 2 hai vinto`);
    }

    if (punteggio1 < punteggio2) {
        
        risultato.text(`Il numero estratto è: ${numeroRandom} Nessuno dei due giocatori ha vinto, ma il giocatore 1 si è avvicinato di più`);
    }
    else if(punteggio1 > punteggio2) {
        risultato.text(` Il numero estratto è: ${numeroRandom} Nessuno dei due giocatori ha vinto, ma il giocatore 2 si è avvicinato di più`);
    }
});

reset.on('click', function(){
    risultato.text('');
    $('#giocatore1').val('');
    $('#giocatore2').val('');

    
});