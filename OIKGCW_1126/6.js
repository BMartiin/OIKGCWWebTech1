$(document).ready(function () {

    $("#szamol").on("click", function (e) {
        e.preventDefault();

        // 1) Beviteli mezők értékei
        let aStr = $("#szam1").val().trim();
        let bStr = $("#szam2").val().trim();

        // 2) Üres mezők ellenőrzése
        if (aStr === "" || bStr === "") {
            alert("Töltsd ki mindkét szám mezőt!");
            return;
        }

        // 3) Egész szám ellenőrzés (ne legyen tizedes)
        if (!/^-?\d+$/.test(aStr) || !/^-?\d+$/.test(bStr)) {
            alert("Csak egész számokat adhatsz meg!");
            return;
        }

        let a = parseInt(aStr, 10);
        let b = parseInt(bStr, 10);

        // 4) Művelet kiválasztása
        let muvelet = $("input[name='muvelet']:checked").val();
        if (!muvelet) {
            alert("Válassz egy műveletet (+, -, *, /)!");
            return;
        }

        let eredmeny;

        // 5) Négy alapművelet + osztás ellenőrzése
        switch (muvelet) {
            case "add":
                eredmeny = a + b;
                break;
            case "sub":
                eredmeny = a - b;
                break;
            case "mul":
                eredmeny = a * b;
                break;
            case "div":
                if (b === 0) {
                    alert("Nullával nem lehet osztani!");
                    return;
                }
                eredmeny = a / b;
                break;
            default:
                alert("Ismeretlen művelet!");
                return;
        }

        // 6) Eredmény kiírása
        $("#eredmeny").val(eredmeny);
    });

});
