package com.example.oblig1data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.Comparator;
import java.util.List;

@Repository
public class FilmObjektRepository {

    @Autowired
    private JdbcTemplate db;

    public void lagreFilmObjekt(FilmObjekt innFilm){
        String sql = "INSERT INTO FilmObjekt (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innFilm.getFilm(), innFilm.getAntall(), innFilm.getFornavn(), innFilm.getEtternavn(), innFilm.getTelefonnr(), innFilm.getEpost());
    }

    public List<FilmObjekt> hentAlleFilmObjekter(){
        String sql = "SELECT * FROM FilmObjekt";
        List<FilmObjekt> alleFilmObjekter = db.query(sql, new BeanPropertyRowMapper(FilmObjekt.class));
        Comparator<FilmObjekt> etternavn = Comparator.comparing(FilmObjekt :: getEtternavn);
        alleFilmObjekter.sort(etternavn);
        return alleFilmObjekter;
    }

    public void slettAlleFilmObjekter(){
        String sql = "DELETE FROM FilmObjekt";
        db.update(sql);
    }
}
