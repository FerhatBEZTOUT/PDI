const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/* Tableau de fréquences des lettres en français indicé par l'ordre de l'alphabet */
var tab_freq_fr = [0.0812, 0.0090, 0.0338, 0.0366, 0.1740,
    0.0106, 0.0147, 0.0055, 0.0753, 0.0031,
    0.0005, 0.0555, 0.0292, 0.0689, 0.0834,
    0.0262, 0.0102, 0.0643, 0.0733, 0.0930,
    0.0284, 0.0113, 0.0164, 0.0044, 0.0165,
    0.0023];

function frequence_lettres(texte) {
    let longueur_text = texte.length;
    // tab de nombre d'occurence de chaque lettre (tab indicé par l'ordre de la lettre)
    tab_occur = Array(26).fill(0);
    for (i = 0; i < longueur_text; i++) {
        tab_occur[alphabet.indexOf(texte[i])]++;
    }
    s = 0;
    for (i = 0; i < 26; i++) {
        // Diviser le nombre d'occurence de chaque lettre par longueur_text
        tab_freq[i] = parseFloat(Number(tab_occur[i]) / Number(longueur_text));;

    }
    return tab_freq;
}

// Exemple d'utilisation


