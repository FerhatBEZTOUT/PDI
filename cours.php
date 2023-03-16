<?php
include_once __DIR__ . '/view/header.php';
?>

<!-- Barre de navigation -->
<nav class="chapter-nav">
  <ul>
    <li><a href="#chapitre1">Chapitre 1 : Introduction</a></li>
    <li><a href="#chapitre2">Chapitre 2 : Le chiffrement par substitution</a></li>
    <li><a href="#chapitre3">Chapitre 3 : Le chiffrement par transposition</a></li>
    <li><a href="#chapitre4">Chapitre 4 : Les chiffrements moderne</a></li>
  </ul>
</nav>

<main>
  <!-- Chapitre 1 -->
  <section id="chapitre1">
    <h2>Chapitre 1 : Introduction</h2>
    <p>La cryptographie assure certains objectifs de la sécurité informatique, plus précisément la confidentialité des données dans les réseaux de communication </br>
      La cryptologie rassemble les techniques destinées à dissimuler le sens d'un message à toute personne autre que son destinataire. Elle est restée longtemps confinée aux millieu militaires et diplomatiques.
      Aujourd'hui, avec la généralisation des technologies numériques, elle est omniprésente dans notre vie quotidienne. </br>
      Dans ce chapitre, nous allons d'abord présenter le vocabulaire nécessaire à la comprehension de la cryptographie.
    </p>

    <section id="Vocabulaire et définition">
      <h4> Vocabulaire et définitions </h4>
      <p> Dans cette section, des définitions relatives à la cryptographie seront présentées : </br> </p>

      <section id="Cryptologie">
        <h5> Cryptologie </h5>
        <p> La cryptologie est la science des messages secrets. Elle est la réunion de deux disciplines qui s'alimentent l'une l'autre à savoir, la cryptographie et la cryptanalyse </br> </p>

        <h5> Cryptographie </h5>
        <p> La cryptographie est à la fois une science et un art. C'est une science, car la résolution des problèmes exige la connaissance de certaines règles,
          lesquelles, tout en admettant beaucoup d'exceptions, n'en sont pas moins fixes et définies; ces règles entraînent une suite de raisonnement logiques.
          La cryptographie est aussi un art, car elle fait appel aux talents d'intuition d'imagination et d'invention du chercheur,
          ces facultés étant elles-mêmes secondées par des connaissances linguistiques approfondies. </br> </p>

        <h5> Cryptanalyse </h5>
        <p> La cryptanalyse est la technique qui consiste à déduire un texte en clair à partir d'un texte chiffré sans posséder la clé de chiffrement.
          Le processus par lequel on tente de comprendre un message en particulier est appelé généralement une attaque. </p>

        <h5> Cryptosystème </h5>
        <p> Un système cryptographique ou cryptosystème est composé d'un algorithme de cryptage (chiffrement) et d'un algorithme de décryptage (déchiffrement). </br> </p>

        <h5> Cryptogramme </h5>
        <p> Un cryptogramme est un message écrit à l'aide d'un système de chiffrement. </p>

        <section id="Définitions">
          <h6> Définition formelle </h6>
          <p> Un cryptosystème est un quituple (P,C,K,E,D) tel que : </br>
          <ul>
            <li><b> P : </b> ensemble de textes <b> clairs </b> </li>
            <li><b> C : </b> ensemble de textes <b> chiffrés </b> </li>
            <li><b> K : </b> ensemble de <b> clés </b> </li>
            <li><b> E : </b> un ensemble de fonctions E(k) | k ∈ K de<b> chiffrement </b> (cryptage) de P vers C. </li>
            <li><b> D : </b> ensemble de fonctions D(k) | k ∈ K de <b> déchiffrement </b> de C vers P.</li>
          </ul>
          satisfaisant : ∀k ∈ K, ∃k⁻¹ ∈ K | ∀m ∈ P : D(k-1) (E(k)(m)) = m </br>
          La dernière propriété est fondamentale. Elle précise que si un texte clair x est chiffré
          en un cryptogramme (message chiffré) y avec K, alors il existe une clé K' tel que y défchiffré avec
          K' redonne x</p>

          <h6> Types de cryptosystèmes </h6>
          <p> <b> Systèmes à usage restreint : </b> les algorithmes de chiffrement de déchiffrement
            sont secrets. La sécurité repose sur leur confidentialité. </br> </p>

          <p> <b> Systèmes à usage général : </b> La confidentialité ne repose pas sur l'algorithme, mais sur une clé.
            Tout le monde peut utiliser le même système </br> </p>

          <h5> Chiffre </h5>
          <p> Ensemble de procédés et ensemble de symboles (lettres, nombres, signes, etc.) employés
            pour remplacer les lettres du message à chiffre. On distingue généralement les chiffres à transposition et
            ceux à substitution. </br> </p>

          <h5> Chiffrement </h5>
          <p> Opération qui consiste à transformer un texte clair en cryptogramme. On parle de chiffrement,
            car, à la Renaissance, on utilisait principalement des chiffres arabes comme caractères de l'écriture secrète.
            Claire (ou message clair) Version Intelligible d'un message et compréhensible par tous </br> </p>

          <h5> Déchiffrement </h5>
          <p>Opération inverse du chiffrement, c'est une opération qui consiste à obtenir la version originale d'un message
            qui a été précédemment chiffré en connaissant la méthode de chiffrement et les clés (contrairement au décryptage).
            </br> </p>

          <h5> Décryptage </h5>
          <p> Opération qui consiste à retrouver le texte en clair sans disposer des clés théoriquement nécessaires.
            Ine ne faut pas confondre déchiffrement et décryptage </br> </p>

          <h5> Bigramme </h5>
          <p> C'est un groupe de deux lettres. </br> </p>

          <h5> Clé </h5>
          <p> Dans un système de chiffrement, elle correspond à un nombre, un mot, une phrase.. qui permet
            grâce à l'algorithme de chiffrement, de chiffrer ou déchiffrer un message. </br> </p>

          <h5> Casser un code </h5>
          <p> C'est de trouver la clé du code ou le moyen d'accéder à ce qu'il protégeait </br> </p>




        </section>

        <!-- Chapitre 2 -->
        <section id="chapitre2">
          <h2>Chapitre 2 : Le chiffrement par substitution</h2>
          <p>Le chiffrement par substitution est l'une des techniques les plus simples de chiffrement. Nous allons l'étudier en détail dans ce chapitre. </br> </p>
          <p> La première idée qui vient à l'esprit pour chiffrer un texte écrit dans une langue à alphabet,
            consiste à remplacer chaque lettre par une autre lettre selon une règle convenue. Dans le chiffrement
            par substitutions, chaque lettre est remplacée par une autre, mais garde sa place d'origine.
            Il existe trois type de chiffrement par subsitution : </br>
          </p>

          <h4> Chiffre de subsitution mono-alphabétique </h4>
          <p> Chaque lettre du message d'origine est toujours remplacée par une même autre lettre. </br> </p>

    <h4> Chiffre de subsitution polygrammique </h4>
    <p> Les lettres ne sont pas remplacées une par une, mais par blocs de plusieurs (deux ou trois généralement).
        Par exemple, dans une subsitution bigrammique, deux lettres du texte clair sont transformées en deux lettre du cryptogramme. </br> </p>
</br>
</br>
    <section id="Chiffrement_César">
    <h3> Chiffrement de César </h3>
    <p> Le chiffrement de César est la méthode de cryptographie la plus ancienne communément admise par l'histoire.
      Il consiste en une substitution mono-alphabétique, où la substitution est définie par un décalage de lettre.
      L'algorithme de chiffrement consiste à décaler les lettres de l'alphabet, selon la clé de chiffrement k qui représente le nombre de lettres à déclaer </br> </p>

          <section id="Chiffrement_César">
            <h3> Chiffrement de César </h3>
            <p> Le chiffrement de César est la méthode de cryptographie la plus ancienne communément admise par l'histoire.
              Il consiste en une substitution mono-alphabétique, où la substitution est définie par un décalage de lettre.
              L'algorithme de chiffrement consiste à décaler les lettres de l'alphabet, selon la clé de chiffrement k qui représente le nombre de lettres à déclaer </br> </p>

            <h4> Formellement </h4>
            <ul>
              <li><b> Chiffrement : </b> C = (L + K) mod 26 </li>
              <li><b> Déchiffrement : </b>L = (C - K) mod 26 </li>
              <li><b> L : </b> représente la lettre du texte clair </li>
              <li><b> C : </b> le résultat du chiffrement de la lettre L </li>
              <li><b> K : </b> représente la clé de chiffrement (le pas de déclage)</li>
              <p> <b> NB : </b> On commence le calcul par 0, c'est-à-dire la lettre A = 0 </br>
                <b> Exemple : </b> On veut chiffrer la lettre D avec une clé K = 4 <br>
                          C = (ord(D) + K) mod 26 = (3 + 4) mod 26 = 7 <br>
                          C = H
                          

    <h5> Méthode d'Al-Kindi </h5>
    <p> La méthode d'Al-Kindi est basée sur une analyse des fréquences d'apparition de chaque lettre dans une langue.
         Nous pouvons en dresser un histogramme, comme le montre la figure ci dessous : </p>
    <div>   
    <img class ="image-graphique" src= "https://image1.slideserve.com/2862540/fr-quences-des-lettres-dans-diff-rentes-langues-l.jpg" width=40% height=40%>
    </div>
</br>
    <p> L'attaquant met alors en relation la fréquence des lettres du message codé avec ces statistiques.
      Ainsi, il puet alors connaître la plupart des lettres du message, mais pas toutes (certaines ayant des fréquences trop similaires).
      Cependant, la découvrete des lettres principales permet de percer le reste du message. Cette technique nécessite en outre que le texte ait une longuer suffisante
      et implique que l'attaquant connaisse la langue d'origine du message crypté. </br> </p>
    <p> Le chiffrement de César est très peu sûr, puisqu'il est très facile de tester de façon exhaustive toutes les possibilités. 
      Pourant ,en raison de sa grande simplicité, le code de César fut encore employé par les officiers sudistes pendant la guerre de Sécession, et même par l'armée russe en 1915. </p>
</br>
</br>
    <section id ="chiffrement_affine">
      <h3> Chiffrement d'Affine </h3>
      <p> C'est une version améliorée du chiffrement de César. Au lieu d'additionner le pas de décalage, on utise ce qu'on appelle la fonction d'Affine : </br> </p>
      <ul>
        <li> F(X) = aX + b</li>
        <li> La clé est (a,b) tel que a,b  [0..25] et PGCD (a,26) = 1</li>
        <li> <b> Chiffrement </b> : C  = (a * L + b) mod 26 </li>
        <li> <b> Déchiffrement </b> : L = a⁻¹ * (C-b) mod 26</li>
      </ul>
      <p> <b> Remarque </b> Si a = 1, alors on se retrouve avec le chiffrement de césar </p>

      <h4> Comment choisir les nombres a et b ? </h4>
      <p> Pour que le codage puisse remplir sa fonction, il faut qu'a chaque entier n dans [0,25] siut assicué 
        une unique image n' = axn + b dans [0,25] ce qui ne sera pas le cas pour tous les couples (a,b).</br>
        En effet, si par exemple on choisit a = 4 et b = 1, on voit que pour n = 0, on trouve n' = 4x0 + 1 ≡ 1[26], mais si n = 13 alors n' = 4x13 + 1 ≡ 1[26],
        on a donc une ambiguité, car 0 et 13 ont la même image par la transformation affine. </br>
        Lorsque n décrit [0,25], les valeurs de n' seront toutes différentes les unes des autres si et seulement si 
        a est un entier premier avec 26 dans [0,25]. 
        b peut être librement choisi parmi les 26 entiers de [0,25] </br> </p>

      <h4> Cryptanalyse du chiffrement d'Affine </h4>
      <p> On peut se servir de la méthode d'Al-Kindi, pour établir la fréquence relative à chaque lettre chiffrée, puis identifier 
        les chiffres des deux lettres les plus fréquentes. Enfin, on résout le système d'équations à deux inconnus : </br> </p>
        <ul>
          <li> F(L1) = C1 = (a*L1 +b) mod 26 </li>
          <li> F(L2) = C2 = (a*L2 +b) mod 26</li>
        </ul>
      <b> Exemple : </b>
       <ul>
         <li> F ("E") = F(4) = 6 ≡ "G" -> (4a + b) mod 26 = 6 </li>
         <li> F ("T") = F(16) = 7 ≡ "H"  -> (19a + b) mod 26 = 7</li>
         <li> (a,b) = (7,4) </li>
        </ul>
    </section>

</br>
</br>
    <section id="chiffrement_vigenere">
      <h3> Chiffrement de Vigenère </h3>
      <p> C'est un chiffrement <b> poly-alphabétique </b>, le chiffrement de Vigenère est une amélioration du chiffrement
      de César. Sa force réside dans l'utilisation non pas d'un, mais de 26 alphabets décalés pour chiffrer un message.
      On peut résumer ces décalages avec un carré de Vigenère. 
      Ce chiffrement utilise une clé qui définit le décalage pour chaque lettre du message (A : déclage de 0 pas, B: de 1 pas etc...). </br>
      La grande force du chiffrement de Vigenère est que la même lettre sera chiffrée de différentes manières. </br>
      Si la clé est aussi longue que le texte en clair et moyennant quelques précautions d'utilisation, le système est appelé masque jetable. </p>

      <img class="image-vigenere" src ="https://e.educlever.com/img/6/1/2/5/612517.png" width = 30% height= 30%>
    </section>
</br>
      <h4> Cryptanalyse du chiffrement de Vigenère </h4>
      <p> La première étape de cette méthode de déchiffrement consiste à determiner la taille de la clé de chiffrement.
        L'opération qui permet de la déterminer porte le nom du test de Kasiski, du nom de son inventeur. Il s'appuie sur les répétitions du texte chiffré. </p>

      <img class="image-carre" src="https://fr.scoutwiki.org/images/0/07/Vigenere.gif" width = 30% height= 30%>

  <!-- Chapitre 3 -->
  <section id="chapitre3">
    <h2>Chapitre 3 : Le chiffrement par transposition</h2>
    <p>Le chiffrement par transposition est une autre technique de chiffrement qui consiste à permuter les lettres du message. Nous allons l'étudier en détail dans ce chapitre.</p>
  </section>

          <h4> Cryptanalyse du chiffrement de César </h4>
          <p> Cette méthode étant assez primaire, afin de décrypter, il suffit de tester les 26 sortes de déclages possibles.
            Cependant, cela prend du temps. On peut toutefois se servir de la méthode d'<b> Al-Kindi </b>, très efficace pour ce genre de cryptographie. </p>

          <h5> Méthode d'Al-Kindi </h5>
          <p> La méthode d'Al-Kindi est basée sur une analyse des fréquences d'apparition de chaque lettre dans une langue.
            Nous pouvons en dresser un histogramme, comme le montre la figure ci dessous : </p>
          <div>
            <img class="image-graphique" src="https://image1.slideserve.com/2862540/fr-quences-des-lettres-dans-diff-rentes-langues-l.jpg" width=50% height=50%>
          </div>
          <!-- Chapitre 3 -->
          <section id="chapitre3">
            <h2>Chapitre 3 : Le chiffrement par transposition</h2>
            <p>Le chiffrement par transposition est une autre technique de chiffrement qui consiste à permuter les lettres du message. Nous allons l'étudier en détail dans ce chapitre.</p>
          </section>

          <!-- Chapitre 4 -->
          <section id="chapitre4">
            <h2>Chapitre 4 : Les chiffrements modernes</h2>
            <p>Les chiffrements modernes utilisent des algorithmes plus complexes pour garantir une sécurité maximale. Nous allons étudier les principaux d'entre eux dans ce chapitre.</p>
          </section>
</main>

<?php
include_once __DIR__ . '/view/footer.php';
?>