let products = [];

document.getElementById("envoyerAct").addEventListener("click",envoyerProduit);
document.getElementById("prod").addEventListener("input", qteMax);

// ============ Controle de l'affichage du formulaire de partage ============ //
function displayPageDons() {
    document.getElementById("page-add").style.removeProperty("display");
    if (booladd){
        document.getElementById("formAdd").style.display = "none";
        booladd = false;
    }
    if (booldons){
        document.getElementById("formDons").style.display = "none";
        booldons = false;
    }else{
        booldons = true;
        upDateFormDon();
    }
}

// ============ Mettre à jour le formulaire de partage de produit ============ //
function upDateFormDon(){
    if(booldons){
        // efface les produits du formulaire
        let select = document.getElementById("prod");
        let length = select.options.length;
        for (let i = length; i >= 0; i--) { select.options[i]= null; }
        // remplir formulaire
        replirFormPartage();
    }
}
// ============ Recupération de la liste des élèves ============ //
function listeEleve(){
    let fetchOptions = { method: "GET"};

    return fetch("data/PromoFIE3.json",fetchOptions).then((response)=>{
        return response.json();
    });
}

// ============ Afficher la liste des élèves et des produits  ============ //
function replirFormPartage(){
    document.getElementById("formDons").style.removeProperty( "display");
    listeEleve().then((data)=>{
        for (let e of data){
            let elmtOpt = document.createElement("option");
            elmtOpt.setAttribute("id",e.ID);
            elmtOpt.innerText = e.NOM + " "+e.PRENOM;
            document.getElementById("nom1").append(elmtOpt);
        }
    })
    display().then((data)=>{
        products = [];
        for (let p of data){
            let elmtOpt = document.createElement("option");
            elmtOpt.setAttribute("id","don"+p.id)
            elmtOpt.innerText = p.nom ;
            document.getElementById("prod").append(elmtOpt);
            products.push(new Product(p.id,p.nom,p.qte));
        }
        qteMax();
    })
}

// ============ Modifie la quantité max selon les disponnibilité du produit ============ //
function qteMax(){
    let str = document.getElementById("prod").options[document.getElementById("prod").selectedIndex].id;
    let idprod = str.split("don")[1];
    document.getElementById("qte1").value = 1;
    for (let i = 0; i<products.length ; i++){
        if (products[i].id == idprod){
            document.getElementById("qte1").setAttribute("max",products[i].qte);
        }
    }
}
// ============ Envoyer un produit à un ami ============ //
function envoyerProduit(){
    let prod = document.getElementById("prod").options[document.getElementById("prod").selectedIndex];
    let idprod = prod.id.split("don")[1];
    let nom = prod.value;
    let qte = document.getElementById("qte1").value;
    let qtemax = document.getElementById("qte1").max;
    let user = document.getElementById("nom1").options[document.getElementById("nom1").selectedIndex];
    let iduser = user.id;
    let nomuser = user.value;

    if (qtemax===qte){
        if(confirmerSuppression()){
            // supprimer le produit du frigo
            deleteProduct(idprod).then((data)=>{
                if ( data.status == 1){
                    // envoyer le produit à user
                    addProductForFriend(iduser,new Produit(nom,qte)).then((data)=>{
                        if (data.status = 1){
                            // mettre à jours la liste de produit si elle est affichée
                            if (boolproducts){
                                displayProducts();
                            }
                            addNotification("succes",nomuser+" à bien reçu votre cadeau","formAdd");
                            upDateFormDon();
                        }else {
                            addNotification("error","une erreur est survenue",null);
                        }
                    });
                }
            })
        }
    }
    if (qte<qtemax){
        let p = new Product(idprod,nom,(qtemax-qte));
        // modifier la quantité du produit dans le frigo
        modifyQuantity(p).then((data)=>{
            if(data.status == 1){
                // envoyer le produit à user
                addProductForFriend(iduser,new Produit(nom,qte)).then((data)=>{
                    if (data.status = 1){
                        // mettre à jours la liste de produit si elle est affichée
                        if (boolproducts){
                            displayProducts();
                        }
                        addNotification("succes",nomuser+" à bien reçu votre cadeau","formAdd");
                        upDateFormDon();
                    }else {
                        addNotification("error","une erreur est survenue",null);
                    }
                });
            }
            else {
                addNotification("error","une erreur est survenue modification",null);
            }
        });
    }else{
        addNotification("error","Vous n'avez pas assez de provision.",null);
    }
}