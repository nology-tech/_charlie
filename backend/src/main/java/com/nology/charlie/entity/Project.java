package com.nology.charlie.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Project {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private int id;

    private String projectName;
    private String language;
    private int studentsEnrolled;
    private int numberReviewed;
    private String percentageReviewed;
    private String projectBrief;
    private String coachesTips;
    private String projectThumb;


    public Project() {
    }

    public Project(int id, String projectName, String language, int studentsEnrolled, int numberReviewed, String percentageReviewed, String projectBrief, String coachesTips, String projectThumb) {
        this.id = id;
        this.projectName = projectName;
        this.language = language;
        this.studentsEnrolled = studentsEnrolled;
        this.numberReviewed = numberReviewed;
        this.percentageReviewed = percentageReviewed;
        this.projectBrief = projectBrief;
        this.coachesTips = coachesTips;
        this.projectThumb = projectThumb;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int getStudentsEnrolled() {
        return studentsEnrolled;
    }

    public void setStudentsEnrolled(int studentsEnrolled) {
        this.studentsEnrolled = studentsEnrolled;
    }

    public int getNumberReviewed() {
        return numberReviewed;
    }

    public void setNumberReviewed(int numberReviewed) {
        this.numberReviewed = numberReviewed;
    }

    public String getPercentageReviewed() {
        return percentageReviewed;
    }

    public void setPercentageReviewed(String percentageReviewed) {
        this.percentageReviewed = percentageReviewed;
    }

    public String getProjectBrief() {
        return projectBrief;
    }

    public void setProjectBrief(String projectBrief) {
        this.projectBrief = projectBrief;
    }

    public String getCoachesTips() {
        return coachesTips;
    }

    public void setCoachesTips(String coachesTips) {
        this.coachesTips = coachesTips;
    }

    public String getProjectThumb() {
        return projectThumb;
    }

    public void setProjectThumb(String projectThumb) {
        this.projectThumb = projectThumb;
    }
}
