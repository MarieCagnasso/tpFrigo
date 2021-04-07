const type = ["error","succes","medium"];

// ============ Afficher la bulle de notification ============ //
function addNotification (type,msg,form){
    for (let x of ["error","succes","medium"]){
        document.querySelector(".notification").classList.remove(x);
    }
    document.querySelector(".notification").style.animation = "notify 3s ease-in-out";
    document.querySelector(".notification").classList.add(type)
    document.querySelector(".content").innerHTML = msg;
    if(form != null){
        document.getElementById(form).reset();
    }
}

// ============ Fermer la bulle de notification ============ //
document.querySelector(".notification").addEventListener("click",()=>{
    document.querySelector(".notification").style.removeProperty("animation");
    document.querySelector(".notification").style.animation = "notifyClose 0.5s ease-in-out 0s 1 normal forwards";
})