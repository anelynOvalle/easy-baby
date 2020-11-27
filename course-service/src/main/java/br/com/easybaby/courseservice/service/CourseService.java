package br.com.easybaby.courseservice.service;

import br.com.easybaby.courseservice.dto.CourseDTO;

import java.util.List;

public interface CourseService {

    List<CourseDTO> listCourse();

    CourseDTO createCourse(CourseDTO courseDTO);

    CourseDTO updateCourse(Long id, CourseDTO courseDTO);

    CourseDTO getCourseById(Long id);

    void deleteCourse(Long id);
}
