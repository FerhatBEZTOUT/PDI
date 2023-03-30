// Alphabet français
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    function frequence_lettres(texte) {
        let longueur_text = texte.length;
        // tab de nombre d'occurence de chaque lettre (tab indicé par l'ordre de la lettre)
        let tab_occur = Array(26).fill(0);
        for (i = 0; i < longueur_text; i++) {
            tab_occur[alphabet.indexOf(texte[i])]++;
        }

        let tab_freq = Array(26).fill(0);
        for (i = 0; i < 26; i++) {
            // Diviser le nombre d'occurence de chaque lettre par longueur_text
            tab_freq[i] = parseFloat(Number(tab_occur[i]) / Number(longueur_text)).toFixed(4);

        }
        return tab_freq;
    }



    function frequence_lettres_vigenere(chaine, taille_cle){
        if (taille_cle>chaine.length) {
            afficher_modal_erreur("Taille clé vigenere","La taille de la clé ne doit pas dépasser la taille de la chaine de caractéres");
        }
        
        // Découper en groupe de textes (tableau de textes)
        let grp_texte = decouper_en_groupe(chaine, taille_cle);
        // Calculer fréquence des lettres dans chaque groupe
        return calcul_freq_groupe(grp_texte, taille_cle);

    }


    function decouper_en_groupe(chaine, taille_cle) {
        let lng_chaine = chaine.length;
        let grp_texte= [];
        
        for (i=0;i<taille_cle;i++) {
                j = i;
                grp_texte[i]= ""
            while(j<lng_chaine) {
                grp_texte[i]+= chaine[j];
                j+= taille_cle;
            }
        }
       
        return grp_texte;
    }


    function calcul_freq_groupe(grp_texte, taille_cle) {
        let i;
        let freq_vig = Array(taille_cle).fill(0);
        for (i=0;i<taille_cle;i++) {
            freq_vig[i] = frequence_lettres(grp_texte[i]);
        }
        return freq_vig;
    }


      /* Fonction pour calculer l'indice de coincidence */
    function indiceCoincidence(texte) {
        let freq = {}; // dictionnaire pour stocker les fréquences de chaque lettre
        let somme = 0; // variable pour stocker la somme des fréquences

        // compter les fréquences de chaque lettre dans le texte
        for (let i = 0; i < texte.length; i++) {
            let lettre = texte[i];
            if (freq[lettre]) {
                freq[lettre]++;
            } else {
                freq[lettre] = 1;
            }
        }
       
        // calculer la somme des fréquences
        for (let lettre in freq) {
            let frequence = freq[lettre];
            somme += frequence * (frequence - 1);
        }

        // calculer l'indice de coïncidence
        let n = texte.length;
        let indice = somme / (n * (n - 1));

        return indice;
    }


     /* Indice de coincidence pour vigenere (même concept mais avec des groupes de texte et une moyenne) */
     function indiceCoincidenceVigenere(texte_chiffre, taille_cle) {
        let grp_texte = decouper_en_groupe(texte_chiffre,taille_cle);
        s=0;
        for(let i=0;i<taille_cle;i++) {
            s+=indiceCoincidence(grp_texte[i]);
        }
        return Number((s/taille_cle).toFixed(4));
    }

