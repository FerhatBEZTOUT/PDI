$(document).ready(function (){
    /* START OF SCRIPT */


    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // Tableau contnenant les valeurs possibles pour A de la clé du chiffrement d'affine
    const affine_A_values = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];


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
        texte_en_clair = normaliserChaine($("#txt-chiffrement").val().toUpperCase().split(" ").join("").trim());
        $("#txt-chiffrement").val(texte_en_clair)
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
        // Récupérer le texte , supprimer les espaces et le mettre en majuscule et le normaliser
        texte_chiffre = normaliserChaine($("#txt-dechiffrement").val().toUpperCase().split(" ").join("").trim());
        $("#txt-dechiffrement").val(texte_chiffre);
        
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

        block_cle = `<h5 class="text-center">Choisir une clé K <a class="question-cle" target="_blank" href="cours.php#Chiffrement_César">Plus d'infos</a></h5>`;
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

        block_cle = '<h5 class="text-center">Choisir une clé K (K=(A,B))<a target="_blank" class="question-cle" href="cours.php#chiffrement_affine"> Plus d\'infos</a></h5>';

        block_cle += '<h4>A</h4>';
        block_cle += '<ul class="cle-number" id="cle-affine-a">';

        for (i = 0; i < affine_A_values.length; i++) {
            block_cle += '<li>' + affine_A_values[i] + '</li>';
        }
        block_cle += '</ul>';

        block_cle += '<h4>B</h4>';
        block_cle += '<ul class="cle-number" id="cle-affine-b">';

        for (i = 0; i < 26; i++) {
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


        block_cle = '<tr>';
        block_cle += '<td align="CENTER"><h5>Entrez la clé K <a target="_blank" class="question-cle" href="./cours#chiffrement_playfair">Plus d\'infos</a></h5><textarea name="playfair" id="txt-playfaircles" rows="1" cols="60" wrap="virtual"></textarea></td>';
        block_cle += '</tr>';
        block_cle += '<tr>';
        block_cle += '<td align="CENTER" ><h5>Grille</h5>';
        block_cle += '<input type="TEXT" name="m11" id="m11" size="1"><input type="TEXT" name="m12" id="m12" size="1"><input type="TEXT" name="m13" id="m13" size="1"><input type="TEXT" name="m14" id="m14" size="1"><input type="TEXT" name="m15" id="m15" size="1"><br>';
        block_cle += '<input type="TEXT" name="m21" id="m21" size="1"><input type="TEXT" name="m22" id="m22" size="1"><input type="TEXT" name="m23" id="m23" size="1"><input type="TEXT" name="m24" id="m24" size="1"><input type="TEXT" name="m25" id="m25" size="1"><br>';
        block_cle += '<input type="TEXT" name="m31" id="m31" size="1"><input type="TEXT" name="m32" id="m32" size="1"><input type="TEXT" name="m33" id="m33" size="1"><input type="TEXT" name="m34" id="m34" size="1"><input type="TEXT" name="m35" id="m35" size="1"><br>';
        block_cle += '<input type="TEXT" name="m41" id="m41" size="1"><input type="TEXT" name="m42" id="m42" size="1"><input type="TEXT" name="m43" id="m43" size="1"><input type="TEXT" name="m44" id="m44" size="1"><input type="TEXT" name="m45" id="m45" size="1"><br>';
        block_cle += '<input type="TEXT" name="m51" id="m51" size="1"><input type="TEXT" name="m52" id="m52" size="1"><input type="TEXT" name="m53" id="m53" size="1"><input type="TEXT" name="m54" id="m54" size="1"><input type="TEXT" name="m55" id="m55" size="1"><br>';
        block_cle += '</td>';
        block_cle += '</tr>';
        $("#cle").html(block_cle);

    }

    function input_cle_vigenere() {
        block_cle = '<h5 class="text-center">Choisir une clé K <a target="_blank" class="question-cle" href="cours.php#chiffrement_vigenere">Plus d\'infos</a></h5>';
        block_cle += '<input type="text" class="form-control" id="cle-vigenere">';


        $("#cle").html(block_cle);

    }

    function input_cle_scytale() {
        block_cle = '<tr>';
        block_cle += '<td align="CENTER"><h5>Diametre(1-20)<a target="_blank" class="question-cle" href="#">Plus d\'infos</a></h5><textarea name="scytale" id="txt-scytale" rows="1" cols="30" wrap="virtual">1</textarea></td>';
        block_cle += '</tr>';
        $("#cle").html(block_cle);
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
            afficher_modal_erreur("Erreur de chiffrement", "Clé érronée (La clé doit être entre 0 et 25)");
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


        if (A == '' || B == '') {
            A = 1;
            B = 0;
        }
        else {
            A = parseInt(A);
            B = parseInt(B);
        }
        // Vérifier que la clé est correcte
        if (!affine_A_values.includes(A)) {
            afficher_modal_erreur("Erreur de chiffrement", "Valeur de A incorrecte (A doit être premier avec 26)");
        }

        if (B > 25 || B < 0) {
            afficher_modal_erreur("Erreur de chiffrement", "Valeur de B incorrecte (B doit être entre 0 et 25)");
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

    //chiffrement_playfair
    function standard(entree) {
        entree = entree.toUpperCase();
        entree = normaliserChaine(entree);
        
        longueur = entree.length;
        entree_standard = '';
        for (i = 0; i < longueur; i++) {
            if (alphabet.indexOf(entree.charAt(i)) != -1) {
                entree_standard += entree.charAt(i);
            }
        }
        entree = entree_standard;
        $("#txt-playfaircles").val(entree);
        return entree;
    }


    function CreerGrille(clef) {
        clef = standard(clef);
        
        var grille = '';
        for (var nbr = 0; nbr < clef.length; nbr++) {
            ch = clef.charAt(nbr);
            if (ch!='W'){
                if (grille.indexOf(ch) < 0 ) {
                    grille += ch;
                }
            }
        }
        for (var nbr = 0; nbr < alphabet.length; nbr++) {
            ch = alphabet.charAt(nbr);
            if (ch!='W'){
                if (grille.indexOf(ch) < 0 && grille.indexOf(ch)!='W') {
                    grille += ch;
                }
            }
        }
        return grille;
    }


    function  chiffrement_playfair() {
        clef = $("#txt-playfaircles").val();
        var clair = texte_en_clair;
        var matrice = '';
        matrice = CreerGrille(clef);
        $("#m11").val(matrice.charAt(0));
        $("#m12").val(matrice.charAt(1));
        $("#m13").val(matrice.charAt(2));
        $("#m14").val(matrice.charAt(3));
        $("#m15").val(matrice.charAt(4));
        $("#m21").val(matrice.charAt(5));
        $("#m22").val(matrice.charAt(6));
        $("#m23").val(matrice.charAt(7));
        $("#m24").val(matrice.charAt(8));
        $("#m25").val(matrice.charAt(9));
        $("#m31").val(matrice.charAt(10));
        $("#m32").val(matrice.charAt(11));
        $("#m33").val(matrice.charAt(12));
        $("#m34").val(matrice.charAt(13));
        $("#m35").val(matrice.charAt(14));
        $("#m41").val(matrice.charAt(15));
        $("#m42").val(matrice.charAt(16));
        $("#m43").val(matrice.charAt(17));
        $("#m44").val(matrice.charAt(18));
        $("#m45").val(matrice.charAt(19));
        $("#m51").val(matrice.charAt(20));
        $("#m52").val(matrice.charAt(21));
        $("#m53").val(matrice.charAt(22));
        $("#m54").val(matrice.charAt(23));
        $("#m55").val(matrice.charAt(24));
        clair = standard(clair);
        chiffre = "";
        for (nbr = 0; nbr < clair.length; nbr = nbr + 2) {
            ch1 = clair.charAt(nbr);
            ch2 = clair.charAt(nbr + 1);
            if (ch1 == ch2) { ch2 = "X"; nbr = nbr - 1 };    // Elimine les doublons
            ord1 = matrice.indexOf(ch1);
            ligne1 = Math.floor(ord1 / 5);
            col1 = ord1 % 5;
            ord2 = matrice.indexOf(ch2);
            ligne2 = Math.floor(ord2 / 5);
            col2 = ord2 % 5;
            if (ligne1 == ligne2) {
                chiffre += matrice.charAt(5 * ligne1 + (col1 + 1) % 5);
                chiffre += matrice.charAt(5 * ligne2 + (col2 + 1) % 5);
            } else if (col1 == col2) {
                chiffre += matrice.charAt(col1 + 5 * ((ligne1 + 1) % 5));
                chiffre += matrice.charAt(col2 + 5 * ((ligne2 + 1) % 5));
            } else {
                chiffre += matrice.charAt(5 * ligne1 + col2);
                chiffre += matrice.charAt(5 * ligne2 + col1);
            }
        }
        msg_en_clair = chiffre;
        $("#txt-dechiffrement").val(msg_en_clair);
    };

    function chiffrement_vigenere() {

        // Récupérer la clé (texte)
        K_txt = $("#cle-vigenere").val().toUpperCase().split(" ").join("").trim();

        longueur_txt = K_txt.length;

        // Transformer en valeurs numériques
        K = []
        for (i = 0; i < longueur_txt; i++) {
            K.push(alphabet.indexOf(K_txt[i]));
        }

        // Parcours du msg à chiffrer
        i = 0

        while (i < texte_en_clair.length) {
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
        var chiffre="";
        var largeur = $("#txt-scytale").val();
        var clair = texte_en_clair;
        k=parseInt(largeur);
        if (k<1 || k>20) {
            k=3; 
            largeur.val("3");
        }
        mess=clair;
        while (mess.length%k != 0) {mess += ' '};
        m=mess.length/k;
        for(var i = 0; i < m; i++) {
            for(var j = 0; j < mess.length; j=j+m) {
                chiffre += mess.charAt(i+j);
            }
        }
        $("#txt-dechiffrement").val(chiffre);
    };


    function chiffrement_hill(key) {

        
    }




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
            afficher_modal_erreur("Erreur de dechiffrement", "Clé érronée (La clé doit être entre 0 et 25)");
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


        if (A == '' || B == '') {
            A = 1;
            B = 0;
        }
        else {
            A = parseInt(A);
            B = parseInt(B);
        }
        // Vérifier que la clé est correcte
        if (!affine_A_values.includes(A)) {
            afficher_modal_erreur("Erreur de déchiffrement", "Valeur de A incorrecte (A doit être premier avec 26)");
        }

        if (B > 25 || B < 0) {
            afficher_modal_erreur("Erreur de déchiffrement", "Valeur de B incorrecte (B doit être entre 0 et 25)");
        }


        // Parcours du msg à déchiffrer
        for (i = 0; i < texte_chiffre.length; i++) {
            // L : Position de la lettre chiffrée
            C = alphabet.indexOf(texte_chiffre[i])

            // C : Nouvelle position de la lettre en clair
            L = (inverse_modulaire(A, 26) * (C - B)) % 26;

            if (L < 0) {
                L = L + 26;
            }
            msg_en_clair += alphabet[L];

        }

        // Affichage du texte dans un text-area
        $("#txt-chiffrement").val(msg_en_clair);
    };

    function dechiffrement_playfair() {
        clef = $("#txt-playfaircles").val();
        var matrice = CreerGrille(clef);
        $("#m11").val(matrice.charAt(0));
        $("#m12").val(matrice.charAt(1));
        $("#m13").val(matrice.charAt(2));
        $("#m14").val(matrice.charAt(3));
        $("#m15").val(matrice.charAt(4));
        $("#m21").val(matrice.charAt(5));
        $("#m22").val(matrice.charAt(6));
        $("#m23").val(matrice.charAt(7));
        $("#m24").val(matrice.charAt(8));
        $("#m25").val(matrice.charAt(9));
        $("#m31").val(matrice.charAt(10));
        $("#m32").val(matrice.charAt(11));
        $("#m33").val(matrice.charAt(12));
        $("#m34").val(matrice.charAt(13));
        $("#m35").val(matrice.charAt(14));
        $("#m41").val(matrice.charAt(15));
        $("#m42").val(matrice.charAt(16));
        $("#m43").val(matrice.charAt(17));
        $("#m44").val(matrice.charAt(18));
        $("#m45").val(matrice.charAt(19));
        $("#m51").val(matrice.charAt(20));
        $("#m52").val(matrice.charAt(21));
        $("#m53").val(matrice.charAt(22));
        $("#m54").val(matrice.charAt(23));
        $("#m55").val(matrice.charAt(24));
        chiffre = standard(texte_chiffre);
        clair = "";
        for (nbr = 0; nbr < chiffre.length; nbr = nbr + 2) {
            ch1 = chiffre.charAt(nbr);
            ch2 = chiffre.charAt(nbr + 1);
            ord1 = matrice.indexOf(ch1);
            ligne1 = Math.floor(ord1 / 5);
            col1 = ord1 % 5;
            ord2 = matrice.indexOf(ch2);
            ligne2 = Math.floor(ord2 / 5);
            col2 = ord2 % 5;
            if (ligne1 == ligne2) {
                clair += matrice.charAt(5 * ligne1 + (col1 + 4) % 5);
                clair += matrice.charAt(5 * ligne2 + (col2 + 4) % 5);
            } else if (col1 == col2) {
                clair += matrice.charAt(col1 + 5 * ((ligne1 + 4) % 5));
                clair += matrice.charAt(col2 + 5 * ((ligne2 + 4) % 5));
            } else {
                clair += matrice.charAt(5 * ligne1 + col2);
                clair += matrice.charAt(5 * ligne2 + col1);
            }
        }
        msg_en_clair = clair;
        $("#txt-chiffrement").val(msg_en_clair);
    };

    function dechiffrement_vigenere() {
        // Récupérer la clé (texte)
        K_txt = $("#cle-vigenere").val().toUpperCase().split(" ").join("").trim();

        longueur_txt = K_txt.length;

        // Transformer en valeurs numériques
        K = []
        for (i = 0; i < longueur_txt; i++) {
            K.push(alphabet.indexOf(K_txt[i]));

        }

        // Parcours du msg à chiffrer
        i = 0

        while (i < texte_chiffre.length) {
            // L : Position de la lettre en clar
            C = alphabet.indexOf(texte_chiffre[i])

            // Recuperer valeur une lettre de la clé
            K_ieme = K[i % longueur_txt]

            // C : Nouvelle position de la lettre chiffrée
            L = (C - K_ieme) % 26;

            if (L < 0) {
                L += 26;
            }
            msg_en_clair += alphabet[L];

            i++;
        }

        // Affichage du texte dans un text-area
        $("#txt-chiffrement").val(msg_en_clair);
    };

    function dechiffrement_scytale() {
        largeur = $("#txt-scytale").val();
        chiffre = texte_chiffre;
        var clair = "";
        k=parseInt(largeur);
        if (k<1 || k>20) {
            k=3;
            largeur.val("3");
        }    
        for(var i = 0; i < k; i++) {
            for(var j = 0; j < chiffre.length; j=j+k) {
                clair += chiffre.charAt(i+j);
            }
        }
        $("#txt-chiffrement").val(clair);     
    };

    function dechiffrement_hill() {

    };


    /* ---------------------------------------- Fonctions outils ----------------------------------------

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



    /* Fonction qui élimine les accents et normalise une chaine */
    function normaliserChaine(chaine) {
        // replace accents with their corresponding letters
        chaine = chaine.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        // remove symbols, apostrophes, and numbers
        chaine = chaine.replace(/[^\w\s]|[\d]|_/gi, "");

        return chaine;
    }


    // Fonction qui supprime les doublons de lettres dans une chaine de caractéres
    function supprimer_doublons(chaine) {
        let unique = '';
        for (let i = 0; i < chaine.length; i++) {
            if (unique.indexOf(chaine[i]) === -1) {
                unique += chaine[i];
            }
        }
        return unique;
    }


    /* Fonction qui rempli une matrice 5x5 avec le reste de l'alphabet d'une clé donnée 
        Exemple  :  • clé = "maman" => suppression doublons => cle devient "man"
                    • remplir les trois premiers cases par "M" "A" "N"
                    • remplir le reste des cases avec l'alphabet restant en enlevant "M" "A" "N"
    */
    function remplir_matrice_playfair(cle) {
        // Supprimer les doublons de la clé 
        // Exemple : "chiffrement" devient "chifremnt" 
        cle_nettoyee = supprimer_doublons(cle);

        longueur_text = cle_nettoyee.length;

        // alphabet sans le W
        alphabet_playfair_fr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

        // init mat
        mat = [[], [], [], [], []];

        // compteur pour insérer la clé dans la matrice
        cpt = 0;

        i = 0;

        while (i < 5 && cpt < longueur_text) {
            j = 0;
            while (j < 5 && cpt < longueur_text) {
                // Ajout de la lettre à la matrice
                mat[i][j] = cle_nettoyee[cpt];
                // Supression de la lettre depuis l'alphabet_playfair_fr
                alphabet_playfair_fr = alphabet_playfair_fr.filter(item => item !== cle_nettoyee[cpt]);
                cpt++;
                j++;
            }

            // Si on a fini d'insérer la clé on sort de la boucle
            if (cpt >= longueur_text) break;
            i++;
        }



        // Compléter avec le reste de l'alphabet_playfair_fr restant
        while (i < 5) {
            while (j < 5) {
                // Extraction du premier élément du tableau et 
                mat[i][j] = alphabet_playfair_fr.shift();
                j++;
            }
            i++;
            j = 0;
        }

        console.table(mat)
    }



    /* END OF SCRIPT */

    
});



