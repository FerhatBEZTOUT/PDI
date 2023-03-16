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

        


        /* ------------ Fonctions pour le changement du bloc de la clé selon le chiffrement ------------*/
    function reset_input_cle() {
        $("#cle").html("");
    }

    function input_cle_cesar() {
        
        block_cle = '<h5 class="text-center">Choisir une clé K <a class="question-cle" target="_blank" href="cours.php#Chiffrement_César">Plus d\'infos</a></h5>';
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
        
        block_cle = '<h5 class="text-center">Choisir une clé K (K=(A,B))<a target="_blank" class="question-cle" href="#"> Plus d\'infos</a></h5>';
        
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

           

    function input_cle_vigenere() {
        block_cle = '<h5 class="text-center">Choisir une clé K <a target="_blank" class="question-cle" href="#">Plus d\'infos</a></h5>';
        block_cle += '<input type="text" class="form-control" id="cle-vigenere">';
        
        
        $("#cle").html(block_cle);

    }

    function input_cle_scytale() {

    }

    function input_cle_hill() {

    }

                   
    /* END OF SCRIPT */  
});
