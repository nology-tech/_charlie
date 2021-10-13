package com.nology.charlie.controller;

import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Project;
import com.nology.charlie.repository.IProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProjectController {
    @Autowired
    private IProjectRepository repo;

    @GetMapping("projects")
    public ResponseEntity<List> getProjects() {
        return ResponseEntity.status(HttpStatus.OK).body(this.repo.findAll());
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Object> getAProject(@PathVariable int id) {
       return ResponseEntity.status(HttpStatus.OK).body(this.repo.findById(id));
    }

    @PostMapping("/projects")
    public ResponseEntity<List> createAProject(@RequestBody Project newProject) {
        this.repo.save(newProject);
        Message successMsg = new Message("Successfully added a new project");
        return ResponseEntity.status(HttpStatus.CREATED).body(this.repo.findAll());
    }


}
