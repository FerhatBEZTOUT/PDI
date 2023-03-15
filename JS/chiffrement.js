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


    function createKey(keychars){
        //字母顺序数组
        var allChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'];
        
        //变量keychars获取字母在字母顺序表中位置，删除该字母
        for(var i = 0 ;i<26;i++){ 
            var index = allChars.indexOf(keychars[i]);
            if (index > -1) {
                allChars.splice(index, 1);
            }
        }

        //将keychar中的字母插入到字母表中
        for(var i = keychars.length-1;i>=0;i--){
            allChars.unshift(keychars[i]);
        }

        //从第一列将keychars插入至密码表
        for(var i = 0 ; i<5 ; i++){
            for(var j = 0; j<5 ;j++){    
                key[j][i] = allChars[i*5+j];
            } 
        }
    }    
    
    function removeDuplicate(str){
        var result = [],tempStr = "";
        var arr = str.split('');//把字符串分割成数组
        //arr.sort();//排序
        for(var i = 0; i < arr.length; i++){
            var repeatBack = true;//设计变量是为确保字符串前部分不存在相同字符，因为以下算法只能确保连在一起相同的字符
            for(var j = 0;j<=i;j++){
                if(arr[i] == result[j])
                    repeatBack = false;
            }    
            if(arr[i] !== tempStr && repeatBack){
                result.push(arr[i]);        
                tempStr = arr[i]; 
            }else{
            continue;
            }
        }
        return result.join("");//将数组转换为字符串
    }
    
       
    function input_cle_playfair() {
        block_cle = '<h5 class="text-center">Entrez des 25 clés K(W est inutile dans francais) <a class="question-cle" href="#">Plus d\'infos</a></h5>';
        block_cle += '<tr>';
        block_cle += '<td> <textarea name="txt-cles" id="txt-cles" cols="30" rows="1">BYDGZJSFUPLARKXCOIVEQNMHT</textarea> </td>';
        block_cle +=' <td>';
        block_cle +='<input type="TEXT" name="m11" size="1"><input type="TEXT" name="m12" size="1"><input type="TEXT" name="m13" size="1"><input type="TEXT" name="m14" size="1"><input type="TEXT" name="m15" size="1"><br>';
        block_cle +='<input type="TEXT" name="m21" size="1"><input type="TEXT" name="m22" size="1"><input type="TEXT" name="m23" size="1"><input type="TEXT" name="m24" size="1"><input type="TEXT" name="m25" size="1"><br>';
        block_cle +='<input type="TEXT" name="m31" size="1"><input type="TEXT" name="m32" size="1"><input type="TEXT" name="m33" size="1"><input type="TEXT" name="m34" size="1"><input type="TEXT" name="m35" size="1"><br>';
        block_cle +='<input type="TEXT" name="m41" size="1"><input type="TEXT" name="m42" size="1"><input type="TEXT" name="m43" size="1"><input type="TEXT" name="m44" size="1"><input type="TEXT" name="m45" size="1"><br>';
        block_cle +='<input type="TEXT" name="m51" size="1"><input type="TEXT" name="m52" size="1"><input type="TEXT" name="m53" size="1"><input type="TEXT" name="m54" size="1"><input type="TEXT" name="m55" size="1"><br>';
        block_cle +='Grille</td>';
        block_cle += '</tr >';
        $("#cle").html(block_cle);
        // table_cle = '<ul class="cle-number" id="cleplayfair">';
        // for(var i = 0 ; i<5 ; i++){
        //     table_cle += '<br>'
        //     for(var j = 0; j<5 ;j++){
        //         key[j][i] = $("#cle")[i*5+j];
        //         table_cle +='<li>' + key[i][j] + '</li>';   
        //     } 
        // }
        // table_cle = '</ul>';
        // $("#cletab").html(table_cle);
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
        var k = document.getElementById("#txt-chiffrement").value.toUpperCase().replace(/\s/ig,'');
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



