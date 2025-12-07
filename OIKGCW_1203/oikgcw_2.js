$(function () {

    // a) Egy kurzus betöltése – csak az első objektum
    $("#egyBtn").click(function () {
        $.getJSON("oikgcw_orarend1.json", function (data) {

            const k = data.kurzus[0]; // első kurzus

            const html = `
                <div class="kurzus-blokk">
                    <h3>${k.targy}</h3>
                    <p><b>Nap:</b> ${k.idopont.nap}</p>
                    <p><b>Időpont:</b> ${k.idopont.tol} – ${k.idopont.ig}</p>
                    <p><b>Helyszín:</b> ${k.helyszin}</p>
                    <p><b>Oktató:</b> ${k.oktato}</p>
                    <p><b>Szak:</b> ${k.szak}</p>
                    <p><b>Típus:</b> ${k.tipus}</p>
                </div>
                <h4>Cím</h4>
                <p>${data.cim.iranyitoszam} ${data.cim.varos}, ${data.cim.utca}</p>
            `;

            $("#terulet").html(html);

        }).fail(function () {
            alert("Hiba: nem sikerült beolvasni az oikgcw_orarend1.json fájlt!");
        });
    });

    // b) Teljes hét órarendjének betöltése – az egész kurzus tömb
    $("#hetBtn").click(function () {
        $.getJSON("oikgcw_orarend1.json", function (data) {

            let html = `
                <table class="orarend">
                    <tr>
                        <th>Nap</th>
                        <th>Időpont</th>
                        <th>Tárgy</th>
                        <th>Helyszín</th>
                        <th>Oktató</th>
                        <th>Típus</th>
                    </tr>
            `;

            data.kurzus.forEach(function (k) {
                html += `
                    <tr>
                        <td>${k.idopont.nap}</td>
                        <td>${k.idopont.tol} – ${k.idopont.ig}</td>
                        <td>${k.targy}</td>
                        <td>${k.helyszin}</td>
                        <td>${k.oktato}</td>
                        <td>${k.tipus}</td>
                    </tr>
                `;
            });

            html += `</table>`;

            // Cím + telefonszámok a táblázat alá
            html += `
                <div class="cim-blokk">
                    <h4>Cím</h4>
                    <p>${data.cim.iranyitoszam} ${data.cim.varos}, ${data.cim.utca}</p>
                    <h4>Telefonszámok</h4>
                    <ul>
            `;

            data.telefonszam.forEach(function (t) {
                html += `<li><b>${t.tipus}:</b> ${t.szam}</li>`;
            });

            html += `
                    </ul>
                </div>
            `;

            $("#het_terulet").html(html);

        }).fail(function () {
            alert("Hiba: nem sikerült beolvasni az oikgcw_orarend1.json fájlt!");
        });
    });

});
