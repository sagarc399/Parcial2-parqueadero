package com.example.parqueadero.controller;

import com.examplle.parqueadero.dto.EntryDTO;
import com.example.parqueadero.service.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/entries")
public class EntryController {

    @Autowired
    private EntryService entryService;

    @PostMapping
    public ResponseEntity<EntryDTO> registerEntry(@RequestBody EntryDTO entryDTO) {
    EntryDTO newEntry = entryService.registerEntry(entryDTO);
    return new ResponseEntity<>(newEntry, HttpStatus.CREATED);
}

@GetMapping("/{id}")
public ResponseEntity<EntryDTO> getEntry(@PathVariable Long id) {
    EntryDTO entryDTO = entryService.getEntry(id);
    if (entryDTO != null) {
        return ResponseEntity.ok(entryDTO);
    } else {
        return ResponseEntity.notFound().build();
    }
}

}
