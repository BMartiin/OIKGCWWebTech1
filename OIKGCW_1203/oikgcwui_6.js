$(function () {

    /* ===========================
       1. RÉSZ – Doboz + jQuery UI
       (3. Task továbbfejlesztve)
       =========================== */

    // jQuery UI: draggable + resizable
    $("#box").draggable();
    $("#box").resizable();

    function resetBox() {
        $("#box").stop(true, true).css({
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

    $("#resetBox").click(function () {
        resetBox();
    });

    $("#startAnim").click(function () {

        resetBox();

        // eredeti 3. Task animáció lépései
        $("#box").animate({
            left: "600px",
            width: "400px",
            fontSize: "30pt"
        }, 800)
        .animate({
            top: "150px",
            width: "250px",
            height: "90px",
            fontSize: "20pt"
        }, 800)
        .animate({
            left: "0px",
            opacity: 0.4
        }, 800)
        .animate({
            left: "300px",
            top: "0px",
            width: "300px",
            height: "80px",
            opacity: 1,
            fontSize: "12pt"
        }, 800, function () {
            // jQuery UI effect: bounce
            $("#box").effect("bounce", { times: 3, distance: 20 }, 600);
        });
    });


    /* ===========================
       2. RÉSZ – Számológép + UI
       (4. Task továbbfejlesztve)
       =========================== */

    // jQuery UI: spinner widget a számmezőkre
    $(".hasSpinner").spinner({
        step: 1
    });

    // jQuery UI: dialog inicializálása (kezdetben autoOpen: false)
    $("#eredmenyDialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#szamol").click(function () {

        const a = parseInt($("#szam1").val(), 10);
        const b = parseInt($("#szam2").val(), 10);
        const muvelet = $("input[name='muvelet']:checked").val();

        // ellenőrzések
        if (isNaN(a) || isNaN(b)) {
            $("#eredmenyDialogSzoveg").text("Hiba: mindkét mezőbe egész számot írj!");
            $("#eredmenyDialog").dialog("option", "title", "Hiba");
            $("#eredmenyDialog").dialog("open");
            $("#eredmenySzoveg").text("");
            return;
        }

        if (!muvelet) {
            $("#eredmenyDialogSzoveg").text("Hiba: válassz egy műveletet!");
            $("#eredmenyDialog").dialog("option", "title", "Hiba");
            $("#eredmenyDialog").dialog("open");
            $("#eredmenySzoveg").text("");
            return;
        }

        if (muvelet === "osztas" && b === 0) {
            $("#eredmenyDialogSzoveg").text("Hiba: 0-val nem lehet osztani!");
            $("#eredmenyDialog").dialog("option", "title", "Hiba");
            $("#eredmenyDialog").dialog("open");
            $("#eredmenySzoveg").text("");
            return;
        }

        // számítás
        let eredmeny;

        switch (muvelet) {
            case "osszeadas":
                eredmeny = a + b;
                break;
            case "kivonas":
                eredmeny = a - b;
                break;
            case "szorzas":
                eredmeny = a * b;
                break;
            case "osztas":
                eredmeny = a / b;
                break;
        }

        const eredmenyText = "Eredmény: " + eredmeny;

        // kiírás az oldalon
        $("#eredmenySzoveg").text(eredmenyText);

        // jQuery UI dialogban is megjelenítjük
        $("#eredmenyDialogSzoveg").text(eredmenyText);
        $("#eredmenyDialog").dialog("option", "title", "Számítás eredménye");
        $("#eredmenyDialog").dialog("open");
    });

});
