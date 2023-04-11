$(document).ready(function () {
  // Start of script

  //test
  // QCM
  fetch('./data/qcm.json')
  .then(response => response.json())
  .then(data => {
    const qcmContainer = document.getElementById('qcm-container');
    const questions = data.questions;
    
    // Mélanger les questions dans un ordre aléatoire
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // Sélectionner les 8 premières questions dans le tableau mélangé
    const selectedQuestions = shuffledQuestions.slice(0, 8);

    let html = '';

    selectedQuestions.forEach((question, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${question.question}</h5>
            <form>
              ${question.options.map((option, optionIndex) => `
                <div class="form-check">
                  <input class="form-check-input" type="radio" id="question-qcm-${index}-option-${optionIndex}" name="question-qcm-${index}" value="${optionIndex}">
                  <label class="form-check-label" for="question-qcm-${index}-option-${optionIndex}">${option}</label>
                </div>
              `).join('')}
            </form>
            <button class="btn btn-primary mt-3" id="check-answer-qcm-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-qcm-${index}"></div>
          </div>
        </div>
      `;
    });

    qcmContainer.innerHTML = html;

    selectedQuestions.forEach((question, index) => {
      const checkButton = document.getElementById(`check-answer-qcm-${index}`);
      const answerResult = document.getElementById(`answer-result-qcm-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedOptionIndex = document.querySelector(`input[name="question-qcm-${index}"]:checked`).value;
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


  //Chiffrement de César
  fetch('./data/exo3.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo1-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">

            <h5 class="card-title"><b>${chiffrement.type}</b> en utilisant l'algorithme de César ce message : </h5>
            <p class="card-text">${chiffrement.texte}</p>
            <p class="card-text">Clé : ${chiffrement.cle}</p>
            <div class="form-group">
              <label for="answer-exo1-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo1-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo1-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-exo1-${index}"></div>
            <div class="mt-2" id="answer-exo1-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo3-${index}`);
      const answerResult = document.getElementById(`answer-result-exo3-${index}`);
      const answerInput = document.getElementById(`answer-exo3-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase().replace(/[^A-Z]/g, "");
        const correctAnswer = chiffrement.answer.toUpperCase().replace(/[^A-Z]/g, "");

        if (selectedAnswer === correctAnswer) {
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

  // Chiffrement de Vigenere
  fetch('./data/exo4.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo2-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">

            <h5 class="card-title"><b>${chiffrement.type}</b> en utilisant l'algorithme de Vigenere ce message : </h5>
            <p class="card-text">${chiffrement.texte}</p>
            <p class="card-text">Clé : ${chiffrement.cle}</p>
            <div class="form-group">
              <label for="answer-exo2-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo2-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo2-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-exo2-${index}"></div>
            <div class="mt-2" id="answer-exo2-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo4-${index}`);
      const answerResult = document.getElementById(`answer-result-exo4-${index}`);
      const answerInput = document.getElementById(`answer-exo4-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase().replace(/[^A-Z]/g, "");
        const correctAnswer = chiffrement.answer.toUpperCase().replace(/[^A-Z]/g, "");

        if (selectedAnswer === correctAnswer) {
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


  // Chiffrement d'Affine
  fetch('./data/exo5.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo3-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">

            <h5 class="card-title"><b>${chiffrement.type}</b> en utilisant l'algorithme d'Affine ce message : </h5>
            <p class="card-text">${chiffrement.texte}</p>
            <p class="card-text">Clé : ${chiffrement.cle}</p>
            <div class="form-group">
              <label for="answer-exo3-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo3-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo3-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-exo3-${index}"></div>
            <div class="mt-2" id="answer-exo3-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo4-${index}`);
      const answerResult = document.getElementById(`answer-result-exo4-${index}`);
      const answerInput = document.getElementById(`answer-exo4-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase().replace(/[^A-Z]/g, "");
        const correctAnswer = chiffrement.answer.toUpperCase().replace(/[^A-Z]/g, "");

        if (selectedAnswer === correctAnswer) {
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


  //Chiffrement de Playfair
  // Chiffrement d'Affine
  fetch('./data/exo6.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo4-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">

            <h5 class="card-title"><b>${chiffrement.type}</b> en utilisant l'algorithme de Playfair ce message : </h5>
            <p class="card-text">${chiffrement.texte}</p>
            <p class="card-text">Clé : ${chiffrement.cle}</p>
            <div class="form-group">
              <label for="answer-exo4-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo4-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo4-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-exo4-${index}"></div>
            <div class="mt-2" id="answer-exo4-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo4-${index}`);
      const answerResult = document.getElementById(`answer-result-exo4-${index}`);
      const answerInput = document.getElementById(`answer-exo4-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase().replace(/[^A-Z]/g, "");
        const correctAnswer = chiffrement.answer.toUpperCase().replace(/[^A-Z]/g, "");

        if (selectedAnswer === correctAnswer) {
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


  // TEST 1
  fetch('./data/exo1.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo5-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Trouvez la clé de ce message chiffré avec <b>${chiffrement.type}</b>!</h5>
            <h6 class="card-text text-center"><strong>Texte en clair</strong></h6>
            <div class="card bg-warning bg-opacity-50 mb-3">
              <div class="card-body rounded">${chiffrement.texte_clair}</div>
            </div>
            <h6 class="card-text text-center"><strong>Texte chiffré</strong></h6>
            <div class="card bg-warning bg-opacity-50 mb-3">
              <div class="card-body rounded">${chiffrement.texte_chiffre}</div>
            </div>
            <div class="form-group">
              <label for="answer-exo5-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo5-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo5-${index}">Vérifier la réponse</button>
            <button class="btn btn-secondary mt-3" id="show-answer-exo5-${index}">Voir la réponse</button>
            <div class="mt-2" id="answer-result-exo5-${index}"></div>
            <div class="mt-2" id="spoiled-answer-exo5-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo1-${index}`);
      const showAnswerButton = document.getElementById(`show-answer-exo1-${index}`);
      const answerResult = document.getElementById(`answer-result-exo1-${index}`);
      const answerInput = document.getElementById(`answer-exo1-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase();
        const correctAnswer = chiffrement.answer.toUpperCase();

        if (selectedAnswer === correctAnswer) {
          answerResult.innerHTML = "Bonne réponse !";
          answerResult.classList.remove("text-danger");
          answerResult.classList.add("text-success");
        } else {
          answerResult.innerHTML = "Mauvaise réponse. Réessayez.";
          answerResult.classList.remove("text-success");
          answerResult.classList.add("text-danger");
        }
      });

      showAnswerButton.addEventListener('click', () => {
        const answer = document.getElementById(`spoiled-answer-exo1-${index}`);
        showAnswerButton.style.display = 'none';
        answer.style.display = 'block';
      });
    });
  })
  .catch(error => console.error(error));

 
  
  // TEST 2
  fetch('./data/exo2.json')
  .then(response => response.json())
  .then(data => {
    const chiffrementsContainer = document.getElementById('exo6-container');
    const chiffrements = data.chiffrements;

    // Mélanger les chiffrements dans un ordre aléatoire
    const shuffledChiffrements = chiffrements.sort(() => Math.random() - 0.5);

    // Sélectionner les 5 premiers chiffrements dans le tableau mélangé
    const selectedChiffrements = shuffledChiffrements.slice(0, 5);

    let html = '';

    selectedChiffrements.forEach((chiffrement, index) => {
      html += `
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Déchiffrez ce message !</h5>
            <h6 class="card-text text-center"><strong>Texte en clair</strong></h6>
            <div class="card bg-warning bg-opacity-50 mb-3">
              <div class="card-body rounded">${chiffrement.texte_clair}</div>
            </div>
            <p class="card-text">Clé : <strong>${chiffrement.cle}</strong></p>
            <div class="form-group">
              <label for="answer-exo6-${index}">Réponse:</label>
              <input type="text" class="form-control" id="answer-exo6-${index}">
            </div>
            <button class="btn btn-primary mt-3" id="check-answer-exo6-${index}">Vérifier la réponse</button>
            <div class="mt-2" id="answer-result-exo6-${index}"></div>
            <div class="mt-2" id="answer-exo6-${index}" style="display:none">${chiffrement.answer}</div>
          </div>
        </div>
      `;
    });

    chiffrementsContainer.innerHTML = html;

    selectedChiffrements.forEach((chiffrement, index) => {
      const checkButton = document.getElementById(`check-answer-exo2-${index}`);
      const answerResult = document.getElementById(`answer-result-exo2-${index}`);
      const answerInput = document.getElementById(`answer-exo2-${index}`);

      checkButton.addEventListener('click', () => {
        const selectedAnswer = answerInput.value.toUpperCase().replace(/[^A-Z]/g, "");
        const correctAnswer = chiffrement.answer.toUpperCase().replace(/[^A-Z]/g, "");

        if (selectedAnswer === correctAnswer) {
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