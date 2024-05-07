package com.ejemplo.parqueadero.service;

import com.ejemplo.parqueadero.dto.EntryDTO;
import com.ejemplo.parqueadero.model.Entry;
import com.ejemplo.parqueadero.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntryService {

    @Autowired
    private EntryRepository entryRepository;

    public EntryDTO registerEntry(EntryDTO entryDTO) {
    // Convertir EntryDTO a Entry y guardar en la base de datos
    Entry entry = new Entry(entryDTO.getLicensePlate(), entryDTO.getEntryHour(), entryDTO.getLocation(), entryDTO.getVehicleType());
    entry = entryRepository.save(entry);

    // Convertir Entry a EntryDTO y devolver
    return new EntryDTO(entry.getId(), entry.getLicensePlate(), entry.getEntryHour(), entry.getExitHour(), entry.getLocation(), entry.getVehicleType());
}

public EntryDTO getEntry(Long id) {
    // Obtener la entrada de la base de datos por ID
    Entry entry = entryRepository.findById(id).orElse(null);
    if (entry != null) {
        // Convertir Entry a EntryDTO y devolver
        return new EntryDTO(entry.getId(), entry.getLicensePlate(), entry.getEntryHour(), entry.getExitHour(), entry.getLocation(), entry.getVehicleType());
    } else {
        return null;
    }
}

// Otros métodos para actualizar, eliminar y realizar otras operaciones con las entradas...
}
