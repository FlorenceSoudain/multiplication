var nombreAleatoire1 = Math.random()*10;
nombreAleatoire1 = Math.round(nombreAleatoire1);

var nombreAleatoire2 = Math.random()*10;
nombreAleatoire2 = Math.round(nombreAleatoire2);

var reponse = 0;

var multi = nombreAleatoire1 * nombreAleatoire2;

document.getElementById('multiplication').innerHTML = nombreAleatoire1+ " x " +nombreAleatoire2;

document.getElementById('envoyer').addEventListener('click', function () {

    reponse = document.getElementById('reponse').value;

    if (reponse == multi) {
        document.getElementById('message').innerHTML = "Félicitation !";
        document.getElementById('message').style.fontFamily = "'Great Vibes', cursive";
        document.getElementById('message').style.fontSize = "75px";
    }
    else {
        document.getElementById('message').innerHTML = "Ce n'est pas la bonne réponse."
    }

});

document.getElementById('rejouer').addEventListener('click', function () {

    nombreAleatoire1 = Math.random()*10;
    nombreAleatoire1 = Math.round(nombreAleatoire1);

    nombreAleatoire2 = Math.random()*10;
    nombreAleatoire2 = Math.round(nombreAleatoire2);

    multi = nombreAleatoire1 * nombreAleatoire2;

    document.getElementById('multiplication').innerHTML = nombreAleatoire1+ " x " +nombreAleatoire2;
    document.getElementById('message').innerHTML = "";
});