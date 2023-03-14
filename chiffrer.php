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
    <div class="row col-12 col-md-6 mb-3" id="options-cesar">
        <label for="cle-cesar">Clé</label>
        <input id="cle-cesar" type="number" class="form-control" max="25" min="0">
        
    </div>
    <div></div>
    <div class="row col-12 col-md-6 mb-3 d-flex align-items-center justify-content-center" >
        
        <input type="button" class="btn btn-primary col-12 col-md-6" value="Chiffrer" id="btn-chiffrer">
    </div>
    <div class="row">
        <div class="container col-12 col-md-6 mb-3">
            <h6 class="text-center">Texte chiffré</h6>
            <textarea class="form-control" name="txt-chiffrement" id="txt-chiffrement" cols="30" rows="10"></textarea>
        </div>
        <div class="container col-12 col-md-6 mb-3">
            <h6 class="text-center">Texte en clair</h6>
            <textarea class="form-control" name="txt-result" id="txt-result" cols="30" rows="10"></textarea>
        </div>
    </div>
    
</div>



<?php 
include_once __DIR__.'/view/footer.php';
?>