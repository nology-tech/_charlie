package com.nology.charlie.controller;

import com.nology.charlie.entity.Message;
import com.nology.charlie.entity.Student;
import com.nology.charlie.exception.ResourceNotFoundException;
import com.nology.charlie.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    IStudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getStudents() {
        return this.studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getOneStudent(@PathVariable int id) throws ResourceNotFoundException {
        return ResponseEntity.status(HttpStatus.OK).body(studentRepository.getById(id));
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Message> deleteStudent(@PathVariable int id) {
        studentRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully deleted a student"));
    }
    @PostMapping("/students")
    public List <Student> addStudent (@RequestBody Student newStudent) {
        this.studentRepository.save(newStudent);
        return this.studentRepository.findAll();
    }

    @PutMapping("/students/{id}")
    public ResponseEntity <Message> updatedStudent(@PathVariable int id, @RequestBody Student newStudent) throws ResourceNotFoundException{
        /*// Get recipe from database
        Student student = repository.getById(id);

        // Edit recipe
        existingRecipe.setDuration(newRecipe.getDuration());
        existingRecipe.setServings(newRecipe.getServings());
        existingRecipe.setTitle(newRecipe.getTitle());

        // Store recipe back in database
        repository.save(newStudent);

        // Send back to client
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully updated Student"));*/
        Student student = updateStudentById(id, newStudent);
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully updated Student"));
    }

    public Student updateStudentById(int id, Student newStudent) {
        Student existingStudent = studentRepository.getById(id);
        studentRepository.findAll().set(id, newStudent);
        Student foundStudent = studentRepository.getById(id);
        return foundStudent;
    }
}
