const filmer = [];

function kjøp(){
    let empty = 0;

    const film = document.getElementById("filmer").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    if(film === "Velg film her"){
        let Blank = document.getElementById("blankFilmer")
        Blank.removeAttribute("hidden")
        empty+=1
    }

    if(antall === "0"){
        let Blank = document.getElementById("blankAntall")
        Blank.removeAttribute("hidden")
        empty+=1
    }


    if(fornavn === ""){
        let Blank = document.getElementById("blankFornavn")
        Blank.removeAttribute("hidden")
        empty += 1
    }

    if(etternavn === ""){
        let Blank = document.getElementById("blankEtternavn")
        Blank.removeAttribute("hidden")
        empty += 1
    }

    if(telefonnr === ""){
        let Blank = document.getElementById("blankTelefonnr")
        Blank.removeAttribute("hidden")
        empty += 1
    }

    if(epost === ""){
        let Blank = document.getElementById("blankEpost")
        Blank.removeAttribute("hidden")
        empty += 1
    }

    if (empty > 0){
        return
    }

    const FilmObjekt = {
        Film: film,
        Antall: antall,
        Fornavn: fornavn,
        Etternavn: etternavn,
        Telefonnr: telefonnr,
        Epost: epost
    };
    filmer.push(FilmObjekt)
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

function slett(){
    filmer.splice(0, filmer.length)
    document.getElementById("billetter").innerHTML = ""
}
