package br.com.easybaby.courseservice.service.impl;

import br.com.easybaby.courseservice.dto.CourseDTO;
import br.com.easybaby.courseservice.dto.CourseResponseDTO;
import br.com.easybaby.courseservice.entity.Course;
import br.com.easybaby.courseservice.exceptions.CourseNotFound;
import br.com.easybaby.courseservice.repository.CourseRepository;
import br.com.easybaby.courseservice.service.CourseService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class CourseServiceImpl implements CourseService {

    private CourseRepository courseRepository;
    private final ModelMapper mapper;

    @Override
    public List<CourseResponseDTO> listCourse() {
        return mapListCourse(courseRepository.findAll());
    }

    @Override
    public CourseDTO createCourse(CourseDTO courseDTO) {
        Course course = mapper.map(courseDTO, Course.class);
        course.setDateNow(LocalDate.now());
        courseRepository.save(course);
        return courseDTO;
    }

    @Override
    public CourseDTO updateCourse(Long id, CourseDTO courseDTO) {
        courseRepository.save(convertCourse(existCourse(id), courseDTO));
        return courseDTO;
    }

    private Course convertCourse(Course course, CourseDTO courseDTO) {
        course.setName(courseDTO.getName());
        course.setDescription(courseDTO.getDescription());
        course.setVideo(courseDTO.getVideo());
        course.setPrice(courseDTO.getPrice());
        course.setDuration(courseDTO.getDuration());
        course.setDateNow(LocalDate.now());
        return course;
    }

    @Override
    public CourseResponseDTO getCourseById(Long id) {
        return mapper.map(existCourse(id), CourseResponseDTO.class);
    }

    @Override
    public void deleteCourse(Long id) {
        existCourse(id);
        courseRepository.deleteById(id);
    }

    private List<CourseResponseDTO> mapListCourse(List<Course> courses) {
        return courses.stream()
                .map(course -> this.mapper.map(course, CourseResponseDTO.class))
                .collect(Collectors.toList());
    }

    private Course existCourse(Long id){
        Course course = null;
        try{
            course = courseRepository.findById(id).get();
        }catch (Exception e){
            throw new CourseNotFound("O curso não foi encontrado.");
        }
        return course;
    }
}
