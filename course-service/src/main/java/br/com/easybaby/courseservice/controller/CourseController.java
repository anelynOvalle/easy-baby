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

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CourseResponseDTO> listCourse(){
        return courseService.listCourse();
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public CourseResponseDTO getCourseById(@PathVariable("id") Long id){
        return courseService.getCourseById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CourseDTO createCourse(@RequestBody CourseDTO courseDTO){
        return courseService.createCourse(courseDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public CourseDTO updateCourse(@PathVariable("id") Long id,
                                  @RequestBody CourseDTO courseDTO){
        return courseService.updateCourse(id, courseDTO);
    }

    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCourse(@PathVariable("id") Long id){
        courseService.deleteCourse(id);
    }

}