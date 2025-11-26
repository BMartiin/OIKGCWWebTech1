$(document).ready(function () {

    // Segédfüggvények: mindkét listából az első két elem
    function hideFirstTwo() {
        $("#lista1 li:lt(2)").hide();   // lista1 első 2 eleme
        $("#lista2 li:lt(2)").hide();   // lista2 első 2 eleme
    }

    function hideLinks() {
        $("#lista1 li:lt(2) a").hide();
        $("#lista2 li:lt(2) a").hide();
    }

    // K1: elrejti a lista két első elemét és href-t
    $("#k1").on("click", function () {
        hideFirstTwo();
        hideLinks();
    });

    // K2: elrejti a lista két első elemét és href-t és a K2 gombot
    $("#k2").on("click", function () {
        hideFirstTwo();
        hideLinks();
        $("#k2").hide();
    });

    // K3: elrejti a fejlécet, lista két első elemét és href-t
    $("#k3").on("click", function () {
        $("#fejlec").hide();
        hideFirstTwo();
        hideLinks();
    });

    // K4: elrejti a lista két első elemét, link szöveget és href-t
    $("#k4").on("click", function () {
        hideFirstTwo();
        hideLinks();
    });

    // K5: elrejti a lista két első elemét, href-t és aaaa táblázat páros sorait
    $("#k5").on("click", function () {
        hideFirstTwo();
        hideLinks();

        // páros sorok (2., 4.) – emberi számozás szerint → :odd (1,3 index)
        $("#aaaa tr:odd").hide();
    });

});
