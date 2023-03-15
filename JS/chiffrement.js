$(document).ready(function () {
 /* START OF SCRIPT */


    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const affine_A_values = [1,3,5,7,9,11,15,17,19,21,23,25];

    $("#chiffrement").change(function (e) {
        select_val = $("#chiffrement").val();

        reset_input_cle();

        switch (select_val) {
            case 'cesar': input_cle_cesar(); break;
            case 'afine': input_cle_afine(); break;
            case 'playfair': input_cle_playfair(); break;
            case 'vigenere': input_cle_vigenere(); break;
            case 'scytale': input_cle_scytale(); break;
            case 'hill': input_cle_hill(); break;
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
            case 'cesar': chiffrement_cesar(); break; 
            case 'afine': chiffrement_afine(); break;
            case 'playfair': chiffrement_playfair(); break;
            case 'vigenere': chiffrement_vigenere(); break;
            case 'scytale': chiffrement_scytale(); break;
            case 'hill': chiffrement_hill(); break;
        }
    });



    $("#btn-dechiffrer").click(function () {
        // Récupérer le texte , supprimer les espaces et le mettre en majuscule
        texte_chiffre = $("#txt-dechiffrement").val().toUpperCase().split(" ").join("").trim();

        // Variable pour sauvegarder le msg chiffré
        msg_en_clair = '';

        // Récupérer le type de chiffrement
        val = $("#chiffrement").val();

        switch (val) {
            case 'cesar': dechiffrement_cesar();
            case 'afine': dechiffrement_afine();
            case 'playfair': dechiffrement_playfair();
            case 'vigenere': dechiffrement_vigenere();
            case 'scytale': dechiffrement_scytale();
            case 'hill': dechiffrement_hill();
        }
    });


    /* ------------ Fonctions pour le changement du bloc de la clé selon le chiffrement ------------*/
    function reset_input_cle() {
        $("#cle").html("");
    }

    function input_cle_cesar() {
        
        block_cle = '<h5 class="text-center">Choisir une clé K <a class="question-cle" href="#">Plus d\'infos</a></h5>';
        block_cle += '<ul class="cle-number" id="cle-cesar">';
        for (i = 0; i < 26; i++) {
            block_cle += '<li>' + i + '</li>';
        }
        block_cle += '</ul>';

        $("#cle").html(block_cle);

        $('#cle-cesar > li').click(function () {
            $('#cle-cesar > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-cesar > li').eq(clickedItemIndex).attr('selected-key', '');
        });

    }


    function input_cle_afine() {
        
        block_cle = '<h5 class="text-center">Choisir une clé K (K=(A,B))<a class="question-cle" href="#"> Plus d\'infos</a></h5>';
        
        block_cle += '<h4>A</h4>';
        block_cle += '<ul class="cle-number" id="cle-afine-a">';

        for (i = 0; i<affine_A_values.length; i++) {
            block_cle += '<li>' + affine_A_values[i] + '</li>';
        }
        block_cle += '</ul>';

        block_cle += '<h4>B</h4>';
        block_cle += '<ul class="cle-number" id="cle-afine-b">';

        for (i = 0; i<26; i++) {
            block_cle += '<li>' + i + '</li>';
        }
        block_cle += '</ul>';

        $("#cle").html(block_cle);

        $('#cle-afine-a > li').click(function () {
            $('#cle-afine-a > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-afine-a > li').eq(clickedItemIndex).attr('selected-key', '');
        });

        $('#cle-afine-b > li').click(function () {
            $('#cle-afine-b > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-afine-b > li').eq(clickedItemIndex).attr('selected-key', '');
        });
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

        if (K == '') K = 0;
        else {
            K = parseInt(K);

        }
        // Vérifier que la clé est correcte
        if (K > 25 || K < 0) {
            $("#exampleModalToggleLabel").text("Erreur de chiffrement");
            $(".modal-body").text("Clé érronée (La clé doit être entre 0 et 25)");
            $("#exampleModalToggle").modal('toggle');
        }

        // Parcours du msg à chiffrer
        for (i = 0; i < texte_en_clair.length; i++) {
            // L : Position de la lettre
            L = alphabet.indexOf(texte_en_clair[i])

            // C : Nouvelle position de la lettre
            C = (L + K) % 26;

            msg_chiffre += alphabet[C];

        }

        // Affichage du texte dans un text-area
        $("#txt-dechiffrement").val(msg_chiffre);
    }



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

    function dechiffrement_cesar() {
        // Récupérer clé cesar
        K = $('#cle-cesar > li[selected-key]').text();

        if (K == '') K = 0;
        else {
            K = parseInt(K);

        }
        // Vérifier que la clé est correcte
        if (K > 25 || K < 0) {
            $("#exampleModalToggleLabel").text("Erreur de dechiffrement");
            $(".modal-body").text("Clé érronée (La clé doit être entre 0 et 25)");
            $("#exampleModalToggle").modal('toggle');
        }

        // Parcours du msg à chiffrer
        for (i = 0; i < texte_chiffre.length; i++) {
            // L : Position de la lettre
            
            C = alphabet.indexOf(texte_chiffre[i])

            // C : Nouvelle position de la lettre
            L = (C - K) % 26;
            if (L < 0) {
                L = L + 26;
            }
            console.log(alphabet[L]);
            msg_en_clair += alphabet[L];

        }

        // Affichage du texte dans un text-area
        
        $("#txt-chiffrement").val(msg_en_clair);
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












    /* END OF SCRIPT */  
});



