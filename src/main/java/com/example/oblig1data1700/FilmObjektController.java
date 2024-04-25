package com.example.oblig1data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class FilmObjektController {

    @Autowired
    private FilmObjektRepository rep;

    @PostMapping("/lagre")
    public void lagreFilmObjekt(FilmObjekt innFilm) { rep.lagreFilmObjekt(innFilm); }

    @GetMapping("/hentAlle")
    public List<FilmObjekt> hentAlle() { return rep.hentAlleFilmObjekter(); }

    @GetMapping("/slettAlle")
    public void slettAlle() {rep.slettAlleFilmObjekter();}
}
