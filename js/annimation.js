//  ============ INDICATEURS ETAT  ============ //
var boolproducts = false;
var booladd = false;
var booldons = false;
let darTtheme = false;

//Element frigo svg
let a = document.getElementById("frigosvg");

// ================================================ //
// Controlle les intéractions avec le svg frigo
// et gestion de l'affichage des différents éléments de la page (ajout/supression ...)
// ================================================ //

document.getElementById("page-show").style.display = "none";
document.getElementById("formAdd").style.display = "none";
document.getElementById("formDons").style.display = "none";

// Get the SVG document inside the Object tag
a.addEventListener("load",function() {

    // get the inner DOM of refrigirator.svg
    let svgDoc = a.contentDocument;
    // get the inner element by id
    let top_close = svgDoc.getElementById("top");
    let top_open = svgDoc.getElementById("top_open");
    let bottom_close = svgDoc.getElementById("bottom");
    let bottom_open = svgDoc.getElementById("bottom_open");
    let top_inside = svgDoc.getElementById("top_inside");
    let bottom_inside_open = svgDoc.getElementById("bottom_inside_open");
    let bottom_inside_acheter = svgDoc.getElementById("bottom_inside_acheter");
    let bottom_inside_partage = svgDoc.getElementById("Bottom_inside_partage");

    // Masquer les portes du frigo ouvertes
    top_open.style.display = "none";
    bottom_open.style.display = "none";

    // ============ Ouvrir la porte du haut ============ //
    top_close.addEventListener("click", () => {
        top_open.style.removeProperty("display");
        top_close.style.display = "none";
    })

    // ============ Fermer la porte du haut ============ //
    top_open.addEventListener("click", function () {
        top_close.style.removeProperty("display");
        top_open.style.display = "none";
        if (boolproducts){
            displayPageProducts();
        }
    })
    // ============ Ouvrir la porte du bas ============ //
    bottom_close.addEventListener("click", function () {
        bottom_open.style.removeProperty("display");
        bottom_close.style.display = "none";
    })

    // ============ Fermer la porte du bas ============ //
    bottom_open.addEventListener("click", function () {
        bottom_close.style.removeProperty("display");
        bottom_open.style.display = "none";
        if(boolproducts){displayPageProducts();}
        if (booladd){
            document.getElementById("formAdd").style.display = "none";
            booladd = !booladd;
        }
        if(booldons){
            booldons = !booldons
            document.getElementById("formDons").style.display = "none";
        }
    })

    // ============ Afficher la liste des produits ============ //
    top_inside.addEventListener("click", displayPageProducts);
    bottom_inside_open.addEventListener("click", displayPageProducts);

    // ============ Afficher formulaire ajout ============ //
    bottom_inside_acheter.addEventListener("click", displayPageAddProducts);

    // ============ Afficer formulaire partage de nouriture ============ //
    bottom_inside_partage.addEventListener("click",displayPageDons);
})

// ============ Annimation pannier de course grossissement proportionnel ============ //
document.getElementById("qte").addEventListener("change", (e,)=>{
    let qte = document.getElementById("qte").value;
    if (qte >0){
        document.getElementById("panier").style.background = "url(\"images/cesta-llena.svg\") no-repeat";
        document.getElementById("panier").style.width = (60 + qte * 1.5)+"px";
        document.getElementById("panier").style.height = (60 + qte * 1.5)+"px";
    }else{
        document.getElementById("panier").style.background = "url(\"images/cesta-vacia.svg\") no-repeat";
    }
})

// ============ Gestion du thémes sombre ============ //
document.getElementById("lampe").addEventListener("click", (e)=>{
        if (darTtheme){
            document.body.classList.remove("sombre");
            // Ampoule allumé
            e.target.innerHTML = "" +
                "<svg id=\"svg10716\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 162.5 689.5\"><defs><style>.cls-1{fill:#6e6e6e;}.cls-2{fill:url(#Dégradé_sans_nom);}.cls-3{fill:#fd5;}.cls-4{opacity:0.39;}.cls-12,.cls-16,.cls-18,.cls-19,.cls-20,.cls-21,.cls-5{fill:none;}.cls-5{stroke:#6d6868;}.cls-12,.cls-5{stroke-width:0.75px;}.cls-6{fill:#fea;}.cls-6,.cls-7{opacity:0.26;}.cls-17,.cls-6,.cls-7{isolation:isolate;}.cls-7{fill:#f4eed7;}.cls-17,.cls-8{opacity:0.54;}.cls-17,.cls-9{fill:#fff6d5;}.cls-10{fill:url(#Dégradé_sans_nom_2);}.cls-11{fill:url(#Dégradé_sans_nom_3);}.cls-12{stroke:#afafaf;}.cls-13{fill:url(#Dégradé_sans_nom_4);}.cls-14{fill:url(#Dégradé_sans_nom_5);}.cls-15{fill:url(#Dégradé_sans_nom_6);}.cls-16{stroke:#fff;stroke-width:0.5px;}.cls-18{stroke:#000;}.cls-18,.cls-19,.cls-20,.cls-21{stroke-linecap:round;stroke-linejoin:round;}.cls-18,.cls-19,.cls-20{stroke-width:10px;}.cls-19{stroke:#9b0d0d;}.cls-20,.cls-21{stroke:#556b2f;}.cls-21{stroke-width:10px;}</style><radialGradient id=\"Dégradé_sans_nom\" cx=\"81.86\" cy=\"6.11\" r=\"11.44\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.5, 427.61)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#cfcfcf\"/><stop offset=\"1\" stop-color=\"#a8a8a8\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_2\" cx=\"81.23\" cy=\"51.53\" r=\"20.9\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.5, 0.87)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#818181\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_3\" cx=\"80.59\" cy=\"42.33\" r=\"21.21\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.5, 427.61)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.33\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#a1a1a1\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_4\" cx=\"80.59\" cy=\"33.45\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_3\"/><radialGradient id=\"Dégradé_sans_nom_5\" cx=\"80.59\" cy=\"24.56\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_3\"/><radialGradient id=\"Dégradé_sans_nom_6\" cx=\"80.59\" cy=\"15.68\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_3\"/></defs><g id=\"g10519\"><rect id=\"rect10292\" class=\"cls-1\" x=\"71.06\" y=\"426.74\" width=\"19.04\" height=\"6.35\"/><rect id=\"rect10300\" class=\"cls-2\" x=\"64.77\" y=\"430.54\" width=\"31.73\" height=\"6.35\"/><path id=\"path10308\" class=\"cls-3\" d=\"M0,191.16c0,39.54,36.4,71.6,81.3,71.6s81.2-32.06,81.2-71.6c0-15.62-5.8-30-15.4-41.81-1.1-1.6-33.3-47.06-36-66.23-2.8-19.53-2.8-24.74-2.8-24.74L93,57.87l.1-.79-11.8.4-11.8-.4v.79l-15.3.51s0,5.21-2.8,24.74c-2.7,19.18-34.9,64.63-36,66.23C5.8,161.12,0,175.54,0,191.16Z\" transform=\"translate(0 426.74)\"/><g id=\"g10310\" class=\"cls-4\"><line id=\"line10312\" class=\"cls-5\" x1=\"82.54\" y1=\"595.55\" x2=\"87.62\" y2=\"481.32\"/><line id=\"line10314\" class=\"cls-5\" x1=\"78.73\" y1=\"595.55\" x2=\"76.2\" y2=\"481.32\"/></g><path id=\"path10326\" class=\"cls-6\" d=\"M81.3,262.76l.4-3.28-2.1-15.79,2.1-.44c-94.8-18.45-42.3-89.68-42.3-89.68L69.5,57.08,54.2,58.39C61.4,80,24.1,139.61,24.1,139.61-48.2,248.76,81.3,262.76,81.3,262.76Z\" transform=\"translate(0 426.74)\"/><path id=\"path10328\" class=\"cls-6\" d=\"M81.7,259.48l.4,3.28s129.5-14,57.1-123.15c0,0-37.2-59.65-30-81.23l-15.3-1.3L124,153.57s52.4,71.23-42.3,89.68l2.1.44-2.1,15.79Z\" transform=\"translate(0 426.74)\"/><path id=\"path10330\" class=\"cls-6\" d=\"M81.7,259.48l2.1-15.79-2.1-.44-2.1.44Z\" transform=\"translate(0 426.74)\"/><path id=\"path10332\" class=\"cls-7\" d=\"M81.7,259.48l2.1-15.79-2.1-.44-2.1.44Z\" transform=\"translate(0 426.74)\"/><g id=\"g10334\" class=\"cls-8\"><path id=\"path10336\" class=\"cls-9\" d=\"M117.8,250s57.35-43.39,32.67-87C130.25,122.65,170.15,201.81,117.8,250Z\" transform=\"translate(0 426.74)\"/></g><g id=\"g10338\"><g id=\"g10340\"><path id=\"path10348\" class=\"cls-10\" d=\"M52.72,52.4a7.61,7.61,0,0,1,7.61-7.61h41.88a7.62,7.62,0,1,1,0,15.23H60.33A7.62,7.62,0,0,1,52.72,52.4Z\" transform=\"translate(0 426.74)\"/><line id=\"line10350\" class=\"cls-5\" x1=\"52.72\" y1=\"485.49\" x2=\"109.83\" y2=\"485.49\"/></g><g id=\"g10352\"><g id=\"g10354\"><g id=\"g10356\"><rect id=\"rect10364\" class=\"cls-11\" x=\"52.08\" y=\"466.76\" width=\"59.65\" height=\"6.35\"/><line id=\"line10366\" class=\"cls-12\" x1=\"107.93\" y1=\"464.86\" x2=\"54.62\" y2=\"464.86\"/></g><g id=\"g10368\"><rect id=\"rect10376\" class=\"cls-13\" x=\"52.08\" y=\"457.88\" width=\"59.65\" height=\"6.35\"/><line id=\"line10378\" class=\"cls-12\" x1=\"107.93\" y1=\"455.98\" x2=\"54.62\" y2=\"455.98\"/></g></g><g id=\"g10380\"><g id=\"g10382\"><rect id=\"rect10390\" class=\"cls-14\" x=\"52.08\" y=\"448.99\" width=\"59.65\" height=\"6.35\"/><line id=\"line10392\" class=\"cls-12\" x1=\"107.93\" y1=\"447.1\" x2=\"54.62\" y2=\"447.1\"/></g><g id=\"g10394\"><rect id=\"rect10402\" class=\"cls-15\" x=\"52.08\" y=\"440.11\" width=\"59.65\" height=\"6.35\"/><line id=\"line10404\" class=\"cls-12\" x1=\"107.93\" y1=\"438.21\" x2=\"54.62\" y2=\"438.21\"/></g></g></g></g><path id=\"path10406\" class=\"cls-16\" d=\"M91.5,161.46c-4.6-7.05-12-7.05-16.6,0-3.7,5.63-3.7,14.77,0,20.41,2.9,4.5,7.7,4.5,10.6,0a12.74,12.74,0,0,0,0-13.06c-1.9-2.89-4.9-2.89-6.8,0\" transform=\"translate(0 426.74)\"/><path id=\"path10414\" class=\"cls-17\" d=\"M9.5,207.79S-.8,165.25,27.3,140.15c0,0-18.7,61.23-17.8,67.64Z\" transform=\"translate(0 426.74)\"/></g><g id=\"layer1\"><g id=\"g24829\"><g id=\"layer1-2\" data-name=\"layer1\"><path id=\"path2987\" class=\"cls-18\" d=\"M76-421.74C41.9-301.41,103.7-276,74.23-158.83\" transform=\"translate(0 426.74)\"/><path class=\"cls-19\" d=\"M125.29,36.56\" transform=\"translate(0 426.74)\"/><path class=\"cls-18\" d=\"M54.2,58.38C55.33,61.19,56.63,69.89,67,75.7A36.33,36.33,0,0,0,89.8,79.76c4.55-.58,15.23-1.94,22-10.94,3.73-5,.89-10.22,1.21-13.1\" transform=\"translate(0 426.74)\"/><path class=\"cls-18\" d=\"M58,10.15C54.75-4,72.15-46.1,81.14-30.18,86.31-21,98,.21,103.12,10.15\" transform=\"translate(0 426.74)\"/><path id=\"path2991\" class=\"cls-20\" d=\"M58.06-141.4c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/><g id=\"use3767\"><path id=\"path2991-2\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-126.39c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3791\"><path id=\"path2991-3\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-111.38c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3793\"><path id=\"path2991-4\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-96.37c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3795\"><path id=\"path2991-5\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-81.35c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3797\"><path id=\"path2991-6\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-66.34c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3799\"><path id=\"path2991-7\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-51.33c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3801\"><path id=\"path2991-8\" data-name=\"path2991\" class=\"cls-20\" d=\"M58.06-36.32c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 426.74)\"/></g><g id=\"use3803\"><path id=\"path2991-9\" data-name=\"path2991\" class=\"cls-21\" d=\"M47-182.07c4.19,16.17,7.9,13.73,17.67,27.21\" transform=\"translate(0 426.74)\"/></g></g></g></g></svg>"
            // icone poubelle noire
            if (boolproducts){
                let elmts = document.querySelectorAll(".trashProduct");
                for (let x = 0; x<elmts.length; x++) {
                    elmts[x].setAttribute("src", "images/trash.svg");
                }
            }
        }else{
            document.body.classList.add("sombre");
            // Ampoule éteinte
            e.target.innerHTML = "" +
                "<svg id=\"svg10716\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 162.46 691.18\"><defs><style>.cls-1{fill:#6e6e6e;}.cls-2{fill:url(#Dégradé_sans_nom);}.cls-3{fill:url(#Dégradé_sans_nom_2);}.cls-4{opacity:0.39;}.cls-11,.cls-15,.cls-17,.cls-18,.cls-19,.cls-20,.cls-5{fill:none;}.cls-5{stroke:#6d6868;}.cls-11,.cls-5{stroke-width:0.75px;}.cls-6,.cls-8{fill:#bcbcbc;}.cls-6{opacity:0.26;}.cls-16,.cls-6{isolation:isolate;}.cls-16,.cls-7{opacity:0.54;}.cls-9{fill:url(#Dégradé_sans_nom_3);}.cls-10{fill:url(#Dégradé_sans_nom_4);}.cls-11,.cls-15{stroke:#afafaf;}.cls-12{fill:url(#Dégradé_sans_nom_5);}.cls-13{fill:url(#Dégradé_sans_nom_6);}.cls-14{fill:url(#Dégradé_sans_nom_7);}.cls-15{stroke-width:0.5px;}.cls-16{fill:url(#Dégradé_sans_nom_8);}.cls-17{stroke:#000;}.cls-17,.cls-18,.cls-19,.cls-20{stroke-linecap:round;stroke-linejoin:round;}.cls-17,.cls-18,.cls-19{stroke-width:10px;}.cls-18{stroke:#9b0d0d;}.cls-19,.cls-20{stroke:#556b2f;}.cls-20{stroke-width:10px;}</style><radialGradient id=\"Dégradé_sans_nom\" cx=\"81.86\" cy=\"6.11\" r=\"11.44\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.46, 429.29)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#cfcfcf\"/><stop offset=\"1\" stop-color=\"#a8a8a8\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_2\" cx=\"81.23\" cy=\"159.05\" r=\"92.67\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.46, 0.87)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#cdcdcd\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_3\" cx=\"81.23\" cy=\"51.53\" r=\"20.9\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.46, 0.87)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#818181\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_4\" cx=\"80.59\" cy=\"42.33\" r=\"21.21\" gradientTransform=\"matrix(-1, 0, 0, 1, 162.46, 429.29)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.33\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#a1a1a1\"/></radialGradient><radialGradient id=\"Dégradé_sans_nom_5\" cx=\"80.59\" cy=\"33.45\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_4\"/><radialGradient id=\"Dégradé_sans_nom_6\" cx=\"80.59\" cy=\"24.56\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_4\"/><radialGradient id=\"Dégradé_sans_nom_7\" cx=\"80.59\" cy=\"15.68\" r=\"21.21\" xlink:href=\"#Dégradé_sans_nom_4\"/><radialGradient id=\"Dégradé_sans_nom_8\" cx=\"151.69\" cy=\"190\" r=\"24.96\" gradientTransform=\"matrix(-1, -0.06, -0.06, 1, 179.08, -7.24)\" xlink:href=\"#Dégradé_sans_nom\"/></defs><g id=\"Layer_1\" data-name=\"Layer 1\"><rect id=\"rect10104\" class=\"cls-1\" x=\"71.08\" y=\"428.42\" width=\"19.04\" height=\"6.35\"/><rect id=\"rect10111\" class=\"cls-2\" x=\"64.73\" y=\"432.23\" width=\"31.73\" height=\"6.35\"/><path id=\"path10118\" class=\"cls-3\" d=\"M0,191.16c0,39.54,36.37,71.6,81.23,71.6s81.23-32.06,81.23-71.6c0-15.63-5.74-30-15.38-41.8-1.14-1.61-33.27-47.06-36-66.24-2.77-19.53-2.77-24.73-2.77-24.73L93,57.87l0-.79-11.81.4-11.8-.4,0,.79-15.3.52s0,5.2-2.77,24.73c-2.73,19.18-34.86,64.63-36,66.24C5.74,161.12,0,175.53,0,191.16Z\" transform=\"translate(0 428.42)\"/><g id=\"g10120\" class=\"cls-4\"><line id=\"line10122\" class=\"cls-5\" x1=\"82.5\" y1=\"597.23\" x2=\"87.58\" y2=\"483\"/><line id=\"line10124\" class=\"cls-5\" x1=\"78.69\" y1=\"597.23\" x2=\"76.16\" y2=\"483\"/></g><g id=\"g10133\"><path id=\"path10135\" class=\"cls-6\" d=\"M81.23,262.76l.44-3.28-2.1-15.8c.73-.13,1.38-.29,2.1-.43-94.75-18.45-42.32-89.67-42.32-89.67l30.08-96.5L54.15,58.39c7.2,21.57-30,81.23-30,81.23C-48.23,248.76,81.23,262.76,81.23,262.76Z\" transform=\"translate(0 428.42)\"/><path id=\"path10137\" class=\"cls-6\" d=\"M81.67,259.48l.44,3.28s129.46-14,57.11-123.15c0,0-37.23-59.65-30-81.22L93.91,57.08,124,153.58s52.43,71.22-42.32,89.67c.72.14,1.37.3,2.1.43Z\" transform=\"translate(0 428.42)\"/><path id=\"path10139\" class=\"cls-6\" d=\"M81.67,259.48l2.1-15.8c-.73-.13-1.38-.29-2.1-.43-.72.14-1.37.3-2.1.43Z\" transform=\"translate(0 428.42)\"/><path id=\"path10141\" class=\"cls-6\" d=\"M81.67,259.48l2.1-15.8c-.73-.13-1.38-.29-2.1-.43-.72.14-1.37.3-2.1.43Z\" transform=\"translate(0 428.42)\"/></g><g id=\"g10143\" class=\"cls-7\"><path id=\"path10145\" class=\"cls-8\" d=\"M117.76,250s57.35-43.39,32.67-87C130.21,122.65,170.11,201.81,117.76,250Z\" transform=\"translate(0 428.42)\"/></g><g id=\"g10147\"><g id=\"g10149\"><path id=\"path10156\" class=\"cls-9\" d=\"M52.68,52.4a7.61,7.61,0,0,1,7.61-7.61h41.88a7.62,7.62,0,1,1,0,15.23H60.29A7.62,7.62,0,0,1,52.68,52.4Z\" transform=\"translate(0 428.42)\"/><line id=\"line10158\" class=\"cls-5\" x1=\"52.68\" y1=\"487.17\" x2=\"109.79\" y2=\"487.17\"/></g><g id=\"g10160\"><g id=\"g10162\"><g id=\"g10164\"><rect id=\"rect10171\" class=\"cls-10\" x=\"52.04\" y=\"468.44\" width=\"59.65\" height=\"6.35\"/><line id=\"line10173\" class=\"cls-11\" x1=\"107.89\" y1=\"466.54\" x2=\"54.58\" y2=\"466.54\"/></g><g id=\"g10175\"><rect id=\"rect10182\" class=\"cls-12\" x=\"52.04\" y=\"459.56\" width=\"59.65\" height=\"6.35\"/><line id=\"line10184\" class=\"cls-11\" x1=\"107.89\" y1=\"457.66\" x2=\"54.58\" y2=\"457.66\"/></g></g><g id=\"g10186\"><g id=\"g10188\"><rect id=\"rect10195\" class=\"cls-13\" x=\"52.04\" y=\"450.67\" width=\"59.65\" height=\"6.35\"/><line id=\"line10197\" class=\"cls-11\" x1=\"107.89\" y1=\"448.78\" x2=\"54.58\" y2=\"448.78\"/></g><g id=\"g10199\"><rect id=\"rect10206\" class=\"cls-14\" x=\"52.04\" y=\"441.79\" width=\"59.65\" height=\"6.35\"/><line id=\"line10208\" class=\"cls-11\" x1=\"107.89\" y1=\"439.89\" x2=\"54.58\" y2=\"439.89\"/></g></g></g></g><path id=\"path10210\" class=\"cls-15\" d=\"M91.47,161.46c-4.59-7.05-12-7.05-16.6,0-3.67,5.63-3.67,14.77,0,20.41,2.93,4.5,7.69,4.5,10.62,0a13,13,0,0,0,0-13.06c-1.88-2.89-4.92-2.89-6.8,0\" transform=\"translate(0 428.42)\"/><path id=\"path10217\" class=\"cls-16\" d=\"M9.5,207.78S-.81,165.25,27.31,140.15C27.31,140.15,8.59,201.37,9.5,207.78Z\" transform=\"translate(0 428.42)\"/></g><g id=\"layer1\"><g id=\"g24829\"><g id=\"layer1-2\" data-name=\"layer1\"><path id=\"path2987\" class=\"cls-17\" d=\"M75.6-423.42c-34.08,120.33,27.72,145.77-1.75,262.91\" transform=\"translate(0 428.42)\"/><path class=\"cls-18\" d=\"M124.91,34.88\" transform=\"translate(0 428.42)\"/><path class=\"cls-17\" d=\"M53.82,56.7C55,59.51,56.25,68.21,66.61,74a36.34,36.34,0,0,0,22.81,4.06c4.55-.58,15.23-1.94,22-10.94,3.73-5,.89-10.22,1.21-13.1\" transform=\"translate(0 428.42)\"/><path class=\"cls-17\" d=\"M57.58,8.47C54.37-5.69,71.77-47.78,80.76-31.86c5.17,9.15,16.81,30.39,22,40.33\" transform=\"translate(0 428.42)\"/><path id=\"path2991\" class=\"cls-19\" d=\"M57.68-143.08c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 428.42)\"/><g id=\"use3767\"><path id=\"path2991-2\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-128.07c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 428.42)\"/></g><g id=\"use3791\"><path id=\"path2991-3\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-113.06c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 428.42)\"/></g><g id=\"use3793\"><path id=\"path2991-4\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-98c16.59-2,14.67-6,29.35-13.84\" transform=\"translate(0 428.42)\"/></g><g id=\"use3795\"><path id=\"path2991-5\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-83C74.27-85,72.35-89,87-96.87\" transform=\"translate(0 428.42)\"/></g><g id=\"use3797\"><path id=\"path2991-6\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-68C74.27-70,72.35-74,87-81.86\" transform=\"translate(0 428.42)\"/></g><g id=\"use3799\"><path id=\"path2991-7\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-53C74.27-55,72.35-59,87-66.85\" transform=\"translate(0 428.42)\"/></g><g id=\"use3801\"><path id=\"path2991-8\" data-name=\"path2991\" class=\"cls-19\" d=\"M57.68-38C74.27-40,72.35-44,87-51.84\" transform=\"translate(0 428.42)\"/></g><g id=\"use3803\"><path id=\"path2991-9\" data-name=\"path2991\" class=\"cls-20\" d=\"M46.61-183.75c4.19,16.17,7.9,13.73,17.67,27.21\" transform=\"translate(0 428.42)\"/></g></g></g></g></svg>"
            // icone poubelle blanche
            if (boolproducts){
                let elmts = document.querySelectorAll(".trashProduct");
                for (let x = 0; x<elmts.length; x++) {
                    elmts[x].setAttribute("src", "images/trashW.svg");
                }
            }
        }
        darTtheme=!darTtheme;

    }
)
// ============ Afficher boutton pour revenir en haut de page ============ //
document.addEventListener("scroll",function () {
    // afficher pour tablette et mobile
    if(window.innerWidth < 968) {
        if (window.scrollY > 50) {
            document.querySelector(".backTop").style.removeProperty("display");
        } else {
            document.querySelector(".backTop").style.display = "none";
        }
    }else {
        document.querySelector(".backTop").style.display = "none";
    }
})
// ============ Revenir en haut de page  ============ //
function backTop() {
    console.log("backTOP");
   // window.scrollTo(0,0);
    document.documentElement.scrollTo({
        top :0,
        behavior : "smooth"
    })
}