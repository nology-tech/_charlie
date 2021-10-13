package com.nology.charlie.controller;

import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Student;
import com.nology.charlie.exception.ResourceNotFoundException;
import com.nology.charlie.repository.IStudentRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    @Autowired
    IStudentRepository studentRepository;

    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents() {
        return ResponseEntity.status(HttpStatus.OK).body(this.studentRepository.findAll());
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Object> getOneStudent(@PathVariable int id) {
        if(this.studentRepository.existsById(id))
            return ResponseEntity.status(HttpStatus.OK).body(this.studentRepository.findById(id));

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Message("Could not find student with id: " + id));
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Message> deleteStudent(@PathVariable int id) {
        studentRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully deleted a student"));
    }
    @PostMapping("/students")
    public ResponseEntity <Message> addStudent (@RequestBody Student newStudent) {
        this.studentRepository.save(newStudent);
        Message successMessage = new Message("Successfully added a student to the database.");
        return ResponseEntity.status(HttpStatus.CREATED).body(successMessage);
    }

    @PutMapping("/students/{id}")
    public ResponseEntity <Object> updatedStudent(@PathVariable int id, @RequestBody Student newStudent) {
        if(this.studentRepository.existsById(id)) {
            this.studentRepository.deleteById(id);
            this.studentRepository.save(newStudent);
            return ResponseEntity.status(HttpStatus.OK).body(newStudent);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Message("Could not find student with id: " + id));

    }
}
