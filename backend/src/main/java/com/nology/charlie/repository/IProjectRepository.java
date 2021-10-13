package com.nology.charlie.repository;

import com.nology.charlie.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProjectRepository extends JpaRepository<Project, Integer> {


}
