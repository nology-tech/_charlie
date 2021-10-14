package com.nology.charlie.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Project;
import com.nology.charlie.repository.IProjectRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
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
        projects.add(new Project(2, "string one", "string two", "string three", "string four", "string five"));
        when(mockRepo.findAll()).thenReturn(projects);

        //
        mockMvc.perform(get("/projects/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andReturn();
    }

    @Test
    @DisplayName("Show route should return a selected project using its id")
    public void showRouteShouldReturnTheCorrectProject() throws Exception {
        List<Project> projects = new ArrayList();
        projects.add(new Project(1, "Calculator", "string two", "string three", "string four", "string five"));
        projects.add(new Project(2, "Tic Tac Toe", "string two", "string three", "string four", "string five"));
        when(mockRepo.existsById(1)).thenReturn(true);
        when(mockRepo.findById(1)).thenReturn(java.util.Optional.of(projects.get(0)));

        mockMvc.perform(get("/projects/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Calculator")))
                .andReturn();


    }

    @Test
    @DisplayName("Create Route should create a new project and returns a message")
    public void createRouteShouldCreateARecipeAndReturnASuccessMessage() throws Exception {
        Project newProject = new Project(2, "Tic Tac Toe", "string two", "string three", "string four", "string five");
//        when(mockRepo.save(newProject)).thenReturn(new Message("Successfully added a new project"));
        mockMvc.perform(post("/projects/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(newProject))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.message", is("Successfully added a new project")))
                .andReturn();

    }

    @Test
    @DisplayName("Update Route should update an existing project and returns updated project")
    public void updateRouteShouldUpdateARecipeAndReturnASuccessMessage() throws Exception {
        List<Project> projects = new ArrayList();
        Project newProject = new Project(1, "Tic Tac Toe", "string two", "string three", "string four", "string five");
        Project updatedProject = new Project(1, "Calculator", "string two", "string three", "string four", "string five");
        projects.add(newProject);
        when(mockRepo.existsById(1)).thenReturn(true);
        when(mockRepo.save(updatedProject)).thenReturn(updatedProject);

        mockMvc.perform(put("/projects/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(updatedProject))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Calculator")))
                .andReturn();


    }


    @Test
    @DisplayName("Delete Route should delete an existing project and return a message")
    public void deleteAnExistingRecipeAndReturnAMessage() throws Exception {
        List<Project> projects = new ArrayList();
        projects.add(new Project(1, "Calculator", "string two", "string three", "string four", "string five"));
        mockMvc.perform(delete("/projects/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message", is("Successfully deleted project with id: 2")))
                .andReturn();


    }





    private static String toJson(Project newProject) throws JsonProcessingException {
        System.out.println(new ObjectMapper().writeValueAsString(newProject));
        return new ObjectMapper().writeValueAsString(newProject);
    }


}
