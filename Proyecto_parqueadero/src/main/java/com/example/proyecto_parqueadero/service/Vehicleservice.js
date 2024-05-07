package com.ejemplo.parqueadero.service;

import com.ejemplo.parqueadero.dto.VehicleDTO;
import com.ejemplo.parqueadero.model.Vehicle;
import com.ejemplo.parqueadero.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public VehicleDTO registerVehicle(VehicleDTO vehicleDTO) {
    // Convertir VehicleDTO a Vehicle y guardar en la base de datos
    Vehicle vehicle = new Vehicle(vehicleDTO.getLicensePlate(), vehicleDTO.getVehicleType());
    vehicle = vehicleRepository.save(vehicle);

    // Convertir Vehicle a VehicleDTO y devolver
    return new VehicleDTO(vehicle.getId(), vehicle.getLicensePlate(), vehicle.getVehicleType());
}

public VehicleDTO getVehicle(Long id) {
    // Obtener el vehículo de la base de datos por ID
    Vehicle vehicle = vehicleRepository.findById(id).orElse(null);
    if (vehicle != null) {
        // Convertir Vehicle a VehicleDTO y devolver
        return new VehicleDTO(vehicle.getId(), vehicle.getLicensePlate(), vehicle.getVehicleType());
    } else {
        return null;
    }
}

// Otros métodos para actualizar, eliminar y realizar otras operaciones con los vehículos...
}
