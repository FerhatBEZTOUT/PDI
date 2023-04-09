<?php
include_once __DIR__ . '/view/header.php';
?>


<nav class="chapter-nav">
  <ul>
    <li><a href="#qcm-container">QCM</a></li>
    <li><a href="#exo1-container">Chiffrement de César</a></li>
    <li><a href="#exo2-container">Chiffrement de Vigénere</a></li>
    <li><a href="#exo3-container">Chiffrement d'Affine</a></li>
    <li><a href="#exo4-container">Chiffrement de Playfair</a></li>
    <li><a href="#exo5-container">Test 1</a></li>
    <li><a href="#exo6-container">Test 2</a></li>
  </ul>
</nav>

<div class="container my-5">

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">QCM</h2>
          <div id="qcm-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Chiffrement de César</h2>
          <div id="exo1-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Chiffrement de Vigenere</h2>
          <div id="exo2-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Chiffrement d'Affine</h2>
          <div id="exo3-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Chiffrement de Playfair</h2>
          <div id="exo4-container"></div>
        </div>
      </div>
    </div>
  </div>


  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Test 1</h2>
          <div id="exo5-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 class="text-center text-light">Test 2</h2>
          <div id="exo6-container"></div>
        </div>
      </div>
    </div>
  </div>

 

</div>


<script src="./JS/exercices.js"></script>

<?php
include_once __DIR__ . '/view/footer.php';
?>