$(document).ready(function () {
    /* START OF SCRIPT */


    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // Tableau contnenant les valeurs possibles pour A de la clé du chiffrement d'affine
    const affine_A_values = [1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25];

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

        const freq_lettres = [0.0812, 0.0090, 0.0338, 0.0366, 0.1740, 0.0106, 0.0147, 0.0055, 0.0753, 0.0031, 0.0005, 0.0555, 0.0292, 0.0689, 0.0834, 0.0262, 0.0102, 0.0643, 0.0733, 0.0930, 0.0284, 0.0113, 0.0164, 0.0044, 0.0165, 0.0023];
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        const data = {
            labels: Array.from(alphabet),
            datasets: [{
                label: 'Frequency',
                data: freq_lettres,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return 'Frequency: ' + context.parsed.y;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Frequency'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                }
            }
        };

        const chartContainer = document.querySelector('.chart-container');
        const chart = new Chart(chartContainer.querySelector('#myChart'), config);

        function handleMouseWheel(event) {
            event.preventDefault();
            chartContainer.scrollLeft += event.deltaY;
        }


        chartContainer.addEventListener('wheel', handleMouseWheel);


        function handleClick(event) {
            const barIndex = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true)[0].index;
            const letter = alphabet[barIndex];
            console.log(`Clicked on bar for letter ${letter}`);
        }


        chartContainer.addEventListener('click', handleClick);

    }


    function input_cle_affine() {

        block_cle = '<h5 class="text-center">Choisir une clé K (K=(A,B))<a target="_blank" class="question-cle" href="#"> Plus d\'infos</a></h5>';

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



    function input_cle_vigenere() {
        block_cle = '<h5 class="text-center">Choisir une clé K <a target="_blank" class="question-cle" href="#">Plus d\'infos</a></h5>';
        block_cle += '<input type="text" class="form-control" id="cle-vigenere">';


        $("#cle").html(block_cle);

    }

    function input_cle_scytale() {

    }

    function input_cle_hill() {

    }

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


    /* END OF SCRIPT */
});


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


function remplir_matrice_playfair(cle) {
    // Supprimer les doublons de la clé 
    // Exemple : "chiffrement" devient "chifremnt" 
    cle_nettoyee = supprimer_doublons(cle);

    longueur_text = cle_nettoyee.length;

    // alphabet sans le W
    alphabet_playfair = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]

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
            // Supression de la lettre depuis l'alphabet_playfair
            alphabet_playfair = alphabet_playfair.filter(item => item !== cle_nettoyee[cpt]);
            cpt++;
            j++;
        }

        // Si on a fini d'insérer la clé on sort de la boucle
        if (cpt >= longueur_text) break;
        i++;
    }



    // Compléter avec le reste de l'alphabet_playfair restant
    while (i < 5) {
        while (j < 5) {
            // Extraction du premier élément du tableau et 
            mat[i][j] = alphabet_playfair.shift();
            j++;
        }
        i++;
        j = 0;
    }

    console.table(mat)
}
