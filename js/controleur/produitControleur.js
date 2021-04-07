// ============ Controle de l'affichage de la page produits ============ //
function displayPageProducts() {
    if(boolproducts){
        document.getElementById("page-show").style.display = "none";
        document.getElementById("produits").innerHTML = "";
        boolproducts = false;
    }else {
        document.getElementById("page-show").style.removeProperty("display");
        displayProducts()
    }
}

// ============ Controle de l'affichage de la page ajout produits ============ //
function displayPageAddProducts() {
    document.getElementById("page-add").style.removeProperty("display");
    if (booldons) {
        document.getElementById("formDons").style.display = "none";
        booldons = !booldons;
    }
    if (booladd){
        document.getElementById("formAdd").style.display = "none";
        booladd = !booladd;
    }else{
        document.getElementById("formAdd").style.removeProperty("display");
        booladd = !booladd
    }
}

// ============ Afficher le liste de produits ============ //
function displayProducts(){
        display().then((dataJson)=> {
            if (boolproducts){document.getElementById("produits").innerHTML = "";}
            for(let d of dataJson){
                createLigneProduit(d);
            }
        });
        boolproducts = true;
}
// ============ Ajoute une ligne à la liste de produits ============ //
function createLigneProduit(produit){
    let elmt = document.createElement("tr");
    let elmtNom = document.createElement("td");
    let elmtQte = document.createElement("td");
    let elmtTrash = document.createElement("td");
    let elmtCursor = document.createElement("input");
    elmtCursor.setAttribute("type","number");
    elmtCursor.setAttribute("min","0");
    elmtCursor.setAttribute("onchange" ,"setProduct("+produit.id+")");
    elmtCursor.setAttribute("id" ,produit.id);
    elmtCursor.setAttribute("value", produit.qte);
    elmtNom.textContent = produit.nom;
    if (darTtheme){
        elmtTrash.innerHTML = "<img class='trashProduct' onclick='trashProduct("+produit.id+")' src='images/trashW.svg'/>";
    } else     {
        elmtTrash.innerHTML = "<img class='trashProduct' onclick='trashProduct("+produit.id+")' src='images/trash.svg'/>";
    }
    elmtQte.appendChild(elmtCursor);
    elmt.appendChild(elmtNom);
    elmt.appendChild(elmtQte);
    elmt.appendChild(elmtTrash);
    document.getElementById("produits").appendChild(elmt);
}

// ============ ajouter un produit ============ //
document.getElementById("addAct").addEventListener("click",function () {
    let nom = document.getElementById("formAdd").nom.value;
    let qte = document.getElementById("formAdd").qte.value
    document.getElementById( "frigo").style.removeProperty('animation');

    if ( nom && qte && qte>0){
        addProduct(nom,qte).then((dataJSON) => {
            if (dataJSON.status = 1){
                addNotification("succes","Achat effectué avec succés","formAdd");
                document.getElementById("panier").style.background = "url(\"images/cesta-vacia.svg\") no-repeat";
                document.getElementById("panier").style.width = "60px";
                document.getElementById("panier").style.height = "60px";
                // mettre à jours la liste de produit si elle est affichée
                if (boolproducts){
                    displayProducts();
                }
                document.getElementById( "frigo").style.animation = "animationNewProduct 0.3s";

            }else{
                addNotification("error","Oupss une erreur est survenue",null);
            }
        });
    }else {
        addNotification("medium","Il manque quelque chose",null);
    }
})

// ============ Rechercher un produit ============ //
document.getElementById("regerche").addEventListener("input",(e)=>{
   let val =  e.target.value;

    if (val == ''){
        displayProducts();
    }else{
        document.getElementById("produits").innerHTML = "";
        search(val).then((data)=>{
            console.log("resultat", data);
            for(let p of data){
                createLigneProduit(p)
            }
        })
    }
})

// ============ Supprimer un produit ============ //
function trashProduct(id){
    if (confirmerSuppression()){
        deleteProduct(id).then((data)=>{
            if (data.status == 1){
                displayProducts();
                upDateFormDon();
            }
        })
    }else{
        if (document.getElementById(id).value == 0){
            document.getElementById(id).value=1;
        }
    }
}

// ============ Modifie la quantité d'un produit ============ //
function setProduct(id) {
    let qte = document.getElementById(id).value;
    if (qte == 0){
        trashProduct(id)
    }else{
        displayOne(id).then((data) =>{
            let p = new Product(data.id,data.nom,qte);
            modifyQuantity(p).then((data)=>{
                console.log(data,data.status);
                if (data.status ===1){
                    upDateFormDon();
                }
            });
        })
    }
}

// ============ Modifie la quantité d'un produit ============ //
function confirmerSuppression(){
    return  confirm("Attention le produit va être supprimé de votre frigo.");
}