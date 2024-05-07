package com.ejemplo.parqueadero.controller;

import com.ejemplo.parqueadero.dto.VehicleDTO;
import com.ejemplo.parqueadero.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/vehicles") // Ruta base para todas las operaciones relacionadas con los vehículos
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public ResponseEntity<VehicleDTO> registerVehicle(@RequestBody VehicleDTO vehicleDTO) {
    VehicleDTO newVehicle = vehicleService.registerVehicle(vehicleDTO);
    return new ResponseEntity<>(newVehicle, HttpStatus.CREATED);
}

@GetMapping("/{id}")
public ResponseEntity<VehicleDTO> getVehicle(@PathVariable Long id) {
    VehicleDTO vehicleDTO = vehicleService.getVehicle(id);
    if (vehicleDTO != null) {
        return ResponseEntity.ok(vehicleDTO);
    } else {
        return ResponseEntity.notFound().build();
    }
}


}
