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

@RestController
@RequestMapping("projects")
public class ProjectController {
    @Autowired
    private IProjectRepository repo;

    @GetMapping("/")
    public ResponseEntity<List> getProjects() {
        return ResponseEntity.status(HttpStatus.OK).body(this.repo.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getAProject(@PathVariable int id) {
        if(this.repo.findById(id) == null)
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new ResourceNotFoundException("Could not find project with id: " + id));

        return ResponseEntity.status(HttpStatus.OK).body(this.repo.findById(id));
    }

    @PostMapping("/")
    public Message createAProject(@RequestBody Project newProject) {
        this.repo.save(newProject);
        return new Message("Successfully added a new project");
    }

    @PutMapping("/{id}")
    public Project updateProjectById(@PathVariable int id, @RequestBody Project updatedProject) {
        this.repo.deleteById(id);
        this.repo.save(updatedProject);
        return updatedProject;
    }

    @DeleteMapping("/{id}")
    public Message deleteProjectById(@PathVariable int id) {
        this.repo.deleteById(id);
        return new Message("Successfully deleted project with id: " + id);
    }

}
