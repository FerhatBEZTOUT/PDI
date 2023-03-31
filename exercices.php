<?php 
    include_once __DIR__.'/view/header.php';
?>
<script src="JS/exercices.js"></script>
<main>
<h1>Exercice sur le chiffrement de césar : </h1>
    <section>
      <h2> Exercice 1 </h2>
      <form id="quiz" name="quiz">
	      	<p>Quel est le principe du chiffrement de César ?</p>
		      <label><input type="radio" name="e1" value="a"> Additionner une clé secrète à chaque lettre du message</label><br>
		      <label><input type="radio" name="e1" value="b"> Remplacer chaque lettre du message par la lettre suivante dans l'alphabet</label><br>
		      <label><input type="radio" name="e1" value="c"> Remplacer chaque lettre du message par la lettre située trois places plus loin dans l'alphabet</label><br>
		      <label><input type="radio" name="e1" value="d"> Additionner une clé publique à chaque lettre du message</label><br>
	      	<button type="button" onclick="verif()">Valider</button>
		<p id="result"></p>
	</form>
    <section>
      <h2>Exercice 2</h2>
      <p>Chiffrez le message suivant en utilisant le chiffrement de César avec un décalage de 3 :</p>
      <p>CECI EST UN MESSAGE À CHIFFRER</p>
      <form onsubmit="verifierReponse1(event)">
        <label for="reponse1">Réponse :</label>
        <input type="text" id="reponse1" name="reponse1">
        <button type="submit">Soumettre</button>
        <button type="button" onclick="afficherIndice1()">Indice</button>
        <p id="indice1" style="display: none;">Le chiffrement de César utilise un décalage fixe pour chiffrer les lettres d'un message.</p>
      </form>
    </section>
    <section>
      <h2>Exercice 2</h2>
      <p>Le message suivant a été chiffré avec le chiffrement de César avec un décalage de 5. Déchiffrez-le :</p>
      <p>HNQF XYJQFYJW HTRUZYJWJW XTZSIJW RFX ZSYJ GJQQJW. </p>
      <form onsubmit="verifierReponse2(event)">
        <label for="reponse2">Réponse :</label>
        <input type="text" id="reponse2" name="reponse2">
        <button type="submit">Soumettre</button>
        <button type="button" onclick="afficherIndice2()">Indice</button>
        <p id="indice2" style="display: none;">Pour déchiffrer un message chiffré avec le chiffrement de César, il suffit de décaler les lettres dans l'autre sens.</p>
      </form>
    </section>
    <section>
      <h2>Exercice 3</h2>
      <p>Le message suivant a été chiffré avec le chiffrement de César avec un décalage inconnu. Déchiffrez-le :</p>
      <p>ZHOFRPH WR JUDYLWB IDOOV.</p>
      <form onsubmit="verifierReponse3(event)">
        <label for="reponse3">Réponse :</label>
        <input type="text" id="reponse3" name="reponse3">
        <button type="submit">Soumettre</button>
        <button type="button" onclick="afficherIndice3()">Indice</button>
        <p id="indice3" style="display: none;">Pour déchiffrer un message chiffré avec le chiffrement de César avec un décalage inconnu, il faut utiliser une technique de recherche par force brute pour tester tous les décalages possibles.</p>
      </form>


</main>


<?php 
include_once __DIR__.'/view/footer.php';
?>