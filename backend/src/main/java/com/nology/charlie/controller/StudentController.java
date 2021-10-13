package com.nology.charlie.controller;

import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Student;
import com.nology.charlie.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    IStudentRepository repository;

    @GetMapping("/students")
    public List<Student> getStudents() {
        return this.repository.findAll();
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Message> deleteStudent(@PathVariable int id) {
        repository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully deleted a student"));
    }
    @PostMapping("/students")
    public List <Student> addStudent (@RequestBody Student newStudent) {
        this.repository.save(newStudent);
        return this.repository.findAll();
    }


}
