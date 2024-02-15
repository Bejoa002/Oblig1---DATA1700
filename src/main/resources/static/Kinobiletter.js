const filmer = [];

//Funksjon for å sjekke om det som er skrevet inn i antall er et tall
function nummer(streng){
    const tall = Number(streng)
    let Blank = document.getElementById("blankAntall")
    let String = "Ikke et tall"
    String = String.fontcolor("red");
    if (isNaN(tall)){
        Blank.innerHTML = String
        document.getElementById("buyButton").disabled = true    //For å hindre at man kan kjøpe en billett allikevek, deaktiveres kjøp-knappen
    }
    else {
        Blank.innerHTML = ""
        document.getElementById("buyButton").disabled = false
    }
}
function buy(){
    let empty = 0;

    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    //Validation for filmer
    if(film === "Velg film her"){
        let Blank = document.getElementById("blankFilmer")
        let String = "Du må velge film"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankFilmer").innerHTML = ""}

    //Validation for antall billetter
    if(antall === "0"){
        let Blank = document.getElementById("blankAntall")
        let String = "Du må velge antall billetter"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }


    if(fornavn === ""){
        let Blank = document.getElementById("blankFornavn")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankFornavn").innerHTML = ""}


    if(etternavn === ""){
        let Blank = document.getElementById("blankEtternavn")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankEtternavn").innerHTML = ""}


    if(telefonnr === ""){
        let Blank = document.getElementById("blankTelefonnr")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankTelefonnr").innerHTML = ""}


    if(epost === ""){
        let Blank = document.getElementById("blankEpost")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {
        document.getElementById("blankEpost").innerHTML = ""
    }

    //Hvis det 1 eller flere input bokser som er blanke, går den ut av funksjonen
    if (empty > 0){
        return
    }

    //Oppretter filmobjektet
    const FilmObjekt = {
        Film: film,
        Antall: antall,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };
    filmer.push(FilmObjekt)

    //Oppretter tabellen
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etteranvn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>"

    for (let i of filmer){
        ut+= "<tr><td>" + i.Film + "</td><td>" + i.Antall + "</td><td>" + i.Fornavn + "</td><td>" +
            i.Etternavn + "</td><td>" + i.Telefonnr + "</td><td>" + i.Epost + "</td></tr>"
    }

    ut+= "</table>"

    document.getElementById("billetter").innerHTML = ut;

}

// funkjson som tømmer hele film-objekt-arrayet og fjerner tabellen
function slett(){
    filmer.splice(0, filmer.length)
    document.getElementById("billetter").innerHTML = ""
}
