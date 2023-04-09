<?php
include_once __DIR__ . '/view/header.php';
?>

<div class="container">
    <h1 class="text-center">Bienvenue sur Enigma</h1>
    <h5 class="text-center">Chiffrer, déchiffrer et décrypter vos messages</h5>
</div>
<div class="container">
    <div class="row justify-content-evenly align-items-stretch my-3">
        <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
            <img src="./IMG/chiffrement-logo.webp" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Chiffrement & Déchiffrement</h5>
                <p class="card-text">Découvrez comment chiffrer et déchiffrer des messages en utilisant différentes techniques.</p>
                <a href="./chiffrer.php" class="btn btn-primary align-self-end">Chiffrer/Déchiffrer</a>
            </div>
        </div>


        <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
            <img src="./IMG/cryptanalyse.gif" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Décryptage</h5>
                <p class="card-text">Apprenez à décrypter des messages cryptés en utilisant différentes méthodes d'analyse cryptographique.</p>
                <a href="./decrypter.php" class="btn btn-primary align-self-end">Décrypter</a>
            </div>
        </div>


        <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
            <img src="./IMG/cours.jpg" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Cours</h5>
                <p class="card-text">Accédez à nos cours complets pour apprendre les bases de la cryptographie et ses applications.</p>
                <a href="./cours.php" class="btn btn-primary align-self-end">Consulter</a>
            </div>
        </div>



        <div class="card col-12 col-md-4 mb-2" style="width: 18rem;">
            <img src="./IMG/exercice.png" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">Exercices</h5>
                <p class="card-text">Entraînez-vous à chiffrer, déchiffrer et décrypter des messages cryptés en résolvant nos exercices interactifs.</p>
                <a href="./exercices2.php" class="btn btn-primary align-self-end">S'exercer</a>
            </div>
        </div>
    </div>

</div>

<?php
include_once __DIR__ . '/view/footer.php';
?>