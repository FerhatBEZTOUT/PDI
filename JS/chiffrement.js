$(document).ready(function () {
 /* START OF SCRIPT */


    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // Tableau contnenant les valeurs possibles pour A de la clé du chiffrement d'affine
    const affine_A_values = [1,3,5,7,9,11,15,17,19,21,23,25];

    /* Tableau de fréquences des lettres en français indicé par l'ordre de l'alphabet */
    var freq_lettres = [0.0812, 0.0090, 0.0338, 0.0366, 0.1740,
                0.0106, 0.0147, 0.0055, 0.0753, 0.0031,
                0.0005, 0.0555, 0.0292, 0.0689, 0.0834,
                0.0262, 0.0102, 0.0643, 0.0733, 0.0930,
                0.0284, 0.0113, 0.0164, 0.0044, 0.0165,
                0.0023];


    $("#chiffrement").change(function (e) {
        select_val = $("#chiffrement").val();

        reset_input_cle();

        switch (select_val) {
            case 'cesar': input_cle_cesar(); break;
            case 'affine': input_cle_affine(); break;
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
            case 'affine': chiffrement_affine(); break;
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
            case 'cesar': dechiffrement_cesar(); break;
            case 'affine': dechiffrement_affine(); break;
            case 'playfair': dechiffrement_playfair(); break;
            case 'vigenere': dechiffrement_vigenere(); break;
            case 'scytale': dechiffrement_scytale(); break;
            case 'hill': dechiffrement_hill(); break;
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

        // click listener pour chaque <li>
        $('#cle-cesar > li').click(function () {
            $('#cle-cesar > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-cesar > li').eq(clickedItemIndex).attr('selected-key', '');
        });

    }


    function input_cle_affine() {
        
        block_cle = '<h5 class="text-center">Choisir une clé K (K=(A,B))<a class="question-cle" href="#"> Plus d\'infos</a></h5>';
        
        block_cle += '<h4>A</h4>';
        block_cle += '<ul class="cle-number" id="cle-affine-a">';

        for (i = 0; i<affine_A_values.length; i++) {
            block_cle += '<li>' + affine_A_values[i] + '</li>';
        }
        block_cle += '</ul>';

        block_cle += '<h4>B</h4>';
        block_cle += '<ul class="cle-number" id="cle-affine-b">';

        for (i = 0; i<26; i++) {
            block_cle += '<li>' + i + '</li>';
        }
        block_cle += '</ul>';

        $("#cle").html(block_cle);

        $('#cle-affine-a > li').click(function () {
            $('#cle-affine-a > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-affine-a > li').eq(clickedItemIndex).attr('selected-key', '');
        });

        $('#cle-affine-b > li').click(function () {
            $('#cle-affine-b > li[selected-key]').removeAttr('selected-key');

            const clickedItemIndex = $(this).index();

            $('#cle-affine-b > li').eq(clickedItemIndex).attr('selected-key', '');
        });
    }

    function input_cle_playfair() {

    }

    function input_cle_vigenere() {
        block_cle = '<h5 class="text-center">Choisir une clé K <a class="question-cle" href="#">Plus d\'infos</a></h5>';
        block_cle += '<input type="text" class="form-control" id="cle-vigenere">';
        
        
        $("#cle").html(block_cle);

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
            afficher_modal_erreur("Erreur de chiffrement","Clé érronée (La clé doit être entre 0 et 25)");
        }

        // Parcours du msg à chiffrer
        for (i = 0; i < texte_en_clair.length; i++) {
            // L : Position de la lettre en clair
            L = alphabet.indexOf(texte_en_clair[i])

            // C : Nouvelle position de la lettre chiffrée
            C = (L + K) % 26;

            msg_chiffre += alphabet[C];

        }

        // Affichage du texte dans un text-area
        $("#txt-dechiffrement").val(msg_chiffre);
    }



    function chiffrement_affine() {
        // Récupérer clé affine
        A = $('#cle-affine-a > li[selected-key]').text();
        B = $('#cle-affine-b > li[selected-key]').text();


        if (A == '' || B == '')  {
            A = 1;
            B = 0;
        }
        else {
            A = parseInt(A);
            B = parseInt(B);
        }
        // Vérifier que la clé est correcte
        if (!affine_A_values.includes(A)) {
            afficher_modal_erreur("Erreur de chiffrement","Valeur de A incorrecte (A doit être premier avec 26)");
        }

        if (B > 25 || B < 0) {
            afficher_modal_erreur("Erreur de chiffrement","Valeur de B incorrecte (B doit être entre 0 et 25)");
        }

        
        // Parcours du msg à chiffrer
        for (i = 0; i < texte_en_clair.length; i++) {
            // L : Position de la lettre en clar
            L = alphabet.indexOf(texte_en_clair[i])

            // C : Nouvelle position de la lettre chiffrée
            C = (A * L + B) % 26;

            msg_chiffre += alphabet[C];

        }

        // Affichage du texte dans un text-area
        $("#txt-dechiffrement").val(msg_chiffre);
    };

    function chiffrement_playfair() {

    };

    function chiffrement_vigenere() {

        // Récupérer la clé (texte)
        K_txt = $("#cle-vigenere").val().toUpperCase().split(" ").join("").trim();
    
        longueur_txt = K_txt.length;

        // Transformer en valeurs numériques
        K = []
        for (i=0;i<longueur_txt;i++) {
            K.push(alphabet.indexOf(K_txt[i]));
            console.log(K[i]);
        }
        
        // Parcours du msg à chiffrer
        i = 0
       
        while ( i < texte_en_clair.length) {
            // L : Position de la lettre en clar
            L = alphabet.indexOf(texte_en_clair[i])

            // Recuperer valeur une lettre de la clé
            K_ieme = K[i % longueur_txt]
            
            // C : Nouvelle position de la lettre chiffrée
            C = (K_ieme + L) % 26;

            msg_chiffre += alphabet[C];

            i++;
        }

        // Affichage du texte dans un text-area
        $("#txt-dechiffrement").val(msg_chiffre);
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
            afficher_modal_erreur("Erreur de dechiffrement","Clé érronée (La clé doit être entre 0 et 25)");
        }

        // Parcours du msg à déchiffrer
        for (i = 0; i < texte_chiffre.length; i++) {
            // C : Position de la lettre chifrée
            
            C = alphabet.indexOf(texte_chiffre[i])

            // L : Nouvelle position de la lettre en clair
            L = (C - K) % 26;
            if (L < 0) {
                L = L + 26;
            }
            
            msg_en_clair += alphabet[L];

        }

        // Affichage du texte dans un text-area
        
        $("#txt-chiffrement").val(msg_en_clair);
    };

    function dechiffrement_affine() {
        // Récupérer clé affine
        A = $('#cle-affine-a > li[selected-key]').text();
        B = $('#cle-affine-b > li[selected-key]').text();


        if (A == '' || B == '')  {
            A = 1;
            B = 0;
        }
        else {
            A = parseInt(A);
            B = parseInt(B);
        }
        // Vérifier que la clé est correcte
        if (!affine_A_values.includes(A)) {
            afficher_modal_erreur("Erreur de déchiffrement","Valeur de A incorrecte (A doit être premier avec 26)");
        }

        if (B > 25 || B < 0) {
            afficher_modal_erreur("Erreur de déchiffrement","Valeur de B incorrecte (B doit être entre 0 et 25)");
        }

        
        // Parcours du msg à déchiffrer
        for (i = 0; i < texte_chiffre.length; i++) {
            // L : Position de la lettre chiffrée
            C = alphabet.indexOf(texte_chiffre[i])

            // C : Nouvelle position de la lettre en clair
            L = (inverse_modulaire(A,26) * (C-B)) % 26;
            
            if (L < 0) {
                L = L + 26;
            }
            msg_en_clair += alphabet[L];

        }

        // Affichage du texte dans un text-area
        $("#txt-chiffrement").val(msg_en_clair);
    };

    function dechiffrement_playfair() {

    };

    function dechiffrement_vigenere() {

    };

    function dechiffrement_scytale() {

    };

    function dechiffrement_hill() {

    };



    /* Message d'erreur sous forme d'un Modal */
    function afficher_modal_erreur(titre, msg) {
        $("#exampleModalToggleLabel").text(titre);
            $(".modal-body").text(msg);
            $("#exampleModalToggle").modal('toggle');
    }

    /*
        algorithme d'euclide etendu pour résoudre les fonctions de la forme : aX - bY = 1 (a et b connus)
    */
    function euclide_etendu(a, b) {
        // Initialisation
        let x = 0, y = 1, u = 1, v = 0;
        // Itération
        while (a !== 0) {
          const q = Math.floor(b / a);
          const r = b % a;
          const m = x - u * q;
          const n = y - v * q;
          // Mise à jour des variables
          b = a;
          a = r;
          x = u;
          y = v;
          u = m;
          v = n;
        }
        // Résultats
        const gcd = b;
        const coefficients = [x, y];
        return coefficients;
      }


      /*
        calcule l'inverse modulaire
        paramétres : 
            a : le chiffre dont l'inverse modulaire est recherché
            m : modulo
       */
      function inverse_modulaire(a, m) {
        const [x, y] = euclide_etendu(a, m);
        if (x < 0) {
          return (x % m + m) % m;
        } else {
          return x;
        }
      }





    /* END OF SCRIPT */  
});



