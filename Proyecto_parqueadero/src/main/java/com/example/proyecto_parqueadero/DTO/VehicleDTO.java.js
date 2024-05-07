package com.ejemplo.parqueadero.dto;

public class VehicleDTO {

    private Long id;
    private String licensePlate;
    private String vehicleType;

    // Constructor vacío
    public VehicleDTO() {}

    // Constructor con todos los campos
    public VehicleDTO(Long id, String licensePlate, String vehicleType) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.vehicleType = vehicleType;
}

// Getters y setters para todos los campos
public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public String getLicensePlate() {
    return licensePlate;
}

public void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
}

public String getVehicleType() {
    return vehicleType;
}

public void setVehicleType(String vehicleType) {
    this.vehicleType = vehicleType;
}
}
