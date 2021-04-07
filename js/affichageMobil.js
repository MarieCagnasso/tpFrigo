// ============================================== //
// Controle du menu mobile et son affichage
// ============================================== //

// ============ Afficher la liste des produits du frigo ============ //
document.getElementById("afficherMobil").addEventListener("click",function () {
    boolproducts = false;
    booldons = false;
    booladd = false;
    document.getElementById("formDons").style.display = "none";
    document.getElementById("formAdd").style.display = "none";
    displayPageProducts();
    document.getElementById("menuToggle").checked = false;
})

// ============ Afficher le formulaire d'ajout de produit ============ //
document.getElementById("acheterMobil").addEventListener("click",function () {
    boolproducts = false;
    booldons = false;
    booladd = true;
    document.getElementById("formDons").style.display = "none";
    document.getElementById("page-show").style.display = "none";
    document.getElementById("formAdd").style.removeProperty("display");
    document.getElementById("menuToggle").checked = false;
})

// ============ Afficher le formulaire pour envoyer un produit à un ami ============ //
document.getElementById("donMobil").addEventListener("click",function () {
    boolproducts = false;
    booldons = true;
    booladd = false;
    document.getElementById("formAdd").style.display = "none";
    document.getElementById("page-show").style.display = "none";
    replirFormPartage();
    document.getElementById("menuToggle").checked = false;
})

