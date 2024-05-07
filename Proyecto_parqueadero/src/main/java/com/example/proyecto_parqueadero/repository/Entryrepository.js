package com.ejemplo.parqueadero.repository;

import com.ejemplo.parqueadero.model.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {

    // Puedes agregar métodos adicionales de consulta aquí si es necesario
}
