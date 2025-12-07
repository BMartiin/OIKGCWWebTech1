$(function () {

    $("#szamol").click(function () {

        // értékek kiolvasása
        const a = parseInt($("#szam1").val(), 10);
        const b = parseInt($("#szam2").val(), 10);
        const muvelet = $("input[name='muvelet']:checked").val();

        // --- ellenőrzések ---

        // számok ellenőrzése
        if (isNaN(a) || isNaN(b)) {
            alert("Hiba: mindkét mezőbe egész számot írj!");
            $("#eredmeny").text("");
            return;
        }

        // művelet kiválasztása
        if (!muvelet) {
            alert("Hiba: válassz egy műveletet!");
            $("#eredmeny").text("");
            return;
        }

        // osztásnál 0-val osztás tiltása
        if (muvelet === "osztas" && b === 0) {
            alert("Hiba: 0-val nem lehet osztani!");
            $("#eredmeny").text("");
            return;
        }

        // --- számítás ---

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
                eredmeny = a / b;   // itt lehet tizedes is
                break;
        }

        // --- eredmény kiírása ---
        $("#eredmeny").text("Eredmény: " + eredmeny);
    });

});
