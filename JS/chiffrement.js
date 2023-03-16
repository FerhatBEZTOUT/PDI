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

           
    function input_cle_playfair() {

        
        block_cle ='<tr>';
        block_cle +='<td align="CENTER"><h5>Entrez des 25 clés K(W est inutile dans francais) <a target="_blank" class="question-cle" href="#">Plus d\'infos</a></h5><textarea name="txt-playfaircles" rows="1" cols="60" wrap="virtual">BYDGZJSFUPLARKXCOIVEQNMHT</textarea></td>';
        block_cle +='</tr>';
        block_cle +='<tr>';
        block_cle +='<td align="CENTER" ><h5>Grille</h5>';
        block_cle +='<input type="TEXT" name="m11" size="1"><input type="TEXT" name="m12" size="1"><input type="TEXT" name="m13" size="1"><input type="TEXT" name="m14" size="1"><input type="TEXT" name="m15" size="1"><br>';
        block_cle +='<input type="TEXT" name="m21" size="1"><input type="TEXT" name="m22" size="1"><input type="TEXT" name="m23" size="1"><input type="TEXT" name="m24" size="1"><input type="TEXT" name="m25" size="1"><br>';
        block_cle +='<input type="TEXT" name="m31" size="1"><input type="TEXT" name="m32" size="1"><input type="TEXT" name="m33" size="1"><input type="TEXT" name="m34" size="1"><input type="TEXT" name="m35" size="1"><br>';
        block_cle +='<input type="TEXT" name="m41" size="1"><input type="TEXT" name="m42" size="1"><input type="TEXT" name="m43" size="1"><input type="TEXT" name="m44" size="1"><input type="TEXT" name="m45" size="1"><br>';
        block_cle +='<input type="TEXT" name="m51" size="1"><input type="TEXT" name="m52" size="1"><input type="TEXT" name="m53" size="1"><input type="TEXT" name="m54" size="1"><input type="TEXT" name="m55" size="1"><br>';
        block_cle +='</td>';
        block_cle +='</tr>';
        $("#cle").html(block_cle);
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

//chiffrement_playfair
    function standard(entree)
    {
  entree.value=entree.value.toUpperCase();
  longueur = entree.value.length;
  entree_standard='';
  for (i=0; i<longueur; i++)
  {
    if (alphabet.indexOf(entree.value.charAt(i))!=-1)
    {
      entree_standard += entree.value.charAt(i)
    }
  }
  entree.value = entree_standard;
}


function CreerGrille (clef)
{
	standard(clef);
	var grille  = '';
	for(var nbr = 0; nbr < clef.value.length; nbr++){
		ch= clef.value.charAt(nbr)
		if (grille.indexOf (ch) < 0) {
			grille += ch
		}
	}
	for(var nbr = 0; nbr < alphabet.length; nbr++){
		ch= alphabet.charAt(nbr)
		if (grille.indexOf (ch) < 0) {
			grille += ch
		}
	}
    $("#m1").val(grille[0]);
	return grille
}

function Playfair(clair, clef, chiffre, m11, m12, m13, m14, m15, m21, m22, m23, m24, m25, m31, m32, m33, m34, m35, m41, m42, m43, m44, m45, m51, m52, m53, m54, m55)
{
	matrice = CreerGrille(clef);
	n=0;
	standard(clair);
	chiffre.value = ""; 
	for(nbr = 0; nbr < clair.value.length; nbr=nbr+2){
	    ch1   = clair.value.charAt(nbr);
	    ch2   = clair.value.charAt(nbr+1);
            if (ch1 == ch2) {ch2="X"; nbr=nbr-1};    // Žlimine les doublons
		ord1  = matrice.indexOf(ch1);
		ligne1 = Math.floor(ord1 / 5);
		col1  = ord1 % 5;
		ord2  = matrice.indexOf(ch2);
		ligne2 = Math.floor(ord2 / 5);
		col2  = ord2 % 5;
		if (ligne1 == ligne2) {
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(5*ligne1 + (col1 + 1)%5);
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(5*ligne2 + (col2 + 1)%5);
		} else if (col1 == col2) {
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(col1 + 5*((ligne1+1)%5));
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(col2 + 5*((ligne2+1)%5));
		} else {
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(5*ligne1 + col2);
 	  		if ((n%5==0) && (n>0)) {chiffre.value+=" "};
	 		n++;
			chiffre.value += matrice.charAt(5*ligne2 + col1);
		}
	}
    $("#txt-dechiffrement").val(chiffre);
	$("#m11").value=matrice.charAt(0);
	m12.value = matrice.charAt(1);
	m13.value = matrice.charAt(2);
	m14.value = matrice.charAt(3);
	m15.value = matrice.charAt(4);
	m21.value = matrice.charAt(5);
	m22.value = matrice.charAt(6);
	m23.value = matrice.charAt(7);
	m24.value = matrice.charAt(8);
	m25.value = matrice.charAt(9);
	m31.value = matrice.charAt(10);
	m32.value = matrice.charAt(11);
	m33.value = matrice.charAt(12);
	m34.value = matrice.charAt(13);
	m35.value = matrice.charAt(14);
	m41.value = matrice.charAt(15);
	m42.value = matrice.charAt(16);
	m43.value = matrice.charAt(17);
	m44.value = matrice.charAt(18);
	m45.value = matrice.charAt(19);
	m51.value = matrice.charAt(20);
	m52.value = matrice.charAt(21);
	m53.value = matrice.charAt(22);
	m54.value = matrice.charAt(23);
	m55.value = matrice.charAt(24);
}


    function chiffrement_playfair() {
        Playfair($("#txt-chiffrement"),$("#txt-playfaircles"),$("#txt-dechiffrement"), $("#m11"), $("m12"), $("m13"), $("m14"), $("m15"), $("m21"), $("m22"), $("m23"), $("m24"), $("m25"), $("m31"),$("m32"), $("m33"), $("m34"), $("m35"), $("m41"), $("m42"), $("m43"), $("m44"), $("m45"), $("m51"), $("m52"), $("m53"), $("m54"), $("m55"))
    };

    function chiffrement_vigenere() {

        // Récupérer la clé (texte)
        K_txt = $("#cle-vigenere").val().toUpperCase().split(" ").join("").trim();
    
        longueur_txt = K_txt.length;

        // Transformer en valeurs numériques
        K = []
        for (i=0;i<longueur_txt;i++) {
            K.push(alphabet.indexOf(K_txt[i]));
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


    function chiffrement_hill(key) {
        
        let cipherText = '';
        
        // Split the Text into blocks and encrypt each block
        for (let i = 0; i < texte_en_clair.length; i += keySize) {
          const block = texte_en_clair.slice(i, i + keySize);
          let blockMatrix = [];
          
          // Create a matrix from the block
          for (let j = 0; j < block.length; j++) {
            blockMatrix.push(block.charCodeAt(j) - 65);
          }
          
          // Multiply the key matrix with the block matrix
          let encryptedMatrix = new Array(keySize).fill(0);
          for (let j = 0; j < keySize; j++) {
            for (let k = 0; k < keySize; k++) {
              encryptedMatrix[j] += key[j * keySize + k] * blockMatrix[k];
            }
            encryptedMatrix[j] = encryptedMatrix[j] % 26;
          }
          
          // Convert the encrypted matrix back into characters
          for (let j = 0; j < encryptedMatrix.length; j++) {
            cipherText += String.fromCharCode(encryptedMatrix[j] + 65);
          }
        }
        
        return cipherText;
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



//dechiffrement_playfair()
function InvPlayfair(clair, clef, chiffre, m11, m12, m13, m14, m15, m21, m22, m23, m24, m25, m31, m32, m33, m34, m35, m41, m42, m43, m44, m45, m51, m52, m53, m54, m55)
{
	matrice = CreerGrille(clef);
	standard(chiffre);
	clair.value = ""; 
	for(nbr = 0; nbr < chiffre.value.length; nbr=nbr+2){
	    ch1   = chiffre.value.charAt(nbr);
	    ch2   = chiffre.value.charAt(nbr+1);
		ord1  = matrice.indexOf(ch1);
		ligne1 = Math.floor(ord1 / 5);
		col1  = ord1 % 5;
		ord2  = matrice.indexOf(ch2);
		ligne2 = Math.floor(ord2 / 5);
		col2  = ord2 % 5;
		if (ligne1 == ligne2) {
			clair.value += matrice.charAt(5*ligne1 + (col1 + 4)%5);
			clair.value += matrice.charAt(5*ligne2 + (col2 + 4)%5);
		} else if (col1 == col2) {
			clair.value += matrice.charAt(col1 + 5*((ligne1+4)%5));
			clair.value += matrice.charAt(col2 + 5*((ligne2+4)%5));
		} else {
			clair.value += matrice.charAt(5*ligne1 + col2);
			clair.value += matrice.charAt(5*ligne2 + col1);
		}
	}
	m11.value = matrice.charAt(0);
	m12.value = matrice.charAt(1);
	m13.value = matrice.charAt(2);
	m14.value = matrice.charAt(3);
	m15.value = matrice.charAt(4);
	m21.value = matrice.charAt(5);
	m22.value = matrice.charAt(6);
	m23.value = matrice.charAt(7);
	m24.value = matrice.charAt(8);
	m25.value = matrice.charAt(9);
	m31.value = matrice.charAt(10);
	m32.value = matrice.charAt(11);
	m33.value = matrice.charAt(12);
	m34.value = matrice.charAt(13);
	m35.value = matrice.charAt(14);
	m41.value = matrice.charAt(15);
	m42.value = matrice.charAt(16);
	m43.value = matrice.charAt(17);
	m44.value = matrice.charAt(18);
	m45.value = matrice.charAt(19);
	m51.value = matrice.charAt(20);
	m52.value = matrice.charAt(21);
	m53.value = matrice.charAt(22);
	m54.value = matrice.charAt(23);
	m55.value = matrice.charAt(24);
}
    function dechiffrement_playfair() {

    };

    function dechiffrement_vigenere() {
        // Récupérer la clé (texte)
        K_txt = $("#cle-vigenere").val().toUpperCase().split(" ").join("").trim();
    
        longueur_txt = K_txt.length;

        // Transformer en valeurs numériques
        K = []
        for (i=0;i<longueur_txt;i++) {
            K.push(alphabet.indexOf(K_txt[i]));
            
        }
        
        // Parcours du msg à chiffrer
        i = 0
       
        while ( i < texte_chiffre.length) {
            // L : Position de la lettre en clar
            C = alphabet.indexOf(texte_chiffre[i])

            // Recuperer valeur une lettre de la clé
            K_ieme = K[i % longueur_txt]
            
            // C : Nouvelle position de la lettre chiffrée
            L = (C - K_ieme) % 26;

            if (L<0) {
                L+=26;
            }
            msg_en_clair += alphabet[L];

            i++;
        }

        // Affichage du texte dans un text-area
        $("#txt-chiffrement").val(msg_en_clair);
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



