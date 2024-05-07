package com.ejemplo.parqueadero.dto;

public class EntryDTO {

    private Long id;
    private String licensePlate;
    private int entryHour;
    private int exitHour;
    private String location;
    private String vehicleType;

    // Constructor vacío
    public EntryDTO() {}

    // Constructor con todos los campos
    public EntryDTO(Long id, String licensePlate, int entryHour, int exitHour, String location, String vehicleType) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.entryHour = entryHour;
    this.exitHour = exitHour;
    this.location = location;
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

public int getEntryHour() {
    return entryHour;
}

public void setEntryHour(int entryHour) {
    this.entryHour = entryHour;
}

public int getExitHour() {
    return exitHour;
}

public void setExitHour(int exitHour) {
    this.exitHour = exitHour;
}

public String getLocation() {
    return location;
}

public void setLocation(String location) {
    this.location = location;
}

public String getVehicleType() {
    return vehicleType;
}

public void setVehicleType(String vehicleType) {
    this.vehicleType = vehicleType;
}
}
