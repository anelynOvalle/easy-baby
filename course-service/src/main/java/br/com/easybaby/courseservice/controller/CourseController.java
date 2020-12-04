package br.com.easybaby.courseservice.controller;

import br.com.easybaby.courseservice.dto.CourseDTO;
import br.com.easybaby.courseservice.dto.CourseResponseDTO;
import br.com.easybaby.courseservice.service.CourseService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("course")
public class CourseController {

    private CourseService courseService;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CourseResponseDTO> listCourse(){
        return courseService.listCourse();
    }

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public CourseResponseDTO getCourseById(@PathVariable("id") Long id){
        return courseService.getCourseById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CourseDTO createCourse(@RequestBody CourseDTO courseDTO){
        return courseService.createCourse(courseDTO);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public CourseDTO updateCourse(@PathVariable("id") Long id,
                                 @RequestBody CourseDTO courseDTO){
        return courseService.updateCourse(id, courseDTO);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCourse(@PathVariable("id") Long id){
        courseService.deleteCourse(id);
    }

}
