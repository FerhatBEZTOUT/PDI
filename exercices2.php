<?php
include_once __DIR__ . '/view/header.php';
?>


<nav class="chapter-nav">
  <ul>
    <li><a href="#titre-qcm-container">QCM</a></li>
    <li><a href="#titre-cesar-container">Chiffrement de César</a></li>
    <li><a href="#titre-vigenere-container">Chiffrement de Vigénere</a></li>
    <li><a href="#titre-affine-container">Chiffrement d'Affine</a></li>
    <li><a href="#titre-playfair-container">Chiffrement de Playfair</a></li>
    <li><a href="#titre-test1-container">Test 1</a></li>
    <li><a href="#titre-test2-container">Test 2</a></li>
    <li><a href="#titre-test3-container">Test 3</a></li>
  </ul>
</nav>

<div class="container my-5">
  
  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-qcm-container" class="text-center text-light">QCM</h2>
          <div id="qcm-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-cesar-container" class="text-center text-light">Chiffrement de César</h2>
          <div id="cesar-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-vigenere-container" class="text-center text-light">Chiffrement de Vigenere</h2>
          <div id="vigenere-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-affine-container" class="text-center text-light">Chiffrement d'Affine</h2>
          <div id="affine-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-playfair-container" class="text-center text-light">Chiffrement de Playfair</h2>
          <div id="playfair-container"></div>
        </div>
      </div>
    </div>
  </div>


  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-test1-container" class="text-center text-light">Test 1</h2>
          <div id="test1-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-test2-container" class="text-center text-light">Test 2</h2>
          <div id="test2-container"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center mb-2">
    <div class="col-lg-8">
      <div class="card">
        <div class="card-body bg-dark rounded">
            <h2 id="titre-test3-container" class="text-center text-light">Test 3</h2>
          <div id="test3-container"></div>
        </div>
      </div>
    </div>
  </div>

 

</div>


<script src="./JS/exercices.js"></script>

<?php
include_once __DIR__ . '/view/footer.php';
?>