$(function () {

    $("#betoltesBtn").click(function () {

        $.getJSON("oikgcw_orarend.json", function (data) {

            let html = `<h2>Kurzus adatok</h2>`;

            // --- KURZUS LISTA ---
            data.kurzus.forEach(function (k) {
                html += `
                    <div class="kurzus-blokk">
                        <h3>${k.targy}</h3>
                        <p><b>Időpont:</b> ${k.idopont.nap}, ${k.idopont.tol} – ${k.idopont.ig}</p>
                        <p><b>Helyszín:</b> ${k.helyszin}</p>
                        <p><b>Oktató:</b> ${k.oktato}</p>
                        <p><b>Szak:</b> ${k.szak}</p>
                        <p><b>Típus:</b> ${k.tipus}</p>
                    </div>
                `;
            });

            // --- CÍM ---
            html += `
                <h2>Cím</h2>
                <p><b>Irányítószám:</b> ${data.cim.iranyitoszam}</p>
                <p><b>Város:</b> ${data.cim.varos}</p>
                <p><b>Utca:</b> ${data.cim.utca}</p>
            `;

            // --- TELEFONSZÁMOK LISTÁJA ---
            html += `<h2>Telefonszámok</h2><ul>`;
            data.telefonszam.forEach(function (t) {
                html += `
                    <li><b>${t.tipus}:</b> ${t.szam}</li>
                `;
            });
            html += `</ul>`;

            // --- KIÍRÁS A DIV-BE ---
            $("#eredmeny").html(html);

        }).fail(function () {
            alert("Hiba: a JSON fájl nem található vagy hibás!");
        });
    });

});
