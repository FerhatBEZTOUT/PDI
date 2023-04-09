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
      html += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${question.question}</h5>
            <form>
              ${question.options.map((option, optionIndex) => `
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="question-${index}-option-${optionIndex}" name="question-${index}" value="${optionIndex}">
                  <label class="form-check-label" for="question-${index}-option-${optionIndex}">${option}</label>
                </div>
              `).join('')}
            </form>
            <button class="btn btn-primary mt-3" id="check-answer-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-${index}"></div>
          </div>
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
          answerResult.classList.remove("text-danger");
          answerResult.classList.add("text-success");
          
          
        } else {
          answerResult.innerHTML = "Mauvaise réponse. Réessayez.";
          answerResult.classList.remove("text-success");
          answerResult.classList.add("text-danger");
        }
      });
    });
  })
  .catch(error => console.error(error));



  // End of script
});