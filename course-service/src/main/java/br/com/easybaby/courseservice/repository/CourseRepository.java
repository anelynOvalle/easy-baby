package br.com.easybaby.courseservice.repository;

import br.com.easybaby.courseservice.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
