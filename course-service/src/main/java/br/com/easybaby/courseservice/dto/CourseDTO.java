package br.com.easybaby.courseservice.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
public class CourseDTO {

    private String name;
    private String description;
    private String video;
    private BigDecimal price;
    private String duration;
}