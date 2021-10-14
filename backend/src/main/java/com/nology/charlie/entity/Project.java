package com.nology.charlie.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Project {
    @Id
    private int id;

    private String name;
    private String language;
    private String brief;
    private String coaches_tips;
    private String thumbnail;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getBrief() {
        return brief;
    }

    public void setBrief(String brief) {
        this.brief = brief;
    }

    public String getCoaches_tips() {
        return coaches_tips;
    }

    public void setCoaches_tips(String coaches_tips) {
        this.coaches_tips = coaches_tips;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public Project(int id, String name, String language, String brief, String coaches_tips, String thumbnail) {
        this.id = id;
        this.name = name;
        this.language = language;
        this.brief = brief;
        this.coaches_tips = coaches_tips;
        this.thumbnail = thumbnail;
    }

    public Project() {
    }
}
