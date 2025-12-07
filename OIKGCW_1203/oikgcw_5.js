$(function () {

    // Szöveg hozzáadása gomb
    $("#btnSzoveg").click(function () {
        // A dobozba beírja: Programtervező informatikus
        $("#doboz").text("Programtervező informatikus");
    });

    // Gomb gomb -> hozzáfűzi: PTI MI Gomb
    $("#btnGomb").click(function () {
        // a meglévő szöveg mögé fűzi
        const jelenlegi = $("#doboz").html();
        const hozza = (jelenlegi ? jelenlegi + " " : "") + "PTI MI Gomb";
        $("#doboz").html(hozza);
    });

    // Új Gomb felvétele: Forrás után új gomb (ME GEIK-PTI)
    let ujGombLetrehozva = false;
    $("#btnUjGomb").click(function () {
        if (!ujGombLetrehozva) {
            $("<button>ME GEIK-PTI</button>")
                .insertAfter("#forras");
            ujGombLetrehozva = true;
        }
    });

    // Fejléc felvétele: jQuery feladat
    $("#btnFejlec").click(function () {
        if ($("#focim").length === 0) {
            $("<h1 id='focim'>jQuery feladat</h1>")
                .prependTo("#kontener");
        }
    });

    // Alcím felvétele: HTML metódusok
    $("#btnAlcim").click(function () {
        if ($("#alcim").length === 0) {
            $("<h2 id='alcim'>HTML metódusok</h2>")
                .insertAfter("#focim");
        }
    });

    // Űrlap fejléc felvétele: ŰRLAP-OIKGCW
    $("#btnUrlapFejlec").click(function () {
        if ($("#urlapFejlec").length === 0) {
            $("<h3 id='urlapFejlec'>ŰRLAP-OIKGCW</h3>")
                .insertAfter("#alcim");
        }
    });

});
