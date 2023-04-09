$(document).ready(function () {
  // Start of script



  function checkAnswers() {
    var q1 = document.forms["quiz"]["q1"].value;
    var result = document.getElementById("result");
    if (e1 == "c") {
      result.innerHTML = "Bonne réponse !";
      result.style.color = "green";
    } else {
      result.innerHTML = "Mauvaise réponse, réessayez.";
      result.style.color = "red";
    }
  }


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


  fetch('./data/qcm.json')
  .then(response => response.json())
  .then(data => {
    const qcmContainer = document.getElementById('qcm-container');
    const questions = data.questions;
    
    // Mélanger les questions dans un ordre aléatoire
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premières questions dans le tableau mélangé
    const selectedQuestions = shuffledQuestions.slice(0, 5);

    let html = '';

    selectedQuestions.forEach((question, index) => {
      html += `<div class="border border-dark border-2 my-3 p-2 rounded-1 shadow bg-body-tertiary">`
      html += `<div class="question">${question.question}</div>`;
      question.options.forEach((option, optionIndex) => {
        html += `
          <div>
            <input class="" type="radio" id="question-${index}-option-${optionIndex}" name="question-${index}" value="${optionIndex}">
            <label for="question-${index}-option-${optionIndex}">${option}</label>
          </div>
        `;
      });

      html += `
        <button class="btn btn-primary" id="check-answer-${index}">Vérifier la réponse</button>
        <div  id="answer-result-${index}"></div>
        </div>
      `;
    });

    qcmContainer.innerHTML = html;

    selectedQuestions.forEach((question, index) => {
      const checkButton = document.getElementById(`check-answer-${index}`);
      const answerResult = document.getElementById(`answer-result-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedOptionIndex = document.querySelector(`input[name="question-${index}"]:checked`).value;
        const correctOptionIndex = question.answer;

        if (selectedOptionIndex == correctOptionIndex) {
          answerResult.innerHTML = "Bonne réponse !";
          
        } else {
          answerResult.innerHTML = "Mauvaise réponse. Réessayez.";
        }
      });
    });
  })
  .catch(error => console.error(error));

  // Test 
  


  // End of script
});