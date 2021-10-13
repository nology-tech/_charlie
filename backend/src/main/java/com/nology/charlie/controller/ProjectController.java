package com.nology.charlie.controller;

import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Project;
import com.nology.charlie.exceptions.ResourceNotFoundException;
import com.nology.charlie.repository.IProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("projects")
public class ProjectController {
    @Autowired
    private IProjectRepository repo;

<<<<<<< HEAD
    @GetMapping("/")
=======
    @GetMapping("projects")
>>>>>>> 531e3d5f7f7f9747d214d78abb7cc9e16f9c38a9
    public ResponseEntity<List> getProjects() {
        return ResponseEntity.status(HttpStatus.OK).body(this.repo.findAll());
    }

<<<<<<< HEAD
    @GetMapping("/{id}")
    public ResponseEntity<Object> getAProject(@PathVariable int id) {
        if(this.repo.findById(id) == null)
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ResourceNotFoundException("that was bad"));

        return ResponseEntity.status(HttpStatus.OK).body(this.repo.findById(id));
    }

    @PostMapping("/")
    public Message createAProject(@RequestBody Project newProject) {
        this.repo.save(newProject);
        return new Message("Successfully added a new project");
=======
    @GetMapping("/projects/{id}")
    public ResponseEntity<Object> getAProject(@PathVariable int id) {
       return ResponseEntity.status(HttpStatus.OK).body(this.repo.findById(id));
    }

    @PostMapping("/projects")
    public ResponseEntity<List> createAProject(@RequestBody Project newProject) {
        this.repo.save(newProject);
        Message successMsg = new Message("Successfully added a new project");
        return ResponseEntity.status(HttpStatus.CREATED).body(this.repo.findAll());
>>>>>>> 531e3d5f7f7f9747d214d78abb7cc9e16f9c38a9
    }


}
