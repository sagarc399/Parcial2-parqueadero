package com.ejemplo.parqueadero.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String licensePlate;
    private int entryHour;
    private int exitHour;
    private String location;
    private String vehicleType;

    // Constructor vacío
    public Entry() {}

    // Constructor con todos los campos
    public Entry(String licensePlate, int entryHour, String location, String vehicleType) {
    this.licensePlate = licensePlate;
    this.entryHour = entryHour;
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
