$(document).ready(function () {

    // Kiinduló állapot beállítása – BALRÓL indul
    function resetBox() {
        $("#animBox").stop(true, true).css({
            left: "0px",
            top: "0px",
            width: "300px",
            height: "60px",
            fontSize: "12pt",
            opacity: 1
        });
    }

    // a) Animáció indítása – téglalap alakú pálya
    $("#startAnim").on("click", function () {
        resetBox();

        var speed = 800; // ms – egy szakasz sebessége

        $("#animBox")
            // jobbra elindul – szélesség nő, font 30pt
            .animate({
                left: "400px",
                width: "400px",
                fontSize: "30pt"
            }, speed)

            // lefelé – szélesség csökken, magasság kicsit nő
            .animate({
                top: "150px",
                width: "250px",
                height: "70px"
            }, speed)

            // balra – vissza bal oldalra, opacity = 0.4
            .animate({
                left: "0px",
                opacity: 0.4
            }, speed)

            // vissza kiinduló állapotba – opacity=1, fontSize=12pt
            .animate({
                top: "0px",
                width: "300px",
                height: "60px",
                fontSize: "12pt",
                opacity: 1
            }, speed, function () {
                alert("VÉGE");
            });
    });

    // b) Bekezdés elrejtése – bekezdések eltűnnek, doboz „a helyükre kerül”
    $("#hideParas").on("click", function () {
        $(".bekezdes").slideUp(400, function () {
            // Amint a bekezdések eltűntek, a doboz helyét nem kell piszkálni:
            // föléjük kerül vizuálisan, mert azok már nincsenek ott.
        });

        alert("Bekezdések elrejtése");
    });

    // c) Összecsuk / Kinyit – doboz összecsukása, kinyitása, majd jobbra mozdul
    $("#toggleBox").on("click", function () {

        $("#animBox")
            .stop(true, true)
            // összecsuk
            .animate({
                width: "0px",
                height: "0px",
                fontSize: "0pt",
                opacity: 0.5
            }, 400)
            // kinyit
            .animate({
                width: "300px",
                height: "60px",
                fontSize: "16pt",
                opacity: 1
            }, 400)
            // jobbra elindul és megáll
            .animate({
                left: "+=150px"
            }, 500);
    });

});
