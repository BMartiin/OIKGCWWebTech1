$(document).ready(function () {

    // --- Űrlap felett lévő három gomb: bekezdések kezelése ---

    // Elrejt: három bekezdés elrejtése
    $("#pHide").on("click", function () {
        $(".bekezdes").hide();
    });

    // Megjelenít: három bekezdés megjelenítése
    $("#pShow").on("click", function () {
        $(".bekezdes").show();
    });

    // Elrejt / Megjelenít: be/ki kapcsolható
    $("#pToggle").on("click", function () {
        $(".bekezdes").toggle();
    });


    // --- Űrlap alatt lévő gombok: áttetszőség és űrlap láthatóság ---

    // Áttetszőség = 0.1 (elhalványul)
    $("#op01").on("click", function () {
        $("#formBox").css("opacity", 0.1);
    });

    // Áttetszőség = 0.5 (erősödik)
    $("#op05").on("click", function () {
        $("#formBox").css("opacity", 0.5);
    });

    // Áttetszőség = 0.8 (még erősebb)
    $("#op08").on("click", function () {
        $("#formBox").css("opacity", 0.8);
    });

    // Elrejt: űrlap elrejtése
    $("#fHide").on("click", function () {
        $("#formBox").hide();
    });

    // Megjelenít: űrlap megjelenítése
    $("#fShow").on("click", function () {
        $("#formBox").show();
    });

    // Elrejt / Megjelenít: űrlap be/ki kapcsolása
    $("#fToggle").on("click", function () {
        $("#formBox").toggle();
    });

});
