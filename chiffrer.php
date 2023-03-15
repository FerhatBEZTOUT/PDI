<?php 
    include_once __DIR__.'/view/header.php';
?>

<div class="container row mt-3 ms-3 d-flex align-items-center justify-content-center">
    <div class="row col-12 col-md-6 ">
        <select class="form-control mb-2" name="" id="chiffrement">
                <option value="0" selected>Séléctionner un chiffrement</option>
                <option value="cesar" >César</option>
                <option value="scytale">Scytale</option>
                <option value="vigenere">Vigénere</option>
                <option value="afine">Afine</option>
                <option value="playfair">Playfair</option>
                <option value="hill">Hill</option>
        </select>
    </div>
    <div></div>
    <div id="cle" class="row col-12 col-md-6 mb-3" id="options-cesar">
        
            
        
    </div>
    <div></div>

    <!-- Boutton chiffrement -->
    <div class="row col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center" >
        <input type="button" class="btn btn-primary col-12 col-md-6" value="Chiffrer" id="btn-chiffrer">
    </div>

    <!-- Boutton dechiffrement -->
    <div class="row col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center" >
        <input type="button" class="btn btn-danger col-12 col-md-6" value="Déchiffrer" id="btn-dechiffrer">
    </div>

    
    <div class="row">
        <!-- Zone de texte à chiffrer -->
        <div class="container col-12 col-md-6 mb-3">
            <h6 class="text-center">Texte en clair</h6>
            <textarea class="form-control" name="txt-chiffrement" id="txt-chiffrement" cols="30" rows="10"></textarea>
        </div>
        <!-- Zone de texte à déchiffrer -->
        <div class="container col-12 col-md-6 mb-3">
            <h6 class="text-center">Texte chiffré</h6>
            <textarea class="form-control" name="txt-dechiffrement" id="txt-dechiffrement" cols="30" rows="10"></textarea>
        </div>
    </div>
    
</div>

<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title fs-5" id="exampleModalToggleLabel"> <!-- titre d'erreur ici avec JS --> </h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Msg d'erreur ici avec JS -->
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>

<?php 
include_once __DIR__.'/view/footer.php';
?>