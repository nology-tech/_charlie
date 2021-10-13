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
        // Get recipe from database
        Student exitingstudent = studentRepository.getById(id);

        // Edit recipe
        exitingstudent.setStudentName(newStudent.getStudentName());
        exitingstudent.setEnrolledOn(newStudent.getEnrolledOn());
        exitingstudent.setGithubAccount(newStudent.getGithubAccount());
        exitingstudent.setPortfolio(newStudent.getPortfolio());
        exitingstudent.setResume(newStudent.getResume());
        exitingstudent.setEnrolledType(newStudent.getEnrolledType());
        exitingstudent.setPictureLink(newStudent.getPictureLink());
        // Store recipe back in database
        studentRepository.save(exitingstudent);

        // Send back to client
        return ResponseEntity.status(HttpStatus.OK).body(new Message("Successfully updated Student"));
    }
}
