$(document).ready(function () {

    $("#hideBtn").on("click", function () {
        // A .szoveg osztályú bekezdéseket rejtjük el
        $("p.szoveg").slideUp(500);
    });

    $("#meLink").on("click", function (event) {
        event.preventDefault();              // ne a # href fusson le
        window.open("https://www.uni-miskolc.hu", "_blank");
    });

});
