package com.nology.charlie.controller;

import com.nology.charlie.entity.Project;
import com.nology.charlie.repository.IProjectRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(ProjectController.class)
public class ProjectControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IProjectRepository mockRepo;

    @Test
    @DisplayName("Index Route should show a list of projects if they exist")
    public void indexRouteShouldReturnAListOfProjects() throws Exception {

        // Create a list of fake projects for our mock repo to return
        List<Project> projects = new ArrayList();
        projects.add(new Project(1, "string one", "string two", "string three", "string four", "string five"));
        when(mockRepo.findAll()).thenReturn(projects);

        //
        mockMvc.perform(get("/projects/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andReturn();
    }

    @Test
    @DisplayName("Show route should return a selected project using its id")
    public void showRouteShouldReturnTheCorrectProject() throws Exception {
        List<Project> projects = new ArrayList();
        projects.add(new Project(1, "Calculator", "string two", "string three", "string four", "string five"));
        projects.add(new Project(2, "Tic Tac Toe", "string two", "string three", "string four", "string five"));
        when(mockRepo.findById(1)).thenReturn(projects.get(0));

        mockMvc.perform(get("/projects/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Calculator")))
                .andReturn();


    }


}
