$(document).ready(function () {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    $("#chiffrement").change(function (e) {
        select_val = $("#chiffrement").val();

        switch (select_val) {
            case 'cesar': input_cle_cesar();
            case 'afine': input_cle_afine();
            case 'playfair': input_cle_playfair();
            case 'vigenere': input_cle_vigenere();
            case 'scytale': input_cle_scytale();
            case 'hill': input_cle_hill();
        }

    });



    $("#btn-chiffrer").click(function () {
        // Récupérer le texte , supprimer les espaces et le mettre en majuscule
        texte_en_clair = $("#txt-chiffrement").val().toUpperCase().split(" ").join("").trim();

        // Variable pour sauvegarder le msg chiffré
        msg_chiffre = '';

        // Récupérer le type de chiffrement
        val = $("#chiffrement").val();

        switch (val) {
            case 'cesar': chiffrement_cesar();
            case 'afine': chiffrement_afine();
            case 'playfair': chiffrement_playfair();
            case 'vigenere': chiffrement_vigenere();
            case 'scytale': chiffrement_scytale();
            case 'hill': chiffrement_hill();
        }
    });

    /* ------------ Fonctions pour le changement du bloc de la clé selon le chiffrement ------------*/

    function input_cle_cesar() {

        block_cle = '<h5 class="text-center">Choisir une clé</h5>';
        block_cle += '<ul id="cle-cesar">';
        for (i = 0; i < 26; i++) {
            block_cle += '<li>' + i + '</li>';
        }
        block_cle += '</ul>';

        $("#cle").html(block_cle);

        $('#cle-cesar > li').click(function () {
            $('#cle-cesar > li[selected-key]').removeAttr('selected-key');
            const clickedItemIndex = $(this).index();
            console.log(clickedItemIndex);
            $('#cle-cesar > li').eq(clickedItemIndex).attr('selected-key', '');
        });

    }


    function input_cle_afine() {

    }

    function input_cle_playfair() {

    }

    function input_cle_vigenere() {

    }

    function input_cle_scytale() {

    }

    function input_cle_hill() {

    }



    /* ------------ Fonctions de chiffrements ------------*/

    function chiffrement_cesar() {
        // Récupérer clé cesar
        K = $('#cle-cesar > li[selected-key]').text();
        console.log(K);
        if (K == '') K = 0;
        else {
            K = parseInt(K);

        }
        if (K > 25 || K < 0) {
            $("#exampleModalToggleLabel").text("Erreur de chiffrement");
            $(".modal-body").text("Clé érronée (La clé doit être entre 0 et 25)");
            $("#exampleModalToggle").modal('toggle');
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

function chiffrement_playfair() {

};

function chiffrement_vigenere() {

};

function chiffrement_scytale() {

};

function chiffrement_hill() {

};


/* ------------ Fonctions de déchiffrements ------------*/

function dechiffrement_afine() {

};

function dechiffrement_afine() {

};

function dechiffrement_playfair() {

};

function dechiffrement_vigenere() {

};

function dechiffrement_scytale() {

};

function dechiffrement_hill() {

};