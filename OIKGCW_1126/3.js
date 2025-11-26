$(document).ready(function () {

    // 1) Ha a fejlécről elhúzzuk az egeret → info ablak
    $("#fejlec").on("mouseleave", function () {
        alert("Elhúzta az egeret a fejléc szövegről!");
    });

    // 2) 1. bekezdés "Kattints ide" → elrejti az első bekezdést
    $("#hide1").on("click", function () {
        $("#p1").slideUp();
    });

    // 3) 2. bekezdés "Kattints ide" → dupla kattintásra rejti el
    $("#hide2").on("dblclick", function () {
        $("#p2").slideUp();
    });

    // 4) A „Jelentkezés” gombra ráállva → információs ablak
    $("#jelentkezes").on("mouseenter", function () {
        alert("A Jelentkezés gomb fölé vitte a kurzort!");
    });

    // 5) Beviteli mezőn fel/le mozgatva → keret színe változik
    $(".mezo").on("mousemove", function (e) {
        // e.pageY változása alapján váltunk színt
        $(this).css("border-color", `rgb(${e.pageY % 255}, 80, 120)`);
    });

    // 6) Beviteli mezőn belül kattintás → szín kitöltés
    $(".mezo").on("click", function () {
        $(this).css("background", "#ffefaa");
    });

});
