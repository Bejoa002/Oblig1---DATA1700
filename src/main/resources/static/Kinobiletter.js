const filmer = [];

//Funksjon for å sjekke om det som er skrevet inn i antall er et tall
function nummer(streng){
    const tall = Number(streng)
    let Blank = document.getElementById("blankAntall")
    let String = "Ikke et tall"
    String = String.fontcolor("red");
    if (isNaN(tall)){
        Blank.innerHTML = String
        document.getElementById("buyButton").disabled = true    //For å hindre at man kan kjøpe en billett allikevel, deaktiveres kjøp-knappen
    }
    else {
        Blank.innerHTML = ""
        document.getElementById("buyButton").disabled = false
    }
}

//Funksjon for å validere epostadressen
function emailValidation(){
    let Epost = document.getElementById("epost").value
    const regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    return regex.test(Epost);
}

//Funksjon for å validere mobilnummeret
function numberValidation(){
    let telefonnr = document.getElementById("telefonnr").value
    const regex = /^\d{8}$/;
    return regex.test(telefonnr)
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
    if(antall < "1"){
        let Blank = document.getElementById("blankAntall")
        let String = "Du må velge antall billetter"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }

    //Validering av fornavn
    if(fornavn === ""){
        let Blank = document.getElementById("blankFornavn")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankFornavn").innerHTML = ""}

    //Validering av etternavn
    if(etternavn === ""){
        let Blank = document.getElementById("blankEtternavn")
        let String = "Må fylles inn"
        String = String.fontcolor("red");
        Blank.innerHTML = String
        empty += 1
    }
    else {document.getElementById("blankEtternavn").innerHTML = ""}

    //Validering av telefonnummer
    const nummersjekk = numberValidation()
    let blankNummer = document.getElementById("blankTelefonnr")
    let nummerString = ""
    if(telefonnr === ""){
        nummerString += "Må fylles inn"
        nummerString = nummerString.fontcolor("red");
        blankNummer.innerHTML = nummerString
        empty += 1
    }
    else if (nummersjekk === false){
        nummerString += "Ikke et telefonnummer"
        nummerString = nummerString.fontcolor("red")
        blankNummer.innerHTML = nummerString
        empty += 1
    }
    else {blankNummer.innerHTML = ""}

    //Validering av epostadresse
    const epostsjekk = emailValidation()
    let blankEpost = document.getElementById("blankEpost")
    let epostString = ""
    if(epost === ""){
        epostString += "Må fylles inn"
        epostString = epostString.fontcolor("red")
        blankEpost.innerHTML = epostString
        empty += 1
    }
    else if (epostsjekk === false){
        epostString += "Ikke en epost-adresse"
        epostString = epostString.fontcolor("red")
        blankEpost.innerHTML = epostString
        empty += 1
    }
    else {blankEpost.innerHTML = ""}


    //Hvis det 1 eller flere input bokser som er blanke, går den ut av funksjonen
    if (empty > 0){
        return
    }


    //Oppretter filmobjektet
    const FilmObjekt = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost
    };
    filmer.push(FilmObjekt);


    //lagring på server
    $.post("/lagre", FilmObjekt, function (){
        hentAlle();
    })

    //Blanking av alle feltene
    document.getElementById("filmer").selectedIndex = 0;
    document.getElementById("antall").value = '0';
    document.getElementById("fornavn").value = '';
    document.getElementById("etternavn").value = '';
    document.getElementById("telefonnr").value = '';
    document.getElementById("epost").value = '';
}


function hentAlle(){
    $.get("/hentAlle", function (data){
        formaterData(data);
    })
}


//Oppretter tabellen
function formaterData(filmer){
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etteranvn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>"

    for (let i of filmer){
        ut+= "<tr><td>" + i.film + "</td><td>" + i.antall + "</td><td>" + i.fornavn + "</td><td>" +
            i.etternavn + "</td><td>" + i.telefonnr + "</td><td>" + i.epost + "</td></tr>"
    }
    ut+= "</table>"
    document.getElementById("billetter").innerHTML = ut;
}

// funksjon som tømmer hele film-objekt-arrayet og fjerner tabellen
function slettAlle() {
    $.get("/slettAlle", function (){
        document.getElementById("billetter").innerHTML = "";
    })
}