package com.nology.charlie.controller;

import com.nology.charlie.entity.Project;
import com.nology.charlie.repository.IProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {
    @Autowired
    private IProjectRepository repo;

    @GetMapping("projects")
    public List<Project> getProjects() {
        return this.repo.findAll();
    }


}
