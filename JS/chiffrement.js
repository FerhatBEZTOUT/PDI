$(document).ready(function () {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


    $("#btn-chiffrer").click(function () {
        // Récupérer le texte , supprimer les espaces et le mettre en majuscule
        texte_en_clair = $("#txt-chiffrement").val().toUpperCase().split(" ").join("").trim();
    
        // Variable pour sauvegarder le msg chiffré
        msg_chiffre = '';

        // Récupérer le type de chiffrement
        val = $("#chiffrement").val();

        switch (val) {
            case 'cesar' : chiffrement_cesar();
            case 'afine' : chiffrement_afine();
            case 'playfair' : chiffrement_playfair();
            case 'vigenere' : chiffrement_vigenere();
            case 'scytale' : chiffrement_scytale();
            case 'hill' : chiffrement_hill();
        }
    });




    function chiffrement_cesar() {
        // Récupérer clé cesar
        K = $("#cle-cesar").val();
        if (K == '') K = 0; else {
            K = parseInt(K);
            K = K % 26;
        }
        // Parcours global du msg à chiffrer
        for (i = 0; i < texte_en_clair.length; i++) {
            // L : Position de la lettre
            L = alphabet.indexOf(texte_en_clair[i])

            // C : Nouvelle position de la lettre
            C = (L + K) % 26;

            msg_chiffre += alphabet[C];

        }

        // Affichage du texte dans un text-area
        $("#txt-result").text(msg_chiffre);
    }
});



function chiffrement_afine() {

};

function chiffrement_playfair(){
    
};

function chiffrement_vigenere(){
    
};

function chiffrement_scytale(){
    
};

function chiffrement_hill(){
    
};