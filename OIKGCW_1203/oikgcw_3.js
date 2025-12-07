$(function () {

    // A doboz kezdőállapota (a feladat szerinti értékekkel)
    function resetBox() {
        $("#box").css({
            position: "relative",
            left: "300px",
            top: "0px",
            width: "300px",
            height: "80px",
            fontSize: "12pt",
            opacity: 1
        });
    }

    resetBox();

    // --------------- a) Animáció indítása ---------------
    $("#startAnim").click(function () {

        resetBox();

        // jobbra elindul – szélesség nő, betűméret 30pt
        $("#box").animate({
            left: "600px",
            width: "400px",
            fontSize: "30pt"
        }, 800)

        // lefelé – szélesség kisebb, magasság kb. +10%
        .animate({
            top: "150px",
            width: "250px",
            height: "90px",
            fontSize: "20pt"
        }, 800)

        // balra – bal sarokba érve opacity = 0.4
        .animate({
            left: "0px",
            opacity: 0.4
        }, 800)

        // vissza a kiindulási állapotba – opacity = 1, fontSize = 12pt
        .animate({
            left: "300px",
            top: "0px",
            width: "300px",
            height: "80px",
            opacity: 1,
            fontSize: "12pt"
        }, 800, function () {
            alert("VÉGE");
        });
    });

    // --------------- b) Bekezdés elrejtése ---------------
    $("#hidePara").click(function () {

        $(".bekezdes").slideUp(600, function () {
            // amikor eltűntek a bekezdések, a doboz a helyükre kerül
            $("#box").animate({
                top: "0px",
                marginTop: "10px"
            }, 400);
        });

        alert("Bekezdések elrejtése");
    });

    // --------------- c) Összecsuk / Kinyit + jobbra mozgás ---------------
    let osszecsukva = false;

    $("#toggleBox").click(function () {

        if (!osszecsukva) {
            // összecsukás
            $("#box").animate({
                width: "0px",
                height: "0px",
                fontSize: "0pt",
                padding: "0px"
            }, 600, function () {
                // összecsukás után kinyitás
                $("#box").animate({
                    width: "300px",
                    height: "80px",
                    fontSize: "20pt",
                    padding: "10px"
                }, 600, function () {
                    // majd jobbra elindul és megáll
                    $("#box").animate({
                        left: "+=200px"
                    }, 600);
                });
            });

            osszecsukva = true;
        } else {
            // vissza alaphelyzethez közelebb, ha újra rányomunk
            $("#box").animate({
                left: "300px"
            }, 500);
            osszecsukva = false;
        }
    });

});
