package com.nology.charlie.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;
    private String studentName;
    private String enrolledOn;
    private String githubAccount;
    private String portfolio;
    private String resume;
    private String enrolledType;
    private String pictureLink;
    private String email;

    public Student(int id, String studentName, String enrolledOn, String githubAccount, String portfolio, String resume, String enrolledType, String pictureLink, String email) {
        this.id = id;
        this.studentName = studentName;
        this.enrolledOn = enrolledOn;
        this.githubAccount = githubAccount;
        this.portfolio = portfolio;
        this.resume = resume;
        this.enrolledType = enrolledType;
        this.pictureLink = pictureLink;
        this.email = email;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getEnrolledOn() {
        return enrolledOn;
    }

    public void setEnrolledOn(String enrolledOn) {
        this.enrolledOn = enrolledOn;
    }

    public String getGithubAccount() {
        return githubAccount;
    }

    public void setGithubAccount(String githubAccount) {
        this.githubAccount = githubAccount;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(String portfolio) {
        this.portfolio = portfolio;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getEnrolledType() {
        return enrolledType;
    }

    public void setEnrolledType(String enrolledType) {
        this.enrolledType = enrolledType;
    }

    public String getPictureLink() {
        return pictureLink;
    }

    public void setPictureLink(String pictureLink) {
        this.pictureLink = pictureLink;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public Student() {
        // An empty constructor
    }
}
