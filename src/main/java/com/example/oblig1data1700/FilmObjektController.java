package com.example.oblig1data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FilmObjektController {
    private final List<FilmObjekt> FilmObjekter = new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreFilmObjekt(FilmObjekt innFilm) { FilmObjekter.add(innFilm); }
    @GetMapping("/hentAlle")
    public List<FilmObjekt> hentAlle() { return FilmObjekter; }

    @GetMapping("/slettAlle")
    public void slettAlle() {FilmObjekter.clear();}
}
