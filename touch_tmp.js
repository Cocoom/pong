ToucherPos1Y;
Joueur1SeDeplace = false;

document.addEventListener('touchstart', function (event) {
event.preventDefault();
// Le joueur commence à appuyer pour commencer à faire bouger le haricot
debug.innerHTML = 'On appui sur l écran avec son doigt';

var touches = event.changedTouches;
var message = '';
for (var i=0; i<touches.length; i++) {
    message += touches[i].identifier + ' / x=' + touches[i].pageX + ' / y=' + touches[i].pageY + '<br/>';
}
debug.innerHTML = message;

var premierToucherEcran;
if (touches && touches.length > 0) {
    premierToucherEcran = touches[0];
    
    var toucher1PosX = premierToucherEcran.stageX;
    var onAToucherLeCoteGauche = false;
    if (toucher1PosX < 420) {
        onAToucherLeCoteGauche = true;
        Joueur1SeDeplace = onAToucherLeCoteGauche;
    }

    ToucherPos1Y = premierToucherEcran.stageY;
}


})
document.addEventListener('touchmove', function (event) {
event.preventDefault();
// Le joueur continue d'appuyer pour bouger le haricot
debug.innerHTML = 'On déplace son doigt sur l ecran';

var touches = event.changedTouches;
var message = '';
for (var i=0; i<touches.length; i++) {
    message += touches[i].identifier + ' / x=' + touches[i].pageX + ' / y=' + touches[i].pageY + '<br/>';
}
debug.innerHTML = message;


var premierToucherEcran;
if (touches && touches.length > 0) {
    premierToucherEcran = touches[0];
    
    var toucher1NouvellePosY = premierToucherEcran.stageY;
    var Deplacement = ToucherPos1Y - toucher1NouvellePosY;
    /* if (Deplacement > 0) {
        // On se déplace vers le haut
        if (Joueur1SeDeplace) {
            jouer1.style.top +=  Deplacement;
        }
    } else {
        // On se déplace vers le bas
    } */
    if (Joueur1SeDeplace) {
        jouer1.style.top -=  Deplacement;
    } else {
        jouer2.style.top -=  Deplacement;
    }

    ToucherPos1Y = toucher1NouvellePosY;
}

})
document.addEventListener('touchend', function (event) {
event.preventDefault();
// Le joueur arrête d'appuyer pour arrêter de faire bouger le haricot
debug.innerHTML = 'On enlève son doigt de l ecran';
})