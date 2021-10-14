package com.nology.charlie.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nology.charlie.entity.Student;
import com.nology.charlie.repository.IStudentRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(StudentController.class)
public class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IStudentRepository mockRepo;

    @Test
    @DisplayName("Index Route should return a list of students if they exist")
    public void indexRouteShouldReturnListOfStudents()throws Exception{

        List<Student> students = new ArrayList();
        students.add(new Student(1, "Martin Harrison", "Ibiza", "github.com/mharrison98", "www.wei.com", "www.wei.com/cv", "Full-Time", "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png"));
        when(mockRepo.findAll()).thenReturn(students);

        mockMvc.perform(get("/students"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andReturn();
    }

    @Test
    @DisplayName("Show Route should return a selected student by Id")
    public void ShowRouteShouldReturnTheCorrectStudent() throws Exception{
        Student student = new Student(1, "Martin Harrison", "Ibiza", "github.com/mharrison98", "www.wei.com", "www.wei.com/cv", "Full-Time", "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png");
        when(mockRepo.existsById(1)).thenReturn(true);
        when(mockRepo.findById(1)).thenReturn(java.util.Optional.of(student));
        mockMvc.perform(get("/students/1/"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andReturn();
    }


    @Test
    @DisplayName("Create Route should create a new student and return a success message")
    public void CreateRouteShouldCreateStudentAndReturnASuccessMessage() throws Exception{
        Student student = new Student(1, "Martin Harrison", "Ibiza", "github.com/mharrison98", "www.wei.com", "www.wei.com/cv", "Full-Time", "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png");
        when(mockRepo.existsById(1)).thenReturn(true);
        when(mockRepo.findById(1)).thenReturn(java.util.Optional.of(student));
        mockMvc.perform(post("/students")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(new Student(2, "Marasdftin Harrasdfaison", "Ibizasdfa", "github.com/mharrison98", "www.weasdfai.com", "www.wei.casdfasdom/cv", "Full-Tasdfaime", "https://nolasdfasogy.io/wp-content/uploads/2019/12/NOLOGY7.png")))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.text", is("Successfully added a student to the database.")))
                .andReturn();
    }


    @Test
    @DisplayName("Update Route should return update student and return a success message")
    public void UpdateRouteShouldUpdateAndReturnSuccessMessage() throws Exception{
        Student student = new Student(1, "Martin Harrison", "Ibiza", "github.com/mharrison98", "www.wei.com", "www.wei.com/cv", "Full-Time", "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png");
        when(mockRepo.existsById(1)).thenReturn(true);
//        when(mockRepo.findById(1)).thenReturn(java.util.Optional.of(student));

        mockMvc.perform(put("/students/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(toJson(new Student(1, "Marasdftin Harrasdfaison", "Ibizasdfa", "github.com/mharrison98", "www.weasdfai.com", "www.wei.casdfasdom/cv", "Full-Tasdfaime", "https://nolasdfasogy.io/wp-content/uploads/2019/12/NOLOGY7.png")))
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.studentName", is("Marasdftin Harrasdfaison")))
//                .andExpect(jsonPath("$.quote", is("You teach a child to read, and he or her will be able to pass a literacy test.")))
                .andReturn();
    }

    @Test
    @DisplayName("Delete Route should delete a student and return a success message")
    public void DeleteRouteShouldDeleteAStudentAndReturnASuccessMessage() throws Exception{
        Student student = new Student(1, "Martin Harrison", "Ibiza", "github.com/mharrison98", "www.wei.com", "www.wei.com/cv", "Full-Time", "https://nology.io/wp-content/uploads/2019/12/NOLOGY7.png");
        when(mockRepo.existsById(1)).thenReturn(true);
        mockMvc.perform(delete("/students/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.text", is("Successfully deleted a student")))
                .andReturn();
    }

    public static String toJson(Student newStudent) throws JsonProcessingException {
        final ObjectMapper mapper = new ObjectMapper();
        final String jsonContent = mapper.writeValueAsString(newStudent);
        return jsonContent;
    }

}
