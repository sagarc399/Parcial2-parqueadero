package com.ejemplo.parqueadero.repository;

import com.ejemplo.parqueadero.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {

    // Puedes agregar métodos adicionales de consulta aquí si es necesario
}
