// ============================================== //
// Communnication avec le service distant
// ============================================== //

const url = "https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/5/produits";

function display(){
    let fetchOptions = { method: "GET"};

   return  fetch(url,fetchOptions).then((response)=>{
        return response.json();
    })
    ;
}
function displayOne(id){
    let fetchOptions = { method: "GET"};

   return  fetch(url+"/"+id,fetchOptions).then((response)=>{
        return response.json();
    })
    ;
}

function addProduct(nom,qte){
    let prod = new Produit(nom,qte);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(prod)
    }

    return fetch(url,fetchOptions).then((response)=>{
        return response.json();
    });
}
function addProductForFriend(idUser,prod){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(prod)
    }

    return fetch("https://webmmi.iut-tlse3.fr/~jean-marie.pecatte/frigo/public/"+idUser+"/produits",fetchOptions).then((response)=>{
        return response.json();
    });
}
function deleteProduct(productId){
    let fetchOptions = { method: "DELETE"};

    return fetch(url+"/"+productId,fetchOptions).then((response)=>{
        return response.json();
    })
}
function modifyQuantity(product){
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let fetchOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(product)
    }

   return fetch(url,fetchOptions).then((response)=>{
        return response.json();
    });

}
function search(productName){
    let fetchOptions = { method: "GET"};

    return fetch(url+"?search="+productName,fetchOptions).then((response)=>{
        return response.json();
    });
}