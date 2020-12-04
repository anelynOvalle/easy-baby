package br.com.easybaby.courseservice.service;

import br.com.easybaby.courseservice.dto.CourseDTO;
import br.com.easybaby.courseservice.dto.CourseResponseDTO;

import java.util.List;

public interface CourseService {

    List<CourseResponseDTO> listCourse();

    CourseDTO createCourse(CourseDTO courseDTO);

    CourseDTO updateCourse(Long id, CourseDTO courseDTO);

    CourseResponseDTO getCourseById(Long id);

    void deleteCourse(Long id);
}