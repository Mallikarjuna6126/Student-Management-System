package com.malaya.studentmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.malaya.studentmanagement.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}