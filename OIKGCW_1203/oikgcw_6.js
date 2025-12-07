$(function () {

    // Doboz eltávolítása gomb
    $("#btnRemoveBox").click(function () {
        $("#doboz").remove();  // ténylegesen eltávolítja a doboz elemet a DOM-ból
    });

    // DIV elemek kiürítése gomb
    $("#btnClearDivs").click(function () {
        // A .torolheto osztállyal jelölt DIV-ek tartalmát törli
        $(".torolheto").empty();
    });

});
