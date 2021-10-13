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
    public ResponseEntity<Object> getOneStudent(@PathVariable int id) throws ResourceNotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(this.studentRepository.findById(id));
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
    public ResponseEntity <Message> updatedStudent(@PathVariable int id, @RequestBody Student newStudent) throws ResourceNotFoundException{
        /*// Get recipe from database
        // Student student = repository.getById(id);

        // Edit recipe
        existingRecipe.setDuration(newRecipe.getDuration());
        existingRecipe.setServings(newRecipe.getServings());
        existingRecipe.setTitle(newRecipe.getTitle());

        // Store recipe back in database
        repository.save(newStudent);
        */

        Student updatedStudent = updateStudentById(id, newStudent);
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully updated Student with id of " + updatedStudent.getId()));
    }

    public Student updateStudentById(int id, Student newStudent) {
        studentRepository.findAll().set(id, newStudent);
        Student updatedStudent = studentRepository.getById(id);
        return updatedStudent;
    }
}
