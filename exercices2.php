<?php
include_once __DIR__ . '/view/header.php';
?>


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
            <h2 class="text-center text-light">Exercice 1</h2>
          <div id="exo1-container"></div>
        </div>
      </div>
    </div>
  </div>
</div>


<script src="./JS/exercices.js"></script>

<?php
include_once __DIR__ . '/view/footer.php';
?>