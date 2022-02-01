var risultato = $('#risultato');
var verifica = $('#verifica');
var reset = $('#reset');
verifica.on('click', function () {
    var giocatore1 = Number($('#giocatore1').val());
    var giocatore2 = Number($('#giocatore2').val());
    if (!giocatore1 || !giocatore2) {
        risultato.text("Entrambi i giocatori devono inserire un numero!!");
    }
    var numeroRandom = Math.floor(Math.random() * 101);
    var punteggio1 = Math.abs(numeroRandom - giocatore1);
    var punteggio2 = Math.abs(numeroRandom - giocatore2);
    if (numeroRandom == giocatore1) {
        risultato.text("Il numero estratto \u00E8: ".concat(numeroRandom, " Congratulazioni Giocatore 1 hai vinto"));
    }
    else if (numeroRandom == giocatore2) {
        risultato.text("Il numero estratto \u00E8: ".concat(numeroRandom, " Congratulazioni Giocatore 2 hai vinto"));
    }
    if (punteggio1 < punteggio2) {
        risultato.text("Il numero estratto \u00E8: ".concat(numeroRandom, " Nessuno dei due giocatori ha vinto, ma il giocatore 1 si \u00E8 avvicinato di pi\u00F9"));
    }
    else if (punteggio1 > punteggio2) {
        risultato.text(" Il numero estratto \u00E8: ".concat(numeroRandom, " Nessuno dei due giocatori ha vinto, ma il giocatore 2 si \u00E8 avvicinato di pi\u00F9"));
    }
});
reset.on('click', function () {
    risultato.text('');
    $('#giocatore1').val('');
    $('#giocatore2').val('');
});
