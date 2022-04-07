const date = new Date();
var diffArray = new Array();
const year = date.getFullYear();
const Journee = 1000 * 3600 * 24;

const data = [{
        "date": year + "-01-01",
        "nom": "Le 1er janvier"
    },
    {
        "date": year + "-04-18",
        "nom": "Le Lundi de Pâques"
    },
    {
        "date": year + "-05-01",
        "nom": "Le 1er mai"
    },
    {
        "date": year + "-05-08",
        "nom": "Le 8 mai"
    },
    {
        "date": year + "-05-26",
        "nom": "L'Ascension"
    },
    {
        "date": year + "-06-06",
        "nom": "Le Lundi de Pentecôte"
    },
    {
        "date": year + "-07-14",
        "nom": "Le 14 juillet"
    },
    {
        "date": year + "-08-15",
        "nom": "L'Assomption"
    },
    {
        "date": year + "-11-01",
        "nom": "La Toussaint"
    },
    {
        "date": year + "-11-11",
        "nom": "Le 11 novembre"
    },
    {
        "date": year + "-12-25",
        "nom": "Le Jour de Noël"
    }
]

window.onload = function() {
    modifyPage(date, data);
}


function modifyPage(date, donnees) {
    const laDate = date;
    const day = laDate.getDay();
    const month = laDate.getMonth();
    const year = laDate.getFullYear();

    for (var i = 0; i < 11; i++) {
        var date2 = donnees[i].date;
        date2 = new Date(date2);
        var diff = laDate.getTime() - date2.getTime();
        diff = diff / Journee;
        diffArray.push({
            "diff": diff,
            "nom": donnees[i].nom
        })
    }

    for (element of diffArray) {
        if (element.diff < 0) {
            lowestValue = element;
            break;
        }
    }

    lowestValue.diff = Math.abs(lowestValue.diff);
    lowestValue.diff = Math.round(lowestValue.diff)

    document.getElementById('prochainJourNom').innerHTML = lowestValue.nom;

    if (lowestValue.diff > 1) {
        document.getElementById('prochainJourDate').innerHTML = "Dans " + lowestValue.diff + " jours";
    } else {
        document.getElementById('prochainJourDate').innerHTML = "Dans " + lowestValue.diff + " jour";
    }

    for (element of donnees) {
        if (element.nom == lowestValue.nom) {
            var dateExacte = element.date;
        }
    }

    document.getElementById('prochainJourDateExacte').innerHTML = "Le " + tranformDate(dateExacte);
}

function tranformDate(date) {
    var partieMois = date.substr(5, 2);

    switch (partieMois) {
        case '01':
            partieMois = "Janvier";
            break;
        case '02':
            partieMois = "Février";
            break;
        case '03':
            partieMois = "Mars";
            break;
        case '04':
            partieMois = "Avril";
            break;
        case '05':
            partieMois = "Mai";
            break;
        case '06':
            partieMois = "Juin";
            break;
        case '07':
            partieMois = "Juillet";
            break;
        case '08':
            partieMois = "Août";
            break;
        case '09':
            partieMois = "Septembre";
            break;
        case '10':
            partieMois = "Octobre";
            break;
        case '11':
            partieMois = "Novembre";
            break;
        case '12':
            partieMois = "Décembre";
            break;
    }

    var partieJour = date.substr(8, 2);

    return partieJour + " " + partieMois + " " + year;
}