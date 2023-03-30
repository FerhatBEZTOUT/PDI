$(document).ready(function () {
// Fonction pour vérifier la réponse de l'exercice 1
function verifierReponse1(event) {
    event.preventDefault();
    var reponse = document.getElementById("reponse1").value.toUpperCase();
    if (reponse === "FHF HVW XQ PHVVDJH À ELIIHU") {
      alert("Bonne réponse !");
    } else {
      alert("Mauvaise réponse. Réessayez !");
    }
  }
  
  // Fonction pour afficher l'indice de l'exercice 1
  function afficherIndice1() {
    var indice = document.getElementById("indice1");
    if (indice.style.display === "none") {
      indice.style.display = "block";
    } else {
      indice.style.display = "none";
    }
  }
  
  // Fonction pour vérifier la réponse de l'exercice 2
  function verifierReponse2(event) {
    event.preventDefault();
    var reponse = document.getElementById("reponse2").value.toUpperCase();
    if (reponse === "CETTE PHRASE EST CHIFFREE AVEC CESAR") {
      alert("Bonne réponse !");
    } else {
      alert("Mauvaise réponse. Réessayez !");
    }
  }
  
  // Fonction pour afficher l'indice de l'exercice 2
  function afficherIndice2() {
    var indice = document.getElementById("indice2");
    if (indice.style.display === "none") {
      indice.style.display = "block";
    } else {
      indice.style.display = "none";
    }
  }
  
  // Fonction pour vérifier la réponse de l'exercice 3
  function verifierReponse3(event) {
    event.preventDefault();
    var reponse = document.getElementById("reponse3").value.toUpperCase();
    if (reponse === "WELCOME TO CRYPTOGRAPHY") {
      alert("Bonne réponse !");
    } else {
      alert("Mauvaise réponse. Réessayez !");
    }
  }
  
  // Fonction pour afficher l'indice de l'exercice 3
  function afficherIndice3() {
    var indice = document.getElementById("indice3");
    if (indice.style.display === "none") {
      indice.style.display = "block";
    } else {
      indice.style.display = "none";
    }
  }
});